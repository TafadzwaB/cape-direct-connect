---
name: seo-verification-cape-direct-connect
description: Verify SEO elements of the Cape Direct Connect site. Use when checking schema markup, meta tags, sitemap, robots.txt, Google Tag Manager, or Open Graph tags.
---

# SEO Verification — Cape Direct Connect

## Quick Checks (Shell Commands)

### Sitemap
```bash
# Count all URLs in sitemap
curl -s http://localhost:3000/sitemap.xml | grep -c "<url>"

# Verify blog URLs present (should be 28: 1 /blog + 27 posts)
curl -s http://localhost:3000/sitemap.xml | grep -c "/blog"
```

### Robots.txt
```bash
curl -s http://localhost:3000/robots.txt
# Should show: User-Agent: *, Allow: /, Sitemap URL
```

### Google Tag Manager (GTM-T52JTTT)
```bash
# Verify GTM appears in page source (should be 2+: script + noscript)
curl -s http://localhost:3000/ | grep -o "GTM-T52JTTT" | wc -l

# Verify gtm.js URL present
curl -s http://localhost:3000/ | grep -o "googletagmanager.com/gtm.js" | wc -l

# Verify noscript fallback
curl -s http://localhost:3000/ | grep -o "googletagmanager.com/ns.html" | wc -l
```

### Meta Tags
```bash
# Check page title
curl -s http://localhost:3000/ | grep -o "<title>[^<]*</title>"

# Check meta description
curl -s http://localhost:3000/ | grep -o 'name="description" content="[^"]*"'

# Check Open Graph
curl -s http://localhost:3000/ | grep -o 'property="og:[^"]*" content="[^"]*"'
```

### URL Redirects (SEO preservation)
```bash
# Test a blog redirect (should be 308)
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/how-to-fix-signal-strength-on-dstv-e48-32-error-message

# Test /news redirect
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/news
```

## Schema Markup (JSON-LD)

The site uses structured data for SEO. Verify with:

```bash
# Homepage - LocalBusiness schema
curl -s http://localhost:3000/ | grep -o '"@type":"LocalBusiness"'

# Service pages - Service schema
curl -s http://localhost:3000/dstv-installation | grep -o '"@type":"Service"'

# Blog posts - BlogPosting schema
curl -s http://localhost:3000/blog/how-to-fix-signal-strength-on-dstv-e48-32-error-message | grep -o '"@type":"BlogPosting"'
```

### Schema Fields to Verify

**LocalBusiness (Homepage):**
- `name`: "Cape Direct Connect"
- `telephone`: "+27212001537"
- `areaServed`: Cape Town
- `@type`: "LocalBusiness"

**Service (Service Pages):**
- `name`: Service title
- `provider.name`: "Cape Direct Connect"
- `areaServed`: Cape Town region

**BlogPosting (Blog Posts):**
- `headline`: Post title
- `datePublished`: Post date
- `author.name`: "Cape Direct Connect"

## Page Title Pattern

| Page | Expected Title |
|------|---------------|
| Homepage | Cape Direct Connect \| DStv Installation & Repairs Cape Town |
| Service pages | [Service Name] \| Cape Direct Connect |
| Blog listing | Blog & News \| Cape Direct Connect |
| Blog posts | [Post Title] \| Cape Direct Connect |
| Contact | Contact Us \| Cape Direct Connect |
| Areas | Areas We Cover \| Cape Direct Connect |

**Rule:** No page should have "Cape Direct Connect" appearing twice in the title.

## GTM Implementation Details

- Container ID: `GTM-T52JTTT`
- Script injection: `src/app/layout.tsx` lines 55-65 (Script component, `afterInteractive` strategy)
- Noscript fallback: `src/app/layout.tsx` lines 68-75 (iframe in body)
- Both are required for full GTM coverage

## Redirect Configuration

- File: `next.config.ts`
- 28 total redirects (27 blog posts + 1 /news → /blog)
- All use `permanent: true` (HTTP 308 in Next.js)
- Purpose: Preserve link equity from old site (capetown-dstv.co.za) root-level URLs

## Google Search Console Notes

- Submit sitemap URL after deploying: `https://[domain]/sitemap.xml`
- Monitor redirect chain for any 404s on old URLs
- Verify structured data in Search Console's Rich Results test
- Check mobile usability report

## Validation Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results) — paste page URL to validate schema
- [Schema.org Validator](https://validator.schema.org/) — paste JSON-LD to check syntax
- [Google Tag Assistant](https://tagassistant.google.com/) — verify GTM fires correctly
- [PageSpeed Insights](https://pagespeed.web.dev/) — check Core Web Vitals
