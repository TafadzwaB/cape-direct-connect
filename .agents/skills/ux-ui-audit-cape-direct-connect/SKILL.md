---
name: ux-ui-audit-cape-direct-connect
description: Run a comprehensive UX/UI audit on the Cape Direct Connect website. Use when evaluating design quality, accessibility, conversion optimization, mobile responsiveness, or visual hierarchy.
---

# UX/UI Audit — Cape Direct Connect

## Audit Methodology

Run audits in this order: Lighthouse (automated metrics) → Accessibility → Mobile Responsiveness → Visual Hierarchy → Conversion UX → Content Readability → Interaction Design.

## 1. Lighthouse Performance Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run against dev server
lighthouse http://localhost:3000 --output=json --output=html --output-path=./lighthouse-report --chrome-flags="--headless --no-sandbox"

# Key pages to audit
lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo
lighthouse http://localhost:3000/blog --only-categories=performance,accessibility
lighthouse http://localhost:3000/contact --only-categories=performance,accessibility
lighthouse http://localhost:3000/dstv-installation --only-categories=performance,accessibility
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 2. Accessibility Checklist (WCAG 2.1 AA)

### Color Contrast
- [ ] All text meets 4.5:1 contrast ratio (normal text)
- [ ] Large text (18px+ or 14px+ bold) meets 3:1 ratio
- [ ] Focus indicators visible on all interactive elements
- [ ] Color is not the only means of conveying information

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Focus order follows visual/logical order
- [ ] Dropdown menus operable via keyboard
- [ ] Modal/accordion components trappable and escapable
- [ ] Skip-to-content link present

### Screen Reader
- [ ] All images have meaningful alt text (or empty alt for decorative)
- [ ] Form inputs have associated labels (not just placeholders)
- [ ] ARIA roles used correctly on custom components
- [ ] Page landmarks present (nav, main, footer)
- [ ] Heading hierarchy is logical (h1 → h2 → h3, no skips)

### Forms
- [ ] Error messages are descriptive and associated with fields
- [ ] Required fields clearly marked (not just by color)
- [ ] Form validation feedback is accessible to screen readers
- [ ] Labels visible (not placeholder-only)

## 3. Mobile Responsiveness Checklist

### Breakpoints to test: 375px, 428px, 768px, 1024px, 1440px

- [ ] No horizontal scrolling at any breakpoint
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming (min 16px body)
- [ ] Sticky CTA bar doesn't obscure content
- [ ] Forms are usable on mobile (no tiny inputs)
- [ ] Navigation hamburger works smoothly
- [ ] Cards stack properly on mobile
- [ ] Hero section text doesn't overflow
- [ ] WhatsApp floating button doesn't overlap sticky CTA

## 4. Visual Hierarchy & Design Audit

### Typography
- [ ] Consistent heading sizes across pages
- [ ] Body text line-height is 1.5-1.7 for readability
- [ ] Paragraph width doesn't exceed 75 characters
- [ ] Font weights create clear visual hierarchy

### Spacing
- [ ] Consistent section padding (py-16 md:py-20 pattern)
- [ ] Card grid gaps are uniform
- [ ] Content doesn't touch container edges on mobile
- [ ] Whitespace between sections feels balanced

### Color System
- [ ] Primary blue (blue-700/900) used consistently
- [ ] CTA colors are consistent (yellow-400 for primary, green-500 for WhatsApp)
- [ ] Background alternation (white ↔ gray-50) creates rhythm
- [ ] Error states use red, success uses green consistently

### Visual Polish
- [ ] Hover states on all clickable elements
- [ ] Transitions are smooth (150-300ms)
- [ ] Shadow usage is consistent (shadow-sm for cards, shadow-lg for elevated)
- [ ] Border radius consistent (rounded-lg or rounded-xl)
- [ ] No orphaned elements or broken layouts

## 5. Conversion UX Audit

### CTAs (Call-to-Action)
- [ ] Primary CTA visible above the fold on every page
- [ ] CTA button text is action-oriented ("Call Now", not "Submit")
- [ ] Phone number is click-to-call on mobile
- [ ] WhatsApp button is always accessible
- [ ] Quote form is on every service page
- [ ] Form has minimal fields (reduce friction)

### Trust Signals
- [ ] Testimonials visible and compelling
- [ ] Star ratings displayed prominently
- [ ] "Same-day service" messaging is clear
- [ ] "Accredited installers" badge/text visible
- [ ] Business contact info in footer

### User Flow
- [ ] User can get to quote form in ≤2 clicks from any page
- [ ] Service pages lead naturally to conversion
- [ ] Blog posts have CTAs to services
- [ ] 404 page directs users back to key pages
- [ ] No dead ends (every page has a next action)

## 6. Content Readability Audit

- [ ] Headlines are clear and benefit-focused
- [ ] Bullet points used for scannable content
- [ ] Paragraphs are short (3-4 lines max)
- [ ] Technical jargon is explained
- [ ] Local relevance (Cape Town, specific suburbs mentioned)

## 7. Interaction Design Audit

### Micro-interactions
- [ ] Button hover/active states feel responsive
- [ ] Accordion open/close is animated
- [ ] Carousel transitions are smooth
- [ ] Loading states for form submission
- [ ] Success/error feedback is immediate and clear

### Navigation
- [ ] Current page indicated in nav
- [ ] Breadcrumbs on blog posts
- [ ] Back-to-top option on long pages
- [ ] Services dropdown doesn't require precise mouse targeting

## Common Issues to Fix

| Issue | Impact | Fix |
|-------|--------|-----|
| Placeholder-only form labels | Accessibility failure | Add visible `<label>` elements |
| Missing skip-nav link | Keyboard users can't skip header | Add skip-to-main link |
| Low contrast text (gray-400 on white) | WCAG AA violation | Use gray-600 minimum |
| No focus ring on custom buttons | Keyboard nav broken | Add `focus:ring-2 focus:ring-blue-500` |
| WhatsApp button overlap with sticky CTA | Mobile usability | Adjust bottom positioning |
| No loading skeleton for blog posts | Perceived performance | Add skeleton placeholder |
| Area tags not keyboard navigable | Accessibility | Make them links or buttons |
| Form success replaces form entirely | User can't submit again | Add "Submit another" option |

## Quick Visual Audit via Browser

```
1. Open dev tools → Lighthouse tab → Run audit
2. Open dev tools → Elements → Accessibility pane → Check aria tree
3. Resize to 375px → Check mobile layout
4. Tab through entire page → Verify focus order
5. Check all hover states on buttons/links
6. Disable CSS → Verify content structure makes sense
7. Check page in dark reader → Contrast issues become obvious
```

## Design System Reference

| Token | Value | Usage |
|-------|-------|-------|
| Primary | blue-700 / blue-900 | Headers, nav, CTAs |
| Accent | yellow-400 | Primary CTA buttons |
| Success | green-500 | WhatsApp, success states |
| Error | red-600 | Emergency banner, errors |
| Surface | white / gray-50 | Alternating sections |
| Text Primary | gray-900 | Headings |
| Text Secondary | gray-600 | Body text |
| Text Tertiary | gray-400 | Dates, captions |
| Border | gray-100 / gray-200 | Cards, dividers |
| Radius | rounded-lg (8px) / rounded-xl (12px) | Buttons / Cards |
| Shadow | shadow-sm / shadow-md / shadow-lg | Cards / Elevated / Hero form |
