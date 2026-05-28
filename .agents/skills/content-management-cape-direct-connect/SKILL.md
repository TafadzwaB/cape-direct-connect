---
name: content-management-cape-direct-connect
description: Add, edit, or remove blog posts and site content for Cape Direct Connect. Use when adding new blog posts, updating service descriptions, modifying contact info, or adding new service areas.
---

# Content Management — Cape Direct Connect

## Site Data Location

All content is stored in TypeScript files (no CMS or database):

| Content | File | Description |
|---------|------|-------------|
| Contact info, services list, areas, testimonials, FAQs | `src/data/siteData.ts` | Central config |
| Blog posts (27 total) | `src/data/blogPosts.ts` | Array of BlogPost objects |
| URL redirects | `next.config.ts` | Old URL → new URL mappings |

## Adding a New Blog Post

### 1. Add the post data

Edit `src/data/blogPosts.ts` and add a new object to the `blogPosts` array:

```typescript
{
  slug: "your-url-friendly-slug",
  title: "Your Post Title",
  excerpt: "A short 1-2 sentence summary for the listing card.",
  date: "2024-03-15",  // YYYY-MM-DD format
  category: "Service Areas",  // One of: Troubleshooting, How-To Guide, DStv Tips, Commercial, Case Study, Service Areas, News
  content: `Your full post content here.

Use markdown-style headings:
## Section Heading

Paragraph text goes here. Reference the business as "Cape Direct Connect" and include a CTA mentioning the phone number 021 200 1537.

## Another Section

More content...`,
}
```

### 2. Add a redirect (if migrating from old URL)

If the post previously lived at a root-level URL on the old site, add a redirect in `next.config.ts`:

```typescript
{
  source: "/old-url-slug",
  destination: "/blog/your-url-friendly-slug",
  permanent: true,
},
```

### 3. Verify

```bash
npm run build  # Ensures static generation works
npm run dev    # Check http://localhost:3000/blog/your-url-friendly-slug
```

The blog listing page (`/blog`) and sitemap (`/sitemap.xml`) automatically include new posts.

## Blog Post Categories

| Category | Use for |
|----------|--------|
| Troubleshooting | Error fixes, signal issues |
| How-To Guide | Step-by-step instructions |
| DStv Tips | General tips and advice |
| Commercial | Business/hotel installations |
| Case Study | Real customer stories |
| Service Areas | Location-specific landing pages |
| News | Company updates, announcements |

## Updating Contact Information

Edit `src/data/siteData.ts`:

```typescript
export const PHONE = "021 200 1537";
export const PHONE_HREF = "tel:+27212001537";
export const WHATSAPP = "https://wa.me/27212001537?text=...";
export const EMAIL = "info@capedirectconnect.co.za";
export const ADDRESS = "Cape Town, Western Cape, South Africa";
export const BUSINESS_NAME = "Cape Direct Connect";
```

These values are imported across all components — change once, updates everywhere.

## Adding a New Service Area Page

Service area pages are blog posts with category "Service Areas". Follow the blog post steps above with:
- Category: `"Service Areas"`
- Content: include sections for DStv Installation, DStv Repairs, TV Wall Mounting in [Area]
- CTA: "Call Cape Direct Connect on 021 200 1537 for DStv services in [Area]"

## Adding a New Service

1. Add to `services` array in `src/data/siteData.ts`
2. Create page at `src/app/[service-slug]/page.tsx` using `ServicePageLayout`
3. Update sitemap in `src/app/sitemap.ts`

## Content Style Guide

- Business name: "Cape Direct Connect" (always full name, capitalized)
- Phone display: "021 200 1537" (with spaces)
- Phone href: "tel:+27212001537" (no spaces, with country code)
- Location: "Cape Town, Western Cape, South Africa"
- Tone: Professional, helpful, local (South African English)
- Always include a CTA at the end of blog posts
- Area pages should mention specific suburbs
