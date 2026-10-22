## Reach for these first

- Any top bar, tabs or sidebar: Nav, not custom links
- Any person, profile or account: Avatar, not a styled circle
- Any label, count or status: Tag
- Any repeated rows: List and ListItem
- Any overlay: Modal (`variant="sheet"` on narrow screens)

# Components

Source of truth is the code in `design-system/components/`. If this file and the code disagree, the code wins. Import everything from `design-system/components`.

## Button
- Props: `variant` (`primary` | `secondary` | `ghost`), `size` (`md` | `sm`), plus normal button props.
- Primary is filled ink (the loudest). Secondary is outlined. Ghost is text only.
- Use at most one primary per region. Use ghost for low-priority actions like Cancel or Close.

## Input
- Props: `label`, `hint`, `error`, plus normal input props.
- Single line only. For multi-line text see `extending.md`.
- Always give inputs a label.

## Card
- Props: `tint` (`lavender` | `mint` | `sky`, or none), `as`.
- A plain card has the soft outline shadow. A tinted card has color and no shadow.
- A card is a distinct thing (a book, a stat, a project). Don't nest cards. Don't wrap everything in cards.

## Tag
- Props: `tint` (`neutral` | `lavender` | `mint` | `sky`).
- Small, regular weight, non-interactive. For categories, counts and status.

## Nav
- Props: `items` (`{ label, href, active, onClick, trailing }`), `orientation` (`horizontal` | `vertical`), `label`.
- The active item gets the lavender tint and semibold text. `trailing` holds things like unread counts.

## List and ListItem
- `List` props: `divided`.
- `ListItem` props: `leading`, `title`, `description`, `trailing`, `selected`, `onClick`. With `onClick` the row becomes a button.
- Rows are separated by hairlines, not boxes. Use List for repeated rows of the same shape.

## Modal
- Props: `open`, `onClose`, `title`, `footer`, `variant` (`modal` | `sheet`).
- `modal` is centered. `sheet` rises from the bottom, and is the right choice on narrow screens.
- Built on the native `<dialog>`, so Esc and focus trapping work.

## Avatar
- Props: `src`, `name`, `size` (`sm` 24px | `md` 32px | `lg` 48px), `tint`.
- Falls back to initials on a tinted circle. Pick the tint deliberately. Don't hash names to colors.