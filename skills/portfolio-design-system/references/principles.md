# Principles

## The feeling

Calm, airy, editorial. Mostly white, ink-black text. Structure comes from whitespace and hairlines, not heavy boxes or color. Headings are tight and confident, body text is generous. Color is rare and soft.

## Principles

1. **Contrast is emphasis.** Filled ink is the loudest, outline is medium, text-only is quiet. There is no brand color.
2. **Color is quiet.** The three pastel tints mark surfaces, hover/selected states and categories. They are never alerts, brand marks or actions.
3. **Edges are soft and thin.** Use a 1px `--color-border` or the soft outline `--shadow-1`, not both on the same element. Radii are small: 4px for small things (tags, nav items), 8px for containers, full only for avatars.
4. **Space does the grouping.** Use the spacing scale (4, 8, 16, 24, 32, with 48 and 64 for page-level gaps). Things that belong together sit closer together.
5. **Type is simple.** Instrument Sans. Bold, tightly tracked headings. 18px regular body. 14px and 12px for UI text and captions. Muted color for secondary information.
6. **Motion is short and useful.** 120 to 320ms. Things entering use ease-out. Nothing bounces or loops.

## How states are expressed

- Hover and selected: lavender tint
- Focus: 2px ink outline, offset 2px
- Error: `--color-danger`, the only red in the system
- Disabled: reduced opacity

## Draft decisions to revisit

- Lavender is used for both hover and selected. Decide whether selected needs to look different.
- The danger red and the overlay color were added. They aren't in the original portfolio.
- Small text sizes (14px, 12px) were added for UI density.