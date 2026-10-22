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
3. **Write a component map before any code**: a short list of every region of the screen and the design-system component that fills it. Before writing custom markup, check these first: Nav (any navigation, tabs, sidebar), Avatar (any person or profile), Tag (any label, status or count), List (any repeated rows), Card, Modal (any overlay or sheet). A region with no matching component needs a one-line reason and follows `references/extending.md`.
4. Build it as a runnable React view that imports from `design-system/components`. Follow the conventions in `products/README.md`. Use components through their props only. Layout wrappers (grid or flex with spacing tokens) are fine.
5. If you changed anything inside `design-system/`, or invented any new style (a type treatment, size, icon or color use), append a line to `design-system/EXTENSIONS.md` before finishing.
6. Run the checklist below and fix what fails.
7. Report back: the core idea, the component map, and anything you extended and why.

## Hard rules

- Use tokens only. No hardcoded colors, font sizes, font weights, spacing, radii, shadows or durations. If a value is missing, follow `references/extending.md`. Don't inline it.
- No brand or primary color. Emphasis comes from contrast: filled ink, then outline, then text only. Never add a colored action button.
- The pastel tints (lavender, mint, sky) are for surfaces, hover/selected states and categories. Never for actions or text.
- Font is Instrument Sans only.
- Never pass `className` or `style` to a design-system component, and never restyle one with product CSS. If a component needs a variation, add a prop to the component (extending.md, rung 2) and log it.
- Don't hand-build what a component already does. A custom nav bar, avatar, tag or list row where a component exists is a failure.
- Don't nest cards, and don't wrap everything in a card.
- `--shadow-1` (soft outline) is for cards. `--shadow-2` is only for floating layers (modals, sheets, popovers).
- Motion uses the duration and easing tokens and respects `prefers-reduced-motion`.
- Every interactive element has hover, focus-visible and disabled states, and inputs have labels.
- Anything you invent (uppercase labels, glyph icons, new sizes) is an extension and must be logged. Follow `references/extending.md` for icons.

## Checklist before finishing

- [ ] The component map exists, and no region uses custom markup where a component fits
- [ ] Run `grep -rnE "#[0-9a-fA-F]{3,8}"` on your files: no results
- [ ] Run `grep -rnE "[0-9]+px"` on your CSS: only 1px/2px borders and outlines, and layout widths. Control, avatar and icon sizes must come from tokens or components
- [ ] No `className` or `style` passed to design-system components
- [ ] At most one filled (primary) button per region of the screen
- [ ] The layout works at narrow and wide widths
- [ ] Everything extended or invented is logged in `design-system/EXTENSIONS.md`
- [ ] Cover the logo and it still looks like this system: mostly white, hairlines, soft tints, tight bold headings