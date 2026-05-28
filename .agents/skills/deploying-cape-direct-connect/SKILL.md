---
name: deploying-cape-direct-connect
description: Deploy the Cape Direct Connect Next.js site to production. Use when deploying to Vercel, configuring environment variables, or setting up a custom domain.
---

# Deploying Cape Direct Connect

## Tech Stack

- Next.js 16.2.6 (App Router)
- React 19, TypeScript, Tailwind CSS v4
- nodemailer for form email submissions
- Static generation for all pages (no runtime DB)

## Build

```bash
npm run build
```

Produces static HTML for all 43+ pages. The build must pass before deploying.

## Vercel Deployment (Recommended)

1. Connect the GitHub repo (`TafadzwaB/cape-direct-connect`) to Vercel
2. Framework: Next.js (auto-detected)
3. Build command: `npm run build`
4. Output directory: `.next` (default)
5. Node.js version: 20.x

## Required Environment Variables (Production)

| Variable | Purpose | Example |
|----------|---------|--------|
| `SMTP_HOST` | SMTP server for sending form emails | `smtp.gmail.com` |
| `SMTP_USER` | SMTP username/email | `notifications@capedirectconnect.co.za` |
| `SMTP_PASS` | SMTP password or app-specific password | (secret) |

Without these, the form submission API (`/api/quote`) falls back to console logging instead of sending emails to `info@capetown-dstv.co.za`.

## Custom Domain Setup

- Primary domain: `capedirectconnect.co.za` (or `capetown-dstv.co.za`)
- Add both www and non-www variants
- Vercel handles SSL automatically

## Post-Deploy Verification Checklist

1. Homepage loads with all sections
2. `/blog` shows 27 posts
3. `/sitemap.xml` returns valid XML
4. `/robots.txt` returns correct content
5. Form submission at `/contact` returns success
6. Old URLs redirect (e.g. `/how-to-fix-signal-strength-on-dstv-e48-32-error-message` → 308 → `/blog/...`)
7. 404 page shows branded error (navigate to `/nonexistent-page`)
8. GTM-T52JTTT loads in page source (check Network tab for gtm.js)
9. Check Google Search Console for indexing

## URL Redirects

All 28 redirects in `next.config.ts` preserve SEO from the old site (capetown-dstv.co.za). These redirect old root-level blog URLs to the new `/blog/` prefix structure.

## Rollback

Vercel supports instant rollback to previous deployments via the dashboard. If a deploy causes issues, roll back immediately and investigate locally.

## Performance Notes

- All pages are statically generated at build time
- No database or external API calls at runtime (except form submission)
- Images are emoji-based (no external image optimization needed)
- Tailwind CSS is tree-shaken at build time
