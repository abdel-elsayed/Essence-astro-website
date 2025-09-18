# Essence MedSpa – Astro Patch

This patch adds:
- Tailwind theme tokens + fonts
- Base layout shell
- Home page (elevated hero + sections)
- Content Collections for services
- Services index and dynamic service page
- Booking page + (placeholder) Vagaro widget

## How to apply
1) Place the files into your Astro project keeping the same paths.
2) Ensure you have Tailwind & MDX integrations installed:
   ```bash
   npx astro add tailwind mdx sitemap robots-txt
   ```
3) Add your real business info (address, phone, hours) and images.
4) Set your domain in `astro.config.mjs` (site field).
5) Add your Vagaro business id in `.env` as `PUBLIC_VAGARO_ID=...`.
6) Run:
   ```bash
   npm install
   npm run dev
   ```

## Notes
- Colors & fonts are in Tailwind config and BaseLayout head.
- Replace placeholder images in `/public/images/...` or update paths.
- Delete or modify any demo service MDX files in `src/content/services/`.
