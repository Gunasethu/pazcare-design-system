---
name: portfolio-design-system
description: Build any new interface (app screens, pages, layouts, components) in Gunasethu's portfolio design system: near-black text, thin borders, small corners, Instrument Sans, no brand color. Use whenever asked to design, lay out or mock up a UI, screen or product in this style, including products the system has never covered.
---

# Portfolio design system


## Read first

Read every file below before writing any code. Do not start building until you have.

1. `design-system/tokens.css`: every value you may use
2. `design-system/components/`: open the `.jsx` and `.css` of every component you plan to use, not just the folder name
3. `references/principles.md`: the design rules and why they exist
4. `references/components.md`: when to use each component
5. `references/extending.md`: only if the product needs something the system doesn't have

## How to work

1. Say in one sentence what the screen's main goal is and which single action is primary.
2. Say in one sentence what leads the layout. When asked for several layouts, each one starts from a different idea about what leads, not just different styling.
3. Before coding, list every region of the screen and the component that fills it. A region with no matching component follows `references/extending.md`. Don't improvise.
4. Build with existing components. Use tokens for every color, size, space, radius, shadow and duration. Put finished screens where `products/README.md` says.
5. Check your work against the rules below and the principles.
6. Report back: the idea, the primary action, the component list, anything you added to the system, which "Read first" files you actually read, which principles (by number) shaped the layout, and anything you built without a component.

## Rules

- Build everything from design-system components. 
- No brand color. Accent tints only tell things apart (avatars, category tags, chart data), at most one accent per container. Charts use accents, never grays. Never use accents for backgrounds, actions, hover or selected states.
- A thin border goes around containers. Whitespace separates things inside them. No divider lines. Related containers merge into one.
- In each container one thing leads. The rest is gray and regular weight. Medium weight only when needed. Few font sizes per container.
- One primary action per screen. The primary button has a relevant icon to the left of its label. Other CTAs are secondary. Text-only CTAs need an icon. If the primary CTA is used in modal, sheet, remove the icon. 
- States use gray fills: hover is a light gray fill, selected is a darker gray fill with medium weight.
- Copy earns its place: navigation, action, or page context only. No filler, taglines, uppercase eyebrows or invented names. A page header has at most two levels and is never centered.
- Text never sits inside a fixed-size box. Test long text and narrow widths.
- Don't restyle components with product CSS. If a component needs a variation, add a prop to the component.
- When something is missing, add the smallest thing that works, and follow `references/extending.md`. If it would break a rule in `principles.md`, don't add it: stop and say so.
- A layout is the body of one screen inside Page. Never add product chrome: brand logo or product name, a global top bar, global navigation or an account bar.
- A layout's core idea must work, not just look right. If a layout is keyboard-driven, the keys work. Selection changes what's shown, and tabs switch. In your report, say which interactions are real and which are static.