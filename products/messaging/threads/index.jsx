import { useState } from 'react';
import { Avatar, Button, Card, Count, Icon, Inline, Nav, Page, Stack, Tag, Textarea } from '../../../design-system/components';
import './threads.css';

export const idea = 'A focused thread is the main workspace, with its channel context and reply composer always beside it.';
export const order = 1;

const channels = [
  { label: 'design', trailing: <Count>4</Count> },
  { label: 'product', active: true },
  { label: 'engineering' },
  { label: 'launch-planning', trailing: <Count>2</Count> },
];

export default function ThreadsLayout() {
  const [draft, setDraft] = useState('');
  const [sent, setSent] = useState(false);
  return <Page className="msg-page thread-layout">
    <div className="msg-frame">
      <aside className="msg-sidebar">
        <section className="channel-section"><div className="sidebar-heading"><span>Channels</span><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="Add channel" /></div><Nav orientation="vertical" label="Channels" items={channels} /></section>
        <section className="channel-section"><div className="sidebar-heading"><span>Direct messages</span><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="New message" /></div><div className="person-row"><Avatar name="Omar Patel" size="sm" tint="lavender" /><span>Omar Patel</span></div><div className="person-row"><Avatar name="Jules Kim" size="sm" tint="lavender" /><span>Jules Kim</span></div></section>
      </aside>
      <main className="thread-main">
        <header className="channel-header"><div><p className="crumb">Channels / product</p><h1># product</h1><p>Product decisions and weekly updates</p></div><Button variant="secondary" size="sm" icon="more" iconOnly aria-label="Channel options" /></header>
        <div className="thread-grid">
          <Card className="thread-focus">
            <div className="thread-label"><span>Thread</span><span className="muted">6 replies · Updated 12 min ago</span></div>
            <article className="message message-parent"><Avatar name="Maya Chen" tint="lavender" /><div className="message-content"><div className="message-meta"><strong>Maya Chen</strong><span>10:42 AM</span></div><p>Could we make the handoff checklist part of the project room? People are asking for it in three different places.</p><Inline gap={1} className="reaction-row"><Tag>👍 4</Tag><Tag>💡 2</Tag><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="Add reaction" /></Inline></div></article>
            <div className="replies">
              <article className="message"><Avatar name="Omar Patel" tint="lavender" /><div className="message-content"><div className="message-meta"><strong>Omar Patel</strong><span>10:51 AM</span></div><p>Yes. A pinned checklist would keep the latest version close to the work.</p></div></article>
              <article className="message"><Avatar name="Jules Kim" tint="lavender" /><div className="message-content"><div className="message-meta"><strong>Jules Kim</strong><span>11:03 AM</span></div><p>I can add a compact checklist block to the project overview today.</p><Inline gap={1} className="reaction-row"><Tag>✅ 2</Tag><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="Add reaction" /></Inline></div></article>
              <article className="message"><Avatar name="Maya Chen" tint="lavender" /><div className="message-content"><div className="message-meta"><strong>Maya Chen</strong><span>11:16 AM</span></div><p>That works. Let’s try it with the Atlas launch first.</p></div></article>
            </div>
            {sent && <div className="sent-note">Your reply was added to the thread.</div>}
            <form className="composer" onSubmit={(event) => { event.preventDefault(); if (draft.trim()) { setSent(true); setDraft(''); } }}>
              <Textarea label="Reply to thread" placeholder="Reply in thread…" rows="2" value={draft} onChange={(event) => setDraft(event.target.value)} />
              <div className="composer-footer"><span className="muted">Reply will notify 4 people</span><Button size="sm" icon="send" type="submit">Reply</Button></div>
            </form>
          </Card>
          <aside className="thread-context"><Card><h2>In this channel</h2><p className="context-copy">A focused space for shaping product decisions and sharing progress.</p><Inline gap={2} className="member-stack"><Avatar name="Maya Chen" size="sm" tint="lavender" /><Avatar name="Omar Patel" size="sm" tint="lavender" /><Avatar name="Jules Kim" size="sm" tint="lavender" /><span className="muted">12 members</span></Inline></Card>
            <Card><div className="context-title"><h2>Recent threads</h2><a href="#recent">View all <Icon name="arrow-right" /></a></div><Stack gap={3} className="recent-threads"><div><strong>Research readout for Friday</strong><span>Jules · 3 replies</span></div><div><strong>Mobile navigation review</strong><span>Omar · 8 replies</span></div><div><strong>Atlas launch checklist</strong><span>Maya · 2 replies</span></div></Stack></Card>
          </aside>
        </div>
      </main>
    </div>
  </Page>;
}
