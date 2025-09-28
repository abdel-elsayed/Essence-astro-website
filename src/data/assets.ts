import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type ResolveAssetOptions = {
  localCandidates?: string[];
  fallback?: string;
  extensions?: string[];
};

type RepoInfo = {
  owner: string;
  repo: string;
  ref: string;
};

const ensureRelative = (value: string) => value.replace(/^\/+/, '');
const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const assetBaseEnv = typeof import.meta.env.PUBLIC_ASSET_CDN_BASE === 'string'
  ? import.meta.env.PUBLIC_ASSET_CDN_BASE.trim()
  : '';
const assetBase = assetBaseEnv ? trimTrailingSlash(assetBaseEnv) : undefined;
const assetRepoInfo = parseRepoInfo(assetBase);

const FAILED_ASSET_PATH = '/images/failed-to-glow.jpg';
const REMOTE_DIR_CACHE = new Map<string, Promise<string[]>>();

const projectRoot = fileURLToPath(new URL('../..', import.meta.url));

const hasFileOnDisk = (relativePath: string) => {
  const cleaned = ensureRelative(relativePath);
  const diskPath = path.join(projectRoot, 'public', cleaned);
  return existsSync(diskPath);
};

const buildCandidates = (primary: string, options: ResolveAssetOptions) => {
  const { extensions = [], localCandidates = [] } = options;
  if (!extensions.length) {
    return [primary, ...localCandidates];
  }
  const withExtensions = extensions.map((ext) => `${primary}${ext}`);
  return [...withExtensions, ...localCandidates];
};

function parseRepoInfo(base?: string): RepoInfo | undefined {
  if (!base) return undefined;
  const match = base.match(/^https?:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^@]+)@([^/]+)$/i);
  if (!match) return undefined;
  return { owner: match[1], repo: match[2], ref: match[3] };
}

async function listRemoteFiles(dir: string): Promise<string[]> {
  if (!assetRepoInfo) return [];
  if (!REMOTE_DIR_CACHE.has(dir)) {
    REMOTE_DIR_CACHE.set(
      dir,
      (async () => {
        const { owner, repo, ref } = assetRepoInfo;
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${dir}?ref=${ref}`;
        try {
          const response = await fetch(url, {
            headers: { 'User-Agent': 'essence-medspa-site' }
          });
          if (!response.ok) {
            return [];
          }
          const data = await response.json();
          if (!Array.isArray(data)) {
            return [];
          }
          return data
            .filter((item: any) => item && typeof item.name === 'string' && item.type === 'file')
            .map((item: any) => item.name as string);
        } catch (error) {
          return [];
        }
      })()
    );
  }
  return REMOTE_DIR_CACHE.get(dir)!;
}

export const resolveAsset = (relativePath: string, options: ResolveAssetOptions = {}) => {
  const primary = ensureRelative(relativePath);
  const candidates = buildCandidates(primary, options).map(ensureRelative);

  if (assetBase) {
    return `${assetBase}/${candidates[0]}`;
  }

  for (const candidate of candidates) {
    if (hasFileOnDisk(candidate)) {
      return `/${candidate}`;
    }
  }

  return options.fallback;
};

export const homeHeroImage = () => assetImage('site/home/hero/hero-main.jpg');

export const serviceHeroImage = async (slug: string) => {
  const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const localCandidates = extensions.map((ext) => `images/services/${slug}/hero${ext}`);
  const basePath = `services/${slug}/hero/01-hero`;

  if (assetRepoInfo) {
    const files = await listRemoteFiles(`services/${slug}/hero`);
    const matchedExt = extensions.find((ext) => files.includes(`01-hero${ext}`));
    if (matchedExt) {
      return assetImage(`${basePath}${matchedExt}`, { localCandidates });
    }
  }

  return assetImage(basePath, { extensions, localCandidates });
};

export const assetImage = (relativePath: string, options: ResolveAssetOptions = {}) => {
  const url = resolveAsset(relativePath, { ...options, fallback: FAILED_ASSET_PATH });
  return {
    url,
    isFallback: url === FAILED_ASSET_PATH
  };
};
