import { useMemo, useState } from 'react';
import { Avatar, Button, Card, Input, List, ListItem, Modal, Nav, Tag } from '../../design-system/components';
import './habit-tracker.css';

const starterHabits = [
  { id: 1, name: 'Drink a glass of water', note: 'A gentle start to the day', time: '8:00 AM', done: true, tint: 'sky', mark: '○' },
  { id: 2, name: 'Read for 20 minutes', note: 'Make room for a few pages', time: 'Anytime', done: false, tint: 'lavender', mark: 'Ⅱ' },
  { id: 3, name: 'Take a mindful walk', note: 'Step outside and reset', time: '12:30 PM', done: false, tint: 'mint', mark: '↗' },
  { id: 4, name: 'Write in your journal', note: 'A thought worth keeping', time: '9:00 PM', done: false, tint: 'lavender', mark: '⌁' },
];
const days = [
  { day: 'M', date: '19', done: true }, { day: 'T', date: '20', done: true },
  { day: 'W', date: '21', done: true }, { day: 'T', date: '22', today: true },
  { day: 'F', date: '23' }, { day: 'S', date: '24' }, { day: 'S', date: '25' },
];

export default function HabitTracker() {
  const [habits, setHabits] = useState(starterHabits);
  const [addOpen, setAddOpen] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const done = useMemo(() => habits.filter((habit) => habit.done).length, [habits]);
  const navItems = [
    { label: 'Today', href: '#today', active: true },
    { label: 'Insights', href: '#week' },
  ];

  function toggle(id) {
    setHabits((items) => items.map((habit) => habit.id === id ? { ...habit, done: !habit.done } : habit));
  }
  function saveHabit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    setHabits((items) => [...items, { id: Date.now(), name: name.trim(), note: 'A small promise to yourself', time: time.trim() || 'Anytime', done: false, tint: 'sky', mark: '✳' }]);
    setName('');
    setTime('');
    setAddOpen(false);
  }

  return (
    <main className="habit-app" id="today">
      <header className="habit-header">
        <a className="habit-wordmark" href="#today" aria-label="Daymark home"><span className="habit-mark" aria-hidden="true" />daymark</a>
        <Nav label="Main navigation" items={navItems} />
        <Avatar name="Sam" size="md" tint="mint" />
      </header>
      <div className="habit-content">
        <section className="habit-intro" aria-labelledby="page-title">
          <div>
            <p className="habit-eyebrow">THURSDAY, OCTOBER 22</p>
            <h1 id="page-title">A little progress, every day.</h1>
            <p className="habit-subtitle">Make today count, one small habit at a time.</p>
          </div>
          <Button onClick={() => setAddOpen(true)}><span aria-hidden="true">＋</span> Add a habit</Button>
        </section>
        <div className="habit-layout">
          <section aria-labelledby="today-heading">
            <div className="section-heading">
              <div><h2 id="today-heading">Today’s habits</h2><p>{done} of {habits.length} completed</p></div>
              <Tag tint="lavender">{habits.length - done} to go</Tag>
            </div>
            <div className="habit-list-wrap">
              <Card>
                <List>
                  {habits.map((habit) => (
                    <ListItem key={habit.id}
                      leading={<><button className={`habit-check${habit.done ? ' habit-check--checked' : ''}`} type="button" onClick={() => toggle(habit.id)} aria-label={`${habit.done ? 'Mark incomplete' : 'Mark complete'}: ${habit.name}`} aria-pressed={habit.done}>{habit.done ? '✓' : ''}</button><span className={`habit-icon habit-icon--${habit.tint}`} aria-hidden="true">{habit.mark}</span></>}
                      title={<span className={habit.done ? 'habit-row--done' : ''}>{habit.name}</span>}
                      description={habit.note}
                      trailing={<span className="habit-row__time">{habit.time}</span>}
                    />
                  ))}
                </List>
              </Card>
              <div className="habit-list-action"><Button variant="ghost" size="sm" onClick={() => setAddOpen(true)}>＋ Add another habit</Button></div>
            </div>
          </section>
          <aside className="habit-aside">
            <Card tint="lavender">
              <div className="streak-card__top"><span className="habit-eyebrow">CURRENT STREAK</span><span className="streak-flower" aria-hidden="true">✳</span></div>
              <div className="streak-value">12 <span>days</span></div>
              <p className="streak-copy">You’re building something good. Keep showing up.</p>
              <div className="streak-best"><span>Personal best</span><strong>18 days</strong></div>
            </Card>
            <Card>
              <section id="week" aria-labelledby="week-heading">
                <div className="section-heading week-heading"><div><h2 id="week-heading">This week</h2><p>October 19 – 25</p></div><Tag>3 of 7 days</Tag></div>
                <div className="week-grid" aria-label="Weekly habit completion">
                  {days.map((day) => <div className={`week-day${day.today ? ' week-day--today' : ''}`} key={`${day.day}-${day.date}`}>
                    <span className="week-day__name">{day.day}</span><span className="week-day__date">{day.date}</span>
                    <span className={`week-dot${day.done ? ' week-dot--done' : ''}${day.today ? ' week-dot--today' : ''}`} aria-label={day.done ? 'Completed' : day.today ? 'Today' : 'Upcoming'}>{day.done ? '✓' : day.today ? '·' : ''}</span>
                  </div>)}
                </div>
                <p className="week-foot"><span className="week-legend"><i aria-hidden="true" />Completed days</span><span>Keep your rhythm going</span></p>
              </section>
            </Card>
          </aside>
        </div>
        <footer className="habit-footer">A softer way to build routines <span>·</span> One day at a time</footer>
      </div>
      <Modal variant="sheet" open={addOpen} onClose={() => setAddOpen(false)} title="Add a habit"
        footer={<><Button variant="ghost" onClick={() => setAddOpen(false)}>Cancel</Button><Button type="submit" form="add-habit-form" disabled={!name.trim()}>Save habit</Button></>}>
        <form id="add-habit-form" className="add-habit-form" onSubmit={saveHabit}>
          <p className="add-habit-intro">Choose one small thing you’d like to make part of your day.</p>
          <Input label="Habit name" placeholder="e.g. Stretch for five minutes" value={name} onChange={(event) => setName(event.target.value)} required autoFocus />
          <Input label="When (optional)" placeholder="e.g. After breakfast" value={time} onChange={(event) => setTime(event.target.value)} />
        </form>
      </Modal>
    </main>
  );
}
