# Engineering portfolio (Astro)

A responsive, editable portfolio for Isabelle P. Ho. The design combines an editorial cream layout with deep-navy technical sections, procedural artwork placeholders, and four individual project pages.

## Start locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (typically http://localhost:4321).

Production build:

```bash
npm run build
npm run preview
```

## Customize the content

- **Name, contact links, résumé, project text:** `src/data/site.ts`
- **Homepage:** `src/pages/index.astro`
- **About page:** `src/pages/about.astro`
- **Project page template:** `src/pages/projects/[slug].astro`
- **Colors, fonts, layout:** `src/styles/global.css`
- **Illustrated placeholders:** `src/components/ProjectVisual.astro`
- **Real project images:** place files in `public/images/`, then set each project's `image` to `/images/filename.webp` in `src/data/site.ts`
- **Résumé:** place a PDF in `public/files/`, then update `profile.resume` in `src/data/site.ts`

The adaptive link budget case study deliberately contains fill-in prompts because its technical details have not been verified. The project outcome prompts on the other pages also need your actual results and figures.

## Deploy

The simplest option is Cloudflare Pages or Netlify. Connect a GitHub repository, use build command `npm run build`, and output directory `dist`. Set `site` in `astro.config.mjs` to the published URL after deployment. Alternatively, use GitHub Pages with an Astro GitHub Actions deployment configuration and set the correct `site` (and `base` if publishing under a repository subpath).

**Before publishing:** add actual contact details, review project descriptions, add photographs/results, and confirm you are allowed to share images or code from internship/research projects. Do not publish confidential employer information.

## Publish online with Cloudflare Pages (recommended)

1. Create a free GitHub account at https://github.com if you don't have one.
2. Create a new GitHub repository (for example, `engineering-portfolio`).
3. Upload the **contents** of this project folder to the repository (not the ZIP file). Do not upload `node_modules` or `dist`.
4. Create or sign in to a Cloudflare account at https://dash.cloudflare.com.
5. In Cloudflare's **Workers & Pages** section, create a **Pages** project by connecting your GitHub repository (Git integration / import repository). If your dashboard offers only a Workers starter, look for the Pages Git integration option.
6. Configure the project with build command `npm run build` and build output directory `dist`; use the root directory `/` if prompted.
7. Deploy. Cloudflare gives you a public address such as `https://engineering-portfolio.pages.dev` (the actual address depends on availability and your chosen project name).
8. Each future push to your GitHub repository will trigger a new deployment.

**Optional:** After you know the public address, update `astro.config.mjs` to use it in the `site` field. Connect a purchased domain using your hosting provider's Custom domains settings.

**Important:** A public URL is accessible to anyone. Verify confidentiality/IP rules before posting project diagrams, code, or internship materials.
