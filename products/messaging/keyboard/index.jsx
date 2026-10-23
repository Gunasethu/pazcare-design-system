import { useEffect, useRef, useState } from 'react';
import { Avatar, Button, Card, Icon, Input, List, ListItem, Page, Tag, Textarea } from '../../../design-system/components';
import './keyboard.css';

export const idea = 'A keyboard-first workspace puts the active conversation at the center, with a searchable list beside it.';
export const order = 3;

const conversations = [
  { title: '# product', detail: '18 members · Product decisions and weekly updates', messages: [['Jules Kim', '9:48 AM', 'The onboarding prototype is ready for a quick review. I’ve added the support notes below the flow.'], ['Maya Chen', '10:02 AM', 'Nice. I’ll go through the edge cases before our check-in.'], ['Omar Patel', '10:16 AM', 'One question for the review: should the checklist show the owner or the next step first?']] },
  { title: 'Omar Patel', detail: 'Direct message · Product', messages: [['Omar Patel', '10:16 AM', 'Could you take a look at the checklist before our review?'], ['You', '10:22 AM', 'Yes, I’ll leave comments this afternoon.'], ['Omar Patel', '10:25 AM', 'Thanks. The owner and next step are the two things I’m still weighing.']] },
  { title: '# design', detail: '12 members · Design critiques and handoffs', messages: [['Maya Chen', '9:32 AM', 'The new empty states are ready for feedback.'], ['Jules Kim', '9:41 AM', 'The copy feels much clearer now.'], ['You', '10:08 AM', 'I’ll review the mobile states next.']] },
  { title: 'Maya Chen', detail: 'Direct message · Design', messages: [['Maya Chen', '9:58 AM', 'Do you have a moment to review the navigation options?'], ['You', '10:04 AM', 'Yes, send them over and I’ll take a look.']] },
  { title: '# launch-planning', detail: '9 members · Upcoming launch', messages: [['Jules Kim', '9:20 AM', 'Launch checklist is updated with the support handoff.'], ['Omar Patel', '9:45 AM', 'I’ll confirm the dates with the team today.']] },
];

export default function KeyboardLayout() {
  const [selected, setSelected] = useState(0);
  const [opened, setOpened] = useState(0);
  const [draft, setDraft] = useState('');
  const [sentMessages, setSentMessages] = useState([]);
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const current = conversations[opened];

  useEffect(() => {
    searchRef.current = document.getElementById('keyboard-search');
    listRef.current = document.querySelector('.keyboard-layout .conversation-list');
    const onKeyDown = (event) => {
      const command = event.metaKey || event.ctrlKey;
      if (command && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
        return;
      }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        searchRef.current.value = '';
        searchRef.current.blur();
        return;
      }
      const inSearch = document.activeElement === searchRef.current;
      if (inSearch && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        listRef.current?.querySelectorAll('button')[selected]?.focus();
        return;
      }
      if (inSearch && event.key === 'Enter') {
        event.preventDefault();
        listRef.current?.querySelectorAll('button')[selected]?.focus();
        setOpened(selected);
      }
      if (event.target.closest?.('.quick-switcher') && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        setSelected((value) => (value + (event.key === 'ArrowDown' ? 1 : -1) + conversations.length) % conversations.length);
      }
      if (event.target.closest?.('.quick-switcher') && event.key === 'Enter') {
        event.preventDefault();
        setOpened(selected);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setSentMessages((items) => [...items, { conversation: opened, text }]);
    setDraft('');
  };

  return <Page className="msg-page keyboard-layout">
    <main className="keyboard-main">
      <div className="command-head"><h1>Conversations</h1><span className="shortcut-pill">⌘K / Ctrl+K</span></div>
      <div className="command-field"><Icon name="search" /><div className="command-input"><Input id="keyboard-search" aria-label="Jump to a conversation or search" placeholder="Jump to a conversation or search messages…" /></div><kbd>Esc</kbd></div>
      <div className="keyboard-workspace">
        <section className="quick-switcher"><div className="quick-heading"><h2>Conversations</h2><span className="muted">↑ ↓ select · ↵ open</span></div>
          <List bordered aria-label="Conversations" className="conversation-list">
            {conversations.map((conversation, index) => <ListItem key={conversation.title} title={conversation.title} description={conversation.messages.at(-1)[2]} selected={selected === index} onClick={() => { setSelected(index); setOpened(index); }} trailing={opened === index ? <kbd>↵</kbd> : null} />)}
          </List>
        </section>
        <Card className="keyboard-channel">
          <header className="keyboard-channel-head"><div><h2>{current.title}</h2><span>{current.detail}</span></div><Button variant="secondary" size="sm" icon="more" iconOnly aria-label="Conversation options" /></header>
          <div className="keyboard-messages"><div className="day-label">Today</div>
            {current.messages.map(([name, time, message], index) => <article className="message" key={`${name}-${index}`}><Avatar name={name} tint="lavender" /><div className="message-content"><div className="message-meta"><strong>{name}</strong><span>{time}</span></div><p>{message}</p></div></article>)}
            {sentMessages.filter((item) => item.conversation === opened).map((item, index) => <article className="message" key={`sent-${index}`}><Avatar name="You" tint="lavender" /><div className="message-content"><div className="message-meta"><strong>You</strong><span>Now</span></div><p>{item.text}</p></div></article>)}
            {opened === 0 && <div className="reaction-row"><Tag>👀 2</Tag><Button variant="ghost" size="sm" icon="plus" iconOnly aria-label="Add reaction" /></div>}
          </div>
          <form className="composer" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}><Textarea label={`Message ${current.title}`} placeholder={`Message ${current.title}…`} rows="2" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') { event.preventDefault(); sendMessage(); } }} /><div className="composer-footer"><span className="muted"><kbd>⌘/Ctrl ↵</kbd> send · <kbd>⇧ ↵</kbd> new line</span><Button size="sm" icon="send" type="submit">Send</Button></div></form>
        </Card>
      </div>
    </main>
  </Page>;
}
