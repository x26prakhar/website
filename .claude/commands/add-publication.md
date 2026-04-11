---
description: Add a new publication card to the publications page from a URL
allowed-tools: WebFetch, Read, Edit
---

# Add Publication

The user has provided a URL for a new publication. Add it as a card to `src/pages/publications.astro`.

## Step 1 — Fetch the URL

Use WebFetch to read the page. Extract:
- **Title** — exact publication title
- **Outlet** — the name of the publisher/journal/outlet (e.g. "Enzia Ventures", "Ideas for India", "The Telegraph")
- **Date** — publication date (Month YYYY format, or just YYYY if only year is known)
- **Description** — 1-2 sentences on what the piece is actually about. No em dashes. No AI-sounding phrases. Direct, human sentences.
- **Category** — one of: Venture Capital, Health, Education, Policy, Philanthropy, or a new one if none fit

If the page is blocked (403, paywall, framework code), ask the user to describe the piece briefly, then write the description yourself.

## Step 2 — Pick or create a color

Map the category to a color key using the existing colorMap in the file:
- `vc` — Venture Capital
- `health` — Health
- `education` — Education
- `policy` — Policy
- `philanthropy` — Philanthropy

If the category is new, add a new entry to the `colorMap` object with a muted background color (`bg`) and a matching dark label color (`label`). Use the same muted pastel style as existing colors.

## Step 3 — Add the publication

Read `src/pages/publications.astro`. Add a new entry to the `publications` array at the top (most recent first):

```js
{
  title: "...",
  outlet: "...",
  date: "...",
  category: "...",
  description: "...",
  url: "THE_URL_THE_USER_PROVIDED",
  color: "...",
},
```

Rules for the description:
- No em dashes (use a period or rewrite the sentence)
- No phrases like "delves into", "explores", "unpacks", "examines", "sheds light on"
- Write what the piece argues or covers, not what it "does"
- Keep it under 2 sentences

## Step 4 — Confirm

Tell the user the publication has been added and what color category was used. If you created a new color category, mention that too.
