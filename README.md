# Portfolio design system, skill and layouts

A design system extracted from my portfolio, a reusable skill that lets an AI agent build interfaces in it, and six layouts made with that skill.

## Structure

- `design-system/`: tokens (`tokens.css`) and React components. Values marked "proposed" are gaps I filled that my portfolio didn't cover.
- `skills/portfolio-design-system/`: the skill. `SKILL.md` is the workflow and rules. `references/` holds my design principles, when to use each component, and how to extend the system.
- `products/`: six layouts, three per product, each exporting a one-line idea.
- `src/`: the preview app that shows everything.

## Run it

`npm install`, then `npm run dev`. The top navigation lists the design system and every layout in `products/`. New layouts appear automatically.

# Try the skill

1. Open this folder in Codex. It finds the skill at `.agents/skills/portfolio-design-system`, which links to `skills/portfolio-design-system`.
2. Give it a brief, for example: `Use $portfolio-design-system to design <product>.`
3. The layout appears in the preview.

## Layouts I'd take forward

- **Messaging:** [layout name]. [One or two sentences on why.]
- **Reading profile:** [layout name]. [One or two sentences on why.]

## How I worked

I used AI to draft code, and I made the design decisions: the tokens, the principles, and the rules that changed after I reviewed the output. I tested the skill on a brief it had never seen (a habit tracker), reviewed six layouts against my own principles, and turned each problem into a rule or a system change.

## Known issues

The skill doesn't yet produce consistently good layouts from a bare brief. In the latest run:
- Two layouts (shelf-first and journal-timeline) start from similar ideas.
- Ratings use text characters (★) instead of a component.
- An invented product name ("Northstar") appeared despite the copy rule.
- Screens are sparse, with large empty areas.

Likely causes: the skill's rules are advice, not checks, and in an earlier run the agent skipped reading the component files.

What I'd do next:
1. Add a Rating component.
2. Have the skill check each layout against a short checklist before finishing: components used, tokens only, copy rule, and distinct ideas across layouts.
3. Test on more unseen briefs, and add a rule for each failure.
