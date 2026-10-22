# Products

Each layout lives in its own folder: `products/<product>/<layout-name>/`.

- `index.jsx` default-exports the React component for the layout, and exports a one-line idea:
  `export const idea = 'Threads are the main thing: ...';`
- Keep the layout's styles in the same folder. Import only from `design-system/components` and use tokens.
- Layouts appear in the preview automatically at `npm run dev`. No registration step.
- Use `messaging` and `reading-profile` for the two assigned products, or a new kebab-case name for a new product.