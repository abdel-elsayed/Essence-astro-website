# Essence MedSpa Website

Essence MedSpa is an Astro + TailwindCSS build optimized for fast performance, clean content modelling, and strong on-page SEO. Services are managed with Astro Content Collections (MDX) so new treatments can be published with rich metadata in minutes.

## Tech Stack
- [Astro 5](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com) with custom theme tokens and typography plugin
- [MDX Content Collections](https://docs.astro.build/en/guides/content-collections/) for service entries
- Netlify-friendly enhancements (form handling, sitemap integration, robots.txt)

## Project Structure
```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── services/*.mdx
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── book.astro
│   │   ├── contact.astro
│   │   ├── gallery.astro
│   │   ├── index.astro
│   │   └── services/
│   │       ├── [slug].astro
│   │       └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
└── .env.example
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment example and add your Vagaro business ID:
   ```bash
   cp .env.example .env
   # set PUBLIC_VAGARO_ID=your_business_id
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production (Netlify-ready output in `dist/`):
   ```bash
   npm run build
   ```

## Content Collections
Service entries live in `src/content/services`. Each MDX file supports:
- `title`, `slug`, `price`, `duration`, `excerpt`, `category`
- `image`, `imageAlt`
- Optional arrays: `benefits`, `inclusions`, `addOns`
- Optional `featured: true` flag to promote services on the home page.

## Deployment Notes
- Update `astro.config.mjs` with the live domain (already set to `https://essence-medspa.com`).
- Netlify forms: the contact form posts via Netlify’s form handling (`data-netlify="true"`).
- Sitemap and robots are generated automatically via `@astrojs/sitemap` and the static `robots.txt` file.

Feel free to replace placeholder copy, team details, and imagery with real brand assets before launching.
