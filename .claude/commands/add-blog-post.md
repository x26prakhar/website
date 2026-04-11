---
description: Fetch a URL (LinkedIn article, Substack post, etc.) and create a blog listing entry that links to the original source
allowed-tools: WebFetch, Read, Write, Bash
---

# Add Blog Post from URL

The user has provided a URL to an article they wrote (LinkedIn, Substack, newsletter, etc.). Add it to the blog listing as an external link — clicking it on the blog will open the original source. Do NOT create a full internal page for it.

## Step 1 — Fetch the URL

Use WebFetch to read the page. Extract:
- **Title** — exact article title
- **Date** — publication date (YYYY-MM-DD format). If only month/year known, use the 1st of that month. If unknown, use today's date.
- **Excerpt** — 1 sentence summary of what the piece is about. No em dashes. No AI-sounding phrases ("delves into", "explores", "unpacks"). Write what it argues or covers, directly.
- **Category** — one of: `VC and Startups`, `AI`, `Economics and Public Policy`, `Personal`, `Others`

If the page is blocked (403, paywall, login wall), extract as much as possible from the summary/metadata. Do not ask the user — make your best inference.

## Step 2 — Generate a slug

Create a URL-friendly slug from the title:
- Lowercase
- Replace spaces with hyphens
- Remove special characters
- Max ~60 characters

## Step 3 — Create the MDX file

Write to `src/content/posts/{slug}.mdx` with ONLY frontmatter — no body content:

```mdx
---
title: "{title}"
date: {YYYY-MM-DD}
excerpt: "{excerpt}"
category: "{category}"
url: "{the original URL the user provided}"
---
```

The `url` field is what makes this link out to the original source instead of creating an internal page.

## Step 4 — Commit and push

Run:
```bash
git add src/content/posts/{slug}.mdx
git commit -m "Add blog post: {title}"
git push origin main
```

## Step 5 — Confirm

Tell the user:
- Post title
- Category assigned
- That clicking it on /blog will open the original source in a new tab
- That it will appear once Vercel redeploys (1-2 min)

---

**Note:** If the user says they wrote the article originally FOR the website (not published elsewhere), create a full MDX post with body content and no `url` field — that gets its own page at /posts/{slug}.
