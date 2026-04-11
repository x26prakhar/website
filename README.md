<div align="center">

# Prakhar Singh

**MBA (PGPX) at IIM Ahmedabad · Former VC · Builder**

[![Website](https://img.shields.io/badge/website-live-0078d4?style=flat-square)](https://prakharsingh.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prakharsingh96-0a66c2?style=flat-square)](https://www.linkedin.com/in/prakharsingh96/)
[![Instagram](https://img.shields.io/badge/Instagram-prakhar.vc-e1306c?style=flat-square)](https://www.instagram.com/prakhar.vc/)

[About](#about) · [Pages](#pages) · [Tech Stack](#tech-stack) · [Run Locally](#run-locally)

</div>

---

## About

Personal website for Prakhar Singh — currently at [IIM Ahmedabad](https://www.iima.ac.in/) (MBA/PGPX). Previously VC at [Enzia Ventures](https://enzia.vc) and [Yunus Social Business](https://www.yunussocialbusiness.com/), philanthropy and education work at [The Convergence Foundation](https://www.theconvergencefoundation.org/) ([Accelerate Indian Philanthropy](https://www.indianphilanthropy.org/) · [Central Square Foundation](https://www.centralsquarefoundation.org/)), and policy research at [PRS Legislative Research](https://prsindia.org/) as a LAMP Fellow.

---

## Pages

| Page | Description |
|------|-------------|
| `/` | About — bio, background, contact |
| `/blog` | Blog posts (external links + internal essays) |
| `/publications` | Commissioned writing and media appearances |
| `/ai-experiments` | AI projects and experiments |
| `/creative-projects` | Creative work |
| `/posts/[slug]` | Individual post pages (for posts written on-site) |

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | [Astro](https://astro.build) 5.x |
| Language | TypeScript |
| Content | MDX (Astro Content Collections) |
| CMS | Sveltia CMS (`/admin`) via GitHub OAuth |
| Styling | Global CSS |
| Deployment | Vercel (auto-deploys on push to `main`) |

---

## File Structure

```
website/
├── src/
│   ├── content/posts/  # Blog posts in MDX
│   ├── layouts/        # BaseLayout
│   ├── pages/          # index, blog, publications, ai-experiments, creative-projects
│   └── styles/         # Global CSS
├── public/
│   ├── admin/          # Sveltia CMS config
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

## Adding a Blog Post

Pass a URL to the `/add-blog-post` Claude skill — it fetches metadata, creates the MDX file, commits, and pushes automatically. External posts (LinkedIn, Substack) link out to the original source; posts written for this site get their own page.

---

<div align="center">
  <a href="https://prakharsingh.vercel.app">prakharsingh.vercel.app</a>
  &nbsp;·&nbsp;
  <a href="https://www.instagram.com/prakhar.vc/">@prakhar.vc</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/x26prakhar">GitHub</a>
</div>
