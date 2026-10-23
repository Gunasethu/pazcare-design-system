# Components

The code in `design-system/components/` is the source of truth. This file only says when to use each one. Open a component's files before using it.

- **Button:** any action. One primary per screen, with an icon. Other actions are secondary. A text-only (ghost) button needs an icon. Not for moving between sections (use Nav).
- **Input and Textarea:** single-line and multi-line text. Always labeled.
- **Card:** one distinct thing (a book, a stat, a project). Never nested, and never wrapped around every row.
- **Tag:** a category or status label. Not interactive. At most one accent per container.
- **Count:** a number attached to a label (unread, item totals).
- **Avatar and AvatarGroup:** any person. Several people together use AvatarGroup.
- **Icon:** only icons from the set, and only when they carry meaning or an action.
- **Nav:** any navigation: top bar, tabs, sidebar. Not for actions.
- **List and ListItem:** repeated rows of the same shape. Use `bordered` when the list itself is the container.
- **Modal:** overlays. Use the sheet variant on narrow screens.
- **Page:** the wrapper for every layout. It gives one left edge and consistent widths.
