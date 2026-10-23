# Products

Each layout lives at `products/<product>/<layout-name>/index.jsx`, in kebab-case.

- `index.jsx` default-exports the layout's React component.
- `index.jsx` also exports a one-line idea: `export const idea = '...';`
- Layouts appear as tabs in the preview app automatically. An optional `order` export, `export const order = N;`, sets the tab order; layouts without it follow the ordered layouts alphabetically by folder name.
- Import only from `design-system/components`. Keep layout-specific styles in the same folder, using tokens.
- Every layout must open in the preview app (`npm run dev`) without editing any code.
