---
description: Publish a new blog post with optional YouTube video
allowed-tools: Write, Bash, Read
---

# Publish Blog Post

Help the user publish a new blog post to their website.

## Ask the user for:
1. **Title** - Post title (required)
2. **YouTube URL** - If they have a video (optional)
3. **Content** - The post text (required)
4. **Category** - One of: "India Market Insights", "Indian Startups & Business", "AI Tools & Workflows", "Marketing & Content", "Personal"

## Then:
1. Create slug from title (lowercase, hyphens)
2. Extract YouTube video ID if URL provided
3. Create MDX file at `src/content/posts/{slug}.mdx` with format:

```mdx
---
title: "{title}"
date: {today's date YYYY-MM-DD}
excerpt: "{first 150 chars of content}"
category: "{category}"
---

{If YouTube URL provided, add: <iframe width="100%" height="400" src="https://www.youtube.com/embed/{videoId}" frameborder="0" allowfullscreen></iframe>}

{content}
```

4. Push to GitHub:
```bash
cd "c:/Users/prakh/AI Experiments/prakhar-website-astro"
git add .
git commit -m "Add post: {title}"
git push origin main
```

5. Tell user the post will be live at `https://comforting-speculoos-d46c49.netlify.app/posts/{slug}/` in 1-2 minutes.
