# Principles

These come from how the portfolio was designed and from reviewing real layouts. Each one says what to do and why.

1. **Don't overwhelm.** Don't highlight everything. If everything stands out, nothing does. When a section feels too text-heavy, pair the text with a visual element.

2. **Color is information, not decoration.** The accent tints (lavender, mint, sky) tell things apart: avatars, category tags, chart data. A container uses at most one accent, and it carries one kind of information. Analytics always use accent colors, never grays. For emphasis, hover and selected states, use gray fills, not accents.

3. **Borders hold containers. Whitespace separates things.** A thin border goes around a container. Never use a border as a divider between elements. Padding inside a container is generous (at least `--space-4`), while related text sits tight (title and subtitle `--space-1` apart). If two containers are about the same thing, put them in one container.

4. **One thing leads.** In any card or container, one main piece of text stands out. Everything else is secondary: gray and regular weight. Use medium weight only when a piece of text needs a little more emphasis. Avoid many font sizes inside one container.

5. **One primary action per screen.** It is the action that best helps the user reach the screen's main goal. The primary button always carries a relevant icon to the left of its label. Every other CTA is secondary. A text-only (tertiary) CTA is allowed only with an icon.

6. **Copy earns its place.** Every line helps people navigate, prompts an action, or explains the page. No filler lines ("Stay in the flow"), no taglines, no uppercase eyebrow labels, no invented company or workspace names as decoration. A page header has at most two levels: a title and one supporting line. Never center a header.

7. **Everything lines up.** Each column has one left edge: the page title, tabs and content start at the same x. Containers on a page use the same widths (full width, or halves of it). Content inside a card is top-left aligned, never vertically centered.

9. **Shapes are consistent.** Controls (Button, Input, Textarea) share one corner radius. Containers (Card, Modal) share another. An inner element's radius is never larger than its container's.

10. **Nothing breaks.** Text never sits inside a fixed-size box. Boxes grow with their content, so test with long titles and narrow widths.

11. **No full-width buttons on desktop.** Full-width is a mobile pattern only. On desktop, buttons are content-width with minimum 120px.

12. **Use the space.** A container's width is used. Related data sits side by side in one row, and a container is never mostly empty. Stack only when there isn't room.

13. **A layout is a screen, not a whole app.** No brand logo or product name, no global top bar, no account bar. The preview supplies the frame around it. A screen has at most one row of its own navigation, and only if its job needs it.

14. Items of the same kind look the same. In a list, feed or grid every item uses one style, and an item only differs to show a state (selected, unread, pinned).