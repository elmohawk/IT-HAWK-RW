# IT HAWK RW — Business Portfolio

Responsive dark-themed portfolio website for **IT HAWK RW**, a creative and technology umbrella brand based in Rwanda.

## Project files
- `index.html` — website structure, SEO metadata, portfolio gallery, inquiry form and social links
- `styles.css` — responsive visual system, gallery and contact form styling
- `script.js` — mobile navigation, gallery filters, reveal effects and WhatsApp inquiry handoff
- `favicon.svg` — brand favicon
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

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

## Deploy with GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Merge the website changes into `main`.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the static site on pushes to `main`.
5. Check the **Actions** tab for the deployment result and the Pages URL in Settings → Pages.

The workflow requires GitHub Pages to be enabled for this repository. This change adds the workflow file but does not change repository settings or deploy automatically.

## Before launch
- Add genuine portfolio images and project descriptions.
- Confirm all social profile URLs and the WhatsApp number.
- Test the form on desktop and mobile, including WhatsApp app/browser handoff.
- Add a custom domain, canonical URL, social preview image and sitemap when the final domain is known.
- Test accessibility, links and page performance.

© IT HAWK RW