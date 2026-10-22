# Loop team messaging workspace

**Product job:** Help a team coordinate work through channels and direct conversation.

**Screen task:** Choose a channel, catch up on the discussion, and compose a message.

**Core layout idea:** Keep channel navigation in a narrow rail and give the active conversation the full center of attention, with its context and composer in one continuous thread.

## Component map

- Workspace header and navigation: `Nav`, `Avatar`, `Input` for labeled search.
- Channel and direct message groups: separate vertical `Nav` instances; `Tag` for unread counts.
- Active channel heading: layout wrapper, `Avatar`, `Tag`, `Button`.
- Conversation thread: grouped semantic message blocks with `Avatar`; the design system has no conversation thread component, and its dense-thread guidance calls for grouped messages without cards.
- Message composer: new shared `Textarea` plus `Button`; a multiline field was missing from the component set.

The demo channel links switch the active channel context, and sending a message appends it to the current thread in local state.
