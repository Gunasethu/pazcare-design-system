# Extending the system

The system was designed from a portfolio, not from every product. When a screen needs something it doesn't have, extend it in the smallest way that works, and keep it recognizably the same system.

## The ladder (stop at the first rung that works)

1. **Compose.** Build it from existing components with flex or grid and spacing tokens.
2. **Add a variant or prop** to an existing component.
3. **Add a new component.** Follow the pattern: `design-system/components/<Name>/` with `<Name>.jsx`, `<Name>.css`, `index.js`, then register it in `components/index.js` and add it to the preview in `src/App.jsx`. Use tokens only.
4. **Add a new token.** Last resort. Reuse the existing scale first. Put new tokens in the "proposed" part of `tokens.css` with a comment saying why.

## Never, even when extending

- Add a brand or primary color, gradient or second typeface
- Add a fourth radius or a heavier shadow than `--shadow-2`
- Use color (tints, red) to mean "action" or "important". Importance comes from contrast, size and position.
- Hardcode values that a token could provide
- Nest cards, or put a card around every row

## Record what you extend

Add one line to `design-system/EXTENSIONS.md`: what was added, why, and which rung of the ladder. This keeps the system honest about where it stretched.

## Cases the system wasn't designed for

### Dense conversation threads (chat, comments)
- Dense means 14px/22px text, 4 to 8px between messages from the same author, 16px between groups.
- Group consecutive messages by author: show the Avatar and name once, then stack message text beneath.
- No card or bubble per message. Structure comes from alignment and whitespace. Hover reveals actions as ghost `sm` buttons.
- Timestamps are 12px muted. Unread is shown with semibold text plus a sky Tag count.
- Replies are indented by `--space-4` with a 1px `--color-border` line on the left.
- A mention is highlighted with the lavender tint. Reactions are neutral Tags.

### Multi-line input (message composer)
- Build a Textarea as a sibling of Input with the same field styles. Group the composer in one outlined container, with a primary `sm` Button for send.

### Long lists (books, results, history)
- Use List with hairline dividers for rows. Never a card per row.
- Use a grid of covers only when the image is the point. A cover placeholder is a tinted block, chosen deliberately.
- Add section headings (H2) and sticky headers for long groups.
- Filters and sort go in a Sheet on narrow screens and a side column on wide ones.
- Load more with a secondary Button, or paginate. Don't auto-load forever.

### Progress, ratings and stats
- A progress bar is 4px tall, with a `--color-border` track and an ink fill, with `--radius-full` ends. No colored fills.
- Ratings are ink numbers or ink stars. Never gold stars.
- Big numbers use the H1 style with a 12px muted label. Group stats in mint or sky tinted cards. Charts are ink with tint fills, never rainbow.

### Controls the system doesn't have
- **Tabs or segmented control:** build from horizontal Nav.
- **Dropdown, select, popover:** reuse Modal's panel styles with `--shadow-2`.
- **Toast:** ink background, inverse text, `--shadow-2`, auto-dismiss with motion tokens.
- **Icons:** the system has none. Use simple 1.5px-stroke line icons in `currentColor` at 16 or 20px. No filled or multicolor icons, no emoji.

### Empty and loading states
- Empty: one line of muted text plus one ghost or secondary action.
- Loading: lavender-tint blocks in the shape of the content, using a gentle opacity pulse from the motion tokens. No shimmer.

### Responsive layouts
- Below about 640px use a single column, and side panels become a Sheet. Layout widths and breakpoints may be literal values. Everything else must be tokens.

### Dark mode
- Not part of this system. Don't invent it unless asked. If asked, define alternate token values in a theme block and leave the components untouched.