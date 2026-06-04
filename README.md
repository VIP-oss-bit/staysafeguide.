# Stay Safe Guide

Plain-English online safety website. Built with [Astro](https://astro.build) as a fast static site, hosted free on Cloudflare Pages.

## Requirements
- Node.js 20 (set in `.nvmrc`)

## Commands
Run these from the project folder:

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Preview locally at http://localhost:4321 |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the built site locally |

You do not need to run these to go live. Cloudflare Pages runs `npm install` and `npm run build` for you on every push.

## Adding a new article
1. Create a new file in `src/content/articles/`, for example `is-nordvpn-worth-it.md`.
2. Copy the frontmatter block from an existing article and edit it. The `cluster` value must exactly match one of the cluster names in `src/consts.ts`.
3. Write the article body in Markdown below the frontmatter.
4. Save, commit and push. Cloudflare Pages rebuilds automatically.

## Cloudflare Pages settings
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

## Project map
- `src/consts.ts` — site name, navigation, the four topic clusters
- `src/layouts/` — page and article templates (includes SEO tags and schema)
- `src/content/articles/` — the articles (Markdown)
- `src/pages/` — homepage, topic pages, legal pages, article routing
- `public/` — favicon, robots.txt, headers
