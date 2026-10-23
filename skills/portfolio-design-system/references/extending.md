# Extending the system

The system was designed from a portfolio, so some products need things it doesn't have. Extend it in the smallest way that works, and keep following `principles.md`.

## Smallest step first

1. Combine existing components with layout (flex or grid, spacing tokens).
2. Add a prop to an existing component.
3. Add a new component in `design-system/components/<Name>/` (same three files as the others, tokens only, registered in `components/index.js`).
4. Do not add new token.

## When the product is denser than a portfolio

This covers chat threads, long lists, tables and feeds.

- Tighten the space between items with the smaller spacing tokens. Don't add divider lines or boxes to compensate. Items that belong together sit closer.
- In each item one thing leads (the sender, the book title). The rest is gray and regular weight.
- Don't repeat what the reader already knows. For example, show a sender's name once for consecutive messages from them.
- Don't wrap every row in a card. Rows sit inside one container.
- Break long lists into sections with headings. On narrow screens, put filters in a Sheet.

## Rules for anything new

- Tokens only. No brand color, no tints for backgrounds or actions, same corner sizes, subtle motion.
- Avoid decoration. Add an icon only if it carries meaning.