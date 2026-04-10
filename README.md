<div align="center">

# Prakhar Singh

**VC · Writer · Builder**

[![Website](https://img.shields.io/badge/website-live-0078d4?style=flat-square)](https://comforting-speculoos-d46c49.netlify.app)
[![Enzia Ventures](https://img.shields.io/badge/work-Enzia%20Ventures-22c55e?style=flat-square)](https://enzia.vc)
[![Newsletter](https://img.shields.io/badge/newsletter-The%20Elusive%20Impact-f59e0b?style=flat-square)](https://www.linkedin.com/newsletters/the-elusive-impact-6973936476893241344/)

[About](#about) · [Writing](#writing) · [Tech Stack](#tech-stack) · [Run Locally](#run-locally)

</div>

---

## About

Personal website for Prakhar Singh — VC at [Enzia Ventures](https://enzia.vc), investing in founders building for Climate, Health, and Education across India.

Previously at Yunus Social Business, The Convergence Foundation (Accelerate Indian Philanthropy & Central Square Foundation), and PRS Legislative Research (LAMP Fellow).

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — intro, background, recent posts |
| `/writing` | All blog posts |
| `/posts/[slug]` | Individual post pages |
| `/contact` | Get in touch |
| `/wall-of-love` | Testimonials |

---

## Writing

Monthly newsletter [The Elusive Impact](https://www.linkedin.com/newsletters/the-elusive-impact-6973936476893241344/) — covering economics, public policy, and impact investing. Writing has appeared in Mint, Telegraph, Economic & Political Weekly, and Times of India.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | [Astro](https://astro.build) |
| Language | TypeScript |
| Content | MDX (Astro Content Collections) |
| CMS | Netlify CMS (`/admin`) |
| Styling | Global CSS |
| Deployment | Netlify (primary) · Vercel |

---

## File Structure

```
website/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/posts/  # Blog posts in MDX
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes: index, writing, contact, wall-of-love
│   └── styles/         # Global CSS
├── public/
│   ├── admin/          # Netlify CMS config
│   └── images/         # Static assets
├── astro.config.mjs
└── tsconfig.json
```

---

## Run Locally

```bash
git clone https://github.com/x26prakhar/website.git
cd website
npm install
npm run dev
```

Open `http://localhost:4321`

---

## Deploy

Netlify auto-deploys on push to `main`.

---

<div align="center">
  Built by <a href="https://enzia.vc">Prakhar Singh</a>
  &nbsp;·&nbsp;
  <a href="https://www.instagram.com/prakhar.vc/">@prakhar.vc</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/x26prakhar">GitHub</a>
</div>
