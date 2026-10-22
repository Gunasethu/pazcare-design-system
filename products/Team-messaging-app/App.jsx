import { useState } from 'react';
import { Avatar, Button, Input, Nav, Tag, Textarea } from '../../design-system/components';
import './team-messaging.css';

const channelNames = ['design-team', 'product-updates', 'engineering', 'random'];
const initialMessages = [
  { id: 1, name: 'Maya Rao', tint: 'lavender', time: '9:18 AM', texts: ['Morning everyone — I’ve shared the updated onboarding flow for a final look.', 'The first-run checklist now fits on one screen.'] },
  { id: 2, name: 'Arjun Nair', tint: 'mint', time: '9:24 AM', texts: ['Nice, the shorter checklist feels much easier to scan. I left two notes on the empty state.'] },
  { id: 3, name: 'Sam Patel', tint: 'sky', time: '9:31 AM', texts: ['Thanks! I’ll take those this morning. We can review the final pass together after lunch.'] },
  { id: 4, name: 'Maya Rao', tint: 'lavender', time: '9:35 AM', texts: ['That works for me. I’ll add the prototype link here before the review.'] },
];

export default function TeamMessagingApp() {
  const [channel, setChannel] = useState('design-team');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [query, setQuery] = useState('');
  const channels = channelNames.filter((item) => item.includes(query.toLowerCase())).map((item) => ({
    label: item,
    href: `#${item}`,
    active: item === channel,
    onClick: (event) => { event.preventDefault(); setChannel(item); },
  }));
  const directMessages = [
    { label: 'Maya Rao', href: '#maya', trailing: <Tag tint="mint">Online</Tag> },
    { label: 'Arjun Nair', href: '#arjun' },
    { label: 'Nina Shah', href: '#nina', trailing: <Tag tint="sky">2</Tag> },
  ];

  function sendMessage(event) {
    event.preventDefault();
    if (!message.trim()) return;
    setMessages((items) => [...items, { id: Date.now(), name: 'Sam Patel', tint: 'sky', time: 'Now', texts: [message.trim()] }]);
    setMessage('');
  }

  return (
    <main className="team-app">
      <header className="team-topbar">
        <a href="#workspace" className="workspace-name"><span className="workspace-mark" aria-hidden="true">L</span><span>northstar</span></a>
        <div className="team-search"><Input label="Search workspace" placeholder="Search messages and people" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
        <div className="topbar-actions"><Button variant="ghost" size="sm" aria-label="Help">Help</Button><Avatar name="Sam Patel" size="md" tint="sky" /></div>
      </header>
      <div className="team-shell" id="workspace">
        <aside className="team-sidebar" aria-label="Workspace sidebar">
          <div className="workspace-switch"><div><p className="workspace-kicker">Workspace</p><h1>Northstar Studio</h1></div><Button variant="ghost" size="sm" aria-label="Workspace options">Options</Button></div>
          <Nav label="Workspace sections" orientation="vertical" items={[
            { label: 'Threads', href: '#threads', trailing: <Tag>4</Tag> },
            { label: 'Later', href: '#later' },
            { label: 'Files', href: '#files' },
          ]} />
          <div className="sidebar-group">
            <div className="sidebar-heading"><h2>Channels</h2><Button variant="ghost" size="sm" aria-label="Add channel">Add</Button></div>
            <div className="channel-nav-desktop"><Nav label="Channels" orientation="vertical" items={channels} /></div>
            <div className="channel-nav-mobile"><Nav label="Channels" items={channels} /></div>
          </div>
          <div className="sidebar-group">
            <div className="sidebar-heading"><h2>Direct messages</h2><Button variant="ghost" size="sm" aria-label="New direct message">New</Button></div>
            <Nav label="Direct messages" orientation="vertical" items={directMessages} />
          </div>
          <div className="sidebar-profile"><Avatar name="Sam Patel" size="sm" tint="sky" /><span>Sam Patel</span><Tag tint="mint">Active</Tag></div>
        </aside>
        <section className="conversation" aria-label={`Conversation in ${channel}`}>
          <header className="conversation-header">
            <div className="conversation-title"><span className="channel-hash" aria-hidden="true">#</span><h2>{channel}</h2><Tag tint="mint">12 members</Tag></div>
            <div className="conversation-meta"><div className="member-stack" aria-label="Active members"><Avatar name="Maya Rao" size="sm" /><Avatar name="Arjun Nair" size="sm" tint="mint" /><Avatar name="Nina Shah" size="sm" tint="sky" /></div><span>8 active</span><span className="header-divider" aria-hidden="true" /><Button variant="ghost" size="sm">Details</Button></div>
          </header>
          <div className="thread-scroll">
            <div className="thread-intro"><span className="thread-channel-icon" aria-hidden="true">#</span><h3>{channel}</h3><p>This is the beginning of the <strong>{channel}</strong> channel.</p><span>Share updates, questions, and ideas with your team.</span></div>
            <div className="date-divider"><span>Today</span></div>
            <div className="message-list" aria-label="Messages">
              {messages.map((item) => <article className="message-group" key={item.id}>
                <Avatar name={item.name} size="md" tint={item.tint} />
                <div className="message-content"><div className="message-byline"><strong>{item.name}</strong><time>{item.time}</time></div>{item.texts.map((text, index) => <p key={index}>{text}</p>)}</div>
              </article>)}
            </div>
          </div>
          <form className="composer" onSubmit={sendMessage}>
            <div className="composer-field"><Textarea variant="plain" label={`Message in ${channel}`} placeholder={`Message #${channel}`} value={message} onChange={(event) => setMessage(event.target.value)} rows="2" /></div>
            <div className="composer-toolbar"><div className="composer-tools"><Button type="button" variant="ghost" size="sm" aria-label="Add attachment">Attach</Button><Button type="button" variant="ghost" size="sm" aria-label="Format message">Format</Button><Button type="button" variant="ghost" size="sm" aria-label="Add reaction">React</Button></div><div className="composer-send"><span>Enter to send</span><Button type="submit" size="sm" disabled={!message.trim()}>Send</Button></div></div>
          </form>
        </section>
      </div>
    </main>
  );
}
