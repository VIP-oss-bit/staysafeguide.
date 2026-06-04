# Stay Safe Guide — how the site works and how to update it

A plain-English reference for running **staysafeguide.com**. Keep this in the repo for future you.

## The setup in one picture

- The site is built with **Astro** (a static-site generator — it turns Markdown + templates into plain fast web pages).
- The code lives on **GitHub**: `github.com/VIP-oss-bit/staysafeguide.`
- It is hosted free on **Cloudflare Pages**, which is connected to that GitHub repo.
- The domain **staysafeguide.com** is registered and managed at **Cloudflare**.

## The Git ↔ Cloudflare link (the key bit)

Cloudflare Pages is wired to your GitHub repo. That means:

- **Every commit to the `main` branch on GitHub makes Cloudflare automatically rebuild and publish the site**, usually live in 1–2 minutes. You never upload files to Cloudflare by hand.
- Build settings (already set): Framework **Astro**, Build command **`npm run build`**, Output directory **`dist`**.
- The flow: **edit → commit to `main` on GitHub → Cloudflare detects it → runs the build → deploys → live on staysafeguide.com.**
- The `staysafeguide.pages.dev` address is Cloudflare's automatic backup URL for the same site. Use the `.com`.

## How to add or edit an article

1. Articles are Markdown files in **`src/content/articles/`**.
2. Make a new file, e.g. `best-vpn-uk.md`. Copy the top block (the "frontmatter") from an existing article and edit it:

```
---
title: "Your title"
description: "About 150 characters — this shows under the title in Google."
pubDate: 2026-06-10
cluster: "Scams & fraud"
author: "Iulian"
draft: false
---
```

3. Write the article in Markdown under the `---`.
4. Save → commit to `main` → live in ~2 minutes.

**`cluster` must EXACTLY match one of these** (defined in `src/consts.ts`): `Scams & fraud`, `VPNs & privacy`, `Password managers`, `Device & account security`. Set `draft: true` to keep something unpublished.

## How to upload changes to GitHub

- **Web (no tools):** open the repo on github.com → go to the folder → **Add file → Create new file** (for text) or **Upload files** (for images) → write a short message → **Commit changes**.
- **Command line (if you use git):** `git add .` then `git commit -m "..."` then `git push`.

## How to add images

- Put image files in the **`public/`** folder (e.g. `public/pihole-dashboard.png`).
- Reference them in an article as `/pihole-dashboard.png` (the leading slash means the public folder).
- Use **Upload files** on GitHub for images — they are binary, so the "create new file" text editor will not work for them.

## Affiliate links

- Amazon tag: **`staysafeguide-21`**. Format: `https://www.amazon.co.uk/...?tag=staysafeguide-21`.
- Always mark affiliate links: `rel="sponsored nofollow noopener" target="_blank"`.
- Every article shows the affiliate-disclosure box automatically, and the disclosure page carries the required "As an Amazon Associate we earn from qualifying purchases" line.

## Where things live (quick map)

- `src/content/articles/` — the articles (Markdown)
- `src/consts.ts` — site name, the top menu, and the four clusters (name, colour, icon)
- `src/pages/` — homepage, topic pages, legal pages, the Guides page
- `src/layouts/` — page and article templates (SEO tags, author bio, share buttons)
- `src/styles/global.css` — all styling (the colours are the variables at the very top)
- `public/` — images, `robots.txt`, favicon

## If a deploy fails

Open the build log in the **Cloudflare Pages** dashboard. A red error almost always points to a small typo in an article's frontmatter (often a `cluster` value that does not match exactly). Fix it, commit again, done.

## The accounts involved

- **GitHub:** VIP-oss-bit (repo `staysafeguide.`)
- **Cloudflare:** hosting (Pages) + the domain
- **Google Search Console:** verified, sitemap submitted
- **Amazon Associates:** tag `staysafeguide-21`
