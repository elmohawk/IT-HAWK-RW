# IT HAWK RW — Business Portfolio

Responsive dark-themed portfolio website for **IT HAWK RW**, a creative and technology umbrella brand based in Rwanda.

## Project files
- `index.html` — website structure, SEO metadata, portfolio gallery, inquiry form and social links
- `styles.css` — responsive visual system, gallery and contact form styling
- `script.js` — mobile navigation, gallery filters, reveal effects and WhatsApp inquiry handoff
- `favicon.svg` — Hawk emblem favicon
- `assets/brand/hawk-graphix.svg` — scalable Hawk Graphix logo artwork
- `_headers` — Cloudflare Pages security and caching headers
- `404.html` — branded not-found page
- `robots.txt` — search crawler rules

## Run locally
Open `index.html` in a browser. No build tools or package installation are required.

## Contact and social links
The inquiry form prepares a message and opens WhatsApp at **+250 794 669 266**. The visitor must review and press Send in WhatsApp. This static site does not store form submissions or send data to a database.

Social profiles currently linked:
- Facebook: https://www.facebook.com/mrhawk734
- WhatsApp: https://wa.me/250794669266
- TikTok: https://www.tiktok.com/@mrhawk733
- X: https://x.com/mrhawk2007
- Instagram: https://www.instagram.com/hawk_mrperfect/
- YouTube: https://youtube.com/@mrhawk_rw
- Telegram: https://t.me/it_hawk_rw

## Add real portfolio images
The gallery layout and category filters are ready. The current gallery artwork is clearly marked as visual placeholders, not real client work. Add your own approved project images under `assets/portfolio/` and replace each gallery-art placeholder in `index.html` with an `img` element using a descriptive alt attribute. Suggested names:
- `branding-01.webp`
- `graphic-design-01.webp`
- `web-design-01.webp`
- `video-production-01.webp`
- `print-design-01.webp`
- `social-design-01.webp`

Compress images to WebP/AVIF and provide explicit width and height attributes.

## Deploy with Cloudflare Pages

This repository is intended to deploy through the existing Cloudflare Pages Git integration. No GitHub Actions deployment workflow is required.

1. In the Cloudflare dashboard, open **Workers & Pages → your Pages project → Settings → Builds & deployments**.
2. Confirm the connected GitHub repository is `elmohawk/IT-HAWK-RW` and the production branch is `main`.
3. Set **Framework preset** to **None**.
4. Leave **Build command** empty (or use `exit 0` if the dashboard requires a command).
5. Set **Build output directory** to `.` (the repository root, where `index.html` lives).
6. Save the settings. Merge the approved website changes into `main`; Cloudflare should automatically build and deploy the new commit.
7. Check the Cloudflare Pages **Deployments** tab for the deployment status and production URL.

Preview deployments may be created for other branches depending on the Cloudflare project settings. This repository change does not alter your Cloudflare account or project settings.


## Before launch
- Add genuine portfolio images and project descriptions.
- Confirm all social profile URLs and the WhatsApp number.
- Test the form on desktop and mobile, including WhatsApp app/browser handoff.
- Add a custom domain, canonical URL, social preview image and sitemap when the final domain is known.
- Test accessibility, links and page performance.

© IT HAWK RW

## Brand logo
The supplied black-and-white Hawk Graphix artwork has been recreated as a scalable SVG logo for the site header, with a matching emblem favicon. The SVG can be resized without pixelation.