---
name: portfolio-design-system
description: Build any new interface (app screens, pages, layouts, components) in Gunasethu's portfolio design system: light, airy, near-monochrome, Instrument Sans, hairline borders, soft pastel tints, no brand color. Use whenever asked to design, lay out or mock up a UI, screen or product in this style, including products the system has never covered.
---

# Portfolio design system

Build interfaces that read as unmistakably this system. The code in this repo is the source of truth. This skill explains how to use it.

## Before designing anything

1. Read `design-system/tokens.css`. Every color, type size, space, radius, shadow and duration you may use is there.
2. Read `design-system/components/index.js`, then the folders of the components you plan to use.
3. Read `references/principles.md` (the look and the rules) and `references/components.md` (what exists and when to use it).
4. If the product needs a pattern the system has no component for (dense threads, long lists, data-heavy pages), read `references/extending.md` before designing.

## Workflow

1. State the product's job and each screen's main user task in one line.
2. Choose the layout's core idea in one sentence. When asked for several layouts, each must start from a different idea about what matters most (a different information hierarchy), not just different styling.
3. Map every region of the screen to an existing component before inventing anything.
4. Build it as a runnable React view that imports from `design-system/components` and uses tokens only. Follow the conventions in `products/README.md`.
5. Run the checklist below and fix what fails.
6. Report back: the core idea, the components used, and anything you extended and why.

## Hard rules

- Use tokens only. No hardcoded colors, font sizes, spacing, radii, shadows or durations. If a value is missing, follow `references/extending.md`. Don't inline it.
- No brand or primary color. Emphasis comes from contrast: filled ink, outline, then text only. Never add a colored action button.
- The pastel tints (lavender, mint, sky) are for surfaces, hover/selected states and categories. Never for actions or text.
- Font is Instrument Sans only.
- Use existing components as they are. If one needs a variation, extend the component. Don't override it with one-off CSS.
- Don't nest cards, and don't wrap everything in a card.
- `--shadow-1` (soft outline) is for cards. `--shadow-2` is only for floating layers (modals, sheets, popovers).
- Motion uses the duration and easing tokens and respects `prefers-reduced-motion`.
- Every interactive element has hover, focus-visible and disabled states, and inputs have labels.

## Checklist before finishing

- [ ] No hex values or font sizes outside `tokens.css`
- [ ] At most one filled (primary) button per region of the screen
- [ ] The layout works at narrow and wide widths
- [ ] Cover the logo and it still looks like this system: mostly white, hairlines, soft tints, tight bold headings
- [ ] The core idea is stated in one sentence and visible in the layout