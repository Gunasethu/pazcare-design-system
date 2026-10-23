import { useState } from 'react';
import { Avatar, Button, Card, Count, Icon, Inline, List, ListItem, Nav, Page, Tag, Textarea } from '../../../design-system/components';
import './inbox.css';

export const idea = 'A unified inbox gathers direct messages, mentions, and channel updates around the next conversation to answer.';
export const order = 2;

const items = [
  { name: 'Omar Patel', channel: 'Direct message', preview: 'The new handoff flow looks good. One thing…', time: '2m', count: '2', active: true },
  { name: 'Design team', channel: '# design', preview: 'Jules: added the updated prototype', time: '18m', count: '4' },
  { name: 'Maya Chen', channel: 'Direct message', preview: 'Can you review the launch notes today?', time: '34m' },
  { name: 'launch-planning', channel: '# launch-planning', preview: 'Sam: timeline is ready for a final pass', time: '1h', count: '1' },
  { name: 'Jules Kim', channel: 'Mention in # product', preview: 'You: I can take the first draft', time: '2h' },
];

export default function InboxLayout() {
  const [draft, setDraft] = useState('');
  const [sent, setSent] = useState(false);
  return <Page className="msg-page inbox-layout">
    <div className="inbox-shell">
      <section className="inbox-list-panel">
        <header className="inbox-list-header"><h1>Inbox</h1><Button variant="secondary" size="sm" icon="more" iconOnly aria-label="Inbox options" /></header>
        <div className="inbox-filters"><Nav label="Inbox filters" items={[{ label: 'All', active: true }, { label: 'Unread', trailing: <Count>7</Count> }, { label: 'Threads' }]} /></div>
        <List className="inbox-items" bordered>{items.map((item) => <ListItem key={item.name} selected={item.active} leading={<Avatar name={item.name} tint="sky" />} title={<Inline as="span" gap={2} className="inbox-item-top"><strong>{item.name}</strong><time>{item.time}</time></Inline>} description={<span className="inbox-item-description">{item.channel}<br />{item.preview}</span>} trailing={item.count ? <Count>{item.count}</Count> : null} />)}</List>
      </section>
      <main className="inbox-conversation">
        <header className="conversation-head"><div className="conversation-person"><Avatar name="Omar Patel" tint="sky" /><div><h2>Omar Patel</h2><span>Direct message · 1:1 conversation</span></div></div><Button variant="secondary" size="sm" icon="more" iconOnly aria-label="Conversation options" /></header>
        <div className="conversation-log"><div className="conversation-date">Today</div>
          <article className="message"><Avatar name="Omar Patel" tint="sky" /><div className="message-content"><div className="message-meta"><strong>Omar Patel</strong><span>10:18 AM</span></div><p>I walked through the updated handoff flow with support this morning. They’re happy with the shorter checklist.</p></div></article>
          <article className="message"><Avatar name="Maya Chen" tint="sky" /><div className="message-content"><div className="message-meta"><strong>Maya Chen</strong><span>10:24 AM</span></div><p>Great. Did they mention where they’d look for it first?</p></div></article>
          <article className="message"><Avatar name="Omar Patel" tint="sky" /><div className="message-content"><div className="message-meta"><strong>Omar Patel</strong><span>10:29 AM</span></div><p>The project overview. I added a screenshot to the thread in <a href="#product"># product</a>.</p><a className="inbox-attachment" href="#screenshot"><span className="attachment-thumb"><Icon name="book" size={20} /></span><span><strong>handoff-overview.png</strong><small>Image · 842 KB</small></span></a></div></article>
          <article className="message"><Avatar name="Omar Patel" tint="sky" /><div className="message-content"><div className="message-meta"><strong>Omar Patel</strong><span>10:31 AM</span></div><p>The new handoff flow looks good. One thing: should we include the escalation contact on the same screen?</p><div className="reaction-row"><Tag>👍 1</Tag><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="Add reaction" /></div></div></article>
          {sent && <div className="sent-note">Message sent.</div>}
        </div>
        <form className="composer inbox-composer" onSubmit={(event) => { event.preventDefault(); if (draft.trim()) { setSent(true); setDraft(''); } }}><Textarea label="Message Omar Patel" placeholder="Message Omar Patel…" rows="2" value={draft} onChange={(event) => setDraft(event.target.value)} /><div className="composer-footer"><span className="muted">↵ to send · Shift + ↵ for new line</span><Button size="sm" icon="send" type="submit">Send</Button></div></form>
      </main>
    </div>
  </Page>;
}
