# Daymark habit tracker

**Product job:** Help people build a steady daily routine through small, repeatable habits.

**Screen task:** Review today’s habits, mark them complete, check the streak and week, or add a habit.

**Core layout idea:** A focused daily checklist gets the main column; streak and weekly context sit in a quiet side column.

## Component map

- Header navigation: `Nav`, `Avatar`.
- Page introduction and add action: layout wrapper, `Button`.
- Today summary: `Tag`.
- Repeated habit rows: `Card`, `List`, `ListItem`; custom checkbox and category mark because no checkbox or icon component exists.
- Streak summary: tinted `Card`.
- Weekly view: `Card`, composed day grid because the system has no calendar or progress calendar component.
- Add habit flow: `Modal`, `Input`, `Button`.

The add flow saves to local component state. The week is a static example for October 19–25, 2026.
