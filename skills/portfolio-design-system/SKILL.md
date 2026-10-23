---
name: portfolio-design-system
description: Build any new interface (app screens, pages, layouts, components) in Gunasethu's portfolio design system: light, calm, mostly white, near-black text, thin borders, small corners, Instrument Sans, no brand color. Use whenever asked to design, lay out or mock up a UI, screen or product in this style, including products the system has never covered.
---

# Portfolio design system

Design interfaces that look like this system: calm, mostly white, thin borders, small corners, one thing leading at a time. The code in this repo is the source of truth.

## Read first

1. `design-system/tokens.css`: every value you may use
2. `design-system/components/`: what already exists
3. `references/principles.md`: the design rules and why they exist
4. `references/components.md`: when to use each component
5. `references/extending.md`: only if the product needs something the system doesn't have

## How to work

1. Say in one sentence what the screen's main goal is and which single action is primary.
2. Say in one sentence what leads the layout. When asked for several layouts, each one starts from a different idea about what leads, not just different styling.
3. Build with existing components first. Use tokens for every color, size, space, radius, shadow and duration.
4. Check your work against the rules below.
5. Report back: the idea, the primary action, and anything you added to the system.

## Rules

- No brand color. Tints (lavender, mint, sky) only tell elements apart, like avatars and category tags. Never for backgrounds, actions, hover or selected states.
- A thin border goes around containers. Whitespace separates things inside them. No divider lines.
- In each container one thing leads. The rest is gray and regular weight. Medium weight only when needed. Few font sizes per container.
- One primary action per screen: the one that best serves the screen's main goal.
- States use gray: hover is a lighter gray, selected is the darkest gray with medium weight.
- Corners are 0, 4 or 8px, used consistently. Motion is subtle.
- Don't restyle components with product CSS. If a component needs a variation, add a prop to the component.
- When something is missing, add the smallest thing that works, and follow `references/extending.md`.