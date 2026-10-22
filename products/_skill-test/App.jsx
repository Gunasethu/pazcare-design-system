import { useMemo, useState } from 'react';
import { Button, Card, Input, List, Modal, Tag } from '../../design-system/components';
import './habit-tracker.css';

const initialHabits = [
  { id: 1, name: 'Drink a glass of water', detail: 'A gentle start to the day', time: '8:00 AM', done: true, tint: 'sky', icon: '◌' },
  { id: 2, name: 'Read for 20 minutes', detail: 'Make room for a few pages', time: 'Anytime', done: false, tint: 'lavender', icon: '▤' },
  { id: 3, name: 'Take a mindful walk', detail: 'Step outside and reset', time: '12:30 PM', done: false, tint: 'mint', icon: '↗' },
  { id: 4, name: 'Write in your journal', detail: 'A thought worth keeping', time: '9:00 PM', done: false, tint: 'lavender', icon: '⌁' },
];
const week = [
  { day: 'M', date: '19', done: true }, { day: 'T', date: '20', done: true },
  { day: 'W', date: '21', done: true }, { day: 'T', date: '22', today: true, done: false },
  { day: 'F', date: '23' }, { day: 'S', date: '24' }, { day: 'S', date: '25' },
];

export default function HabitTracker() {
  const [habits, setHabits] = useState(initialHabits);
  const [addOpen, setAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTime, setNewTime] = useState('');
  const completed = useMemo(() => habits.filter((habit) => habit.done).length, [habits]);

  function toggleHabit(id) {
    setHabits((current) => current.map((habit) => habit.id === id ? { ...habit, done: !habit.done } : habit));
  }

  function addHabit(event) {
    event.preventDefault();
    if (!newName.trim()) return;
    setHabits((current) => [...current, {
      id: Date.now(), name: newName.trim(), detail: 'A small promise to yourself',
      time: newTime || 'Anytime', done: false, tint: 'sky', icon: '✳',
    }]);
    setNewName('');
    setNewTime('');
    setAddOpen(false);
  }

  return (
    <main className="habit-app">
      <header className="habit-header">
        <a className="habit-wordmark" href="#today" aria-label="Daymark home"><span className="habit-mark" />daymark</a>
        <nav className="habit-nav" aria-label="Main navigation">
          <a className="habit-nav__active" href="#today">Today</a>
          <a href="#week">Insights</a>
        </nav>
        <button className="habit-profile" type="button" aria-label="Your profile">S</button>
      </header>

      <div className="habit-content" id="today">
        <section className="habit-intro">
          <div>
            <p className="habit-eyebrow">THURSDAY, OCTOBER 22</p>
            <h1>A little progress, every day.</h1>
            <p className="habit-subtitle">Make today count, one small habit at a time.</p>
          </div>
          <Button onClick={() => setAddOpen(true)}><span aria-hidden="true">＋</span> Add a habit</Button>
        </section>

        <div className="habit-layout">
          <section className="today-section" aria-labelledby="today-heading">
            <div className="section-heading">
              <div><h2 id="today-heading">Today’s habits</h2><p>{completed} of {habits.length} completed</p></div>
              <Tag tint="lavender">{habits.length - completed} to go</Tag>
            </div>
            <Card className="habit-list-card">
              <List>
                {habits.map((habit) => (
                  <li className={`habit-row${habit.done ? ' habit-row--done' : ''}`} key={habit.id}>
                    <button
                      className={`habit-check${habit.done ? ' habit-check--checked' : ''}`}
                      type="button"
                      onClick={() => toggleHabit(habit.id)}
                      aria-label={`${habit.done ? 'Mark incomplete' : 'Mark complete'}: ${habit.name}`}
                      aria-pressed={habit.done}
                    >{habit.done && <span aria-hidden="true">✓</span>}</button>
                    <span className={`habit-icon habit-icon--${habit.tint}`} aria-hidden="true">{habit.icon}</span>
                    <span className="habit-row__copy"><span className="habit-row__name">{habit.name}</span><span className="habit-row__detail">{habit.detail}</span></span>
                    <span className="habit-row__time">{habit.time}</span>
                  </li>
                ))}
              </List>
              <button className="habit-add-inline" type="button" onClick={() => setAddOpen(true)}>＋ <span>Add another habit</span></button>
            </Card>
          </section>

          <aside className="habit-aside">
            <Card tint="lavender" className="streak-card">
              <div className="streak-card__top"><span className="habit-eyebrow">CURRENT STREAK</span><span className="streak-flower" aria-hidden="true">✳</span></div>
              <div className="streak-value">12 <span>days</span></div>
              <p>You’re building something good. Keep showing up.</p>
              <div className="streak-best"><span>Personal best</span><strong>18 days</strong></div>
            </Card>

            <Card className="week-card" as="section" id="week">
              <div className="section-heading week-heading"><div><h2>This week</h2><p>October 19 – 25</p></div><button className="week-more" type="button" aria-label="More weekly insights">···</button></div>
              <div className="week-grid" aria-label="Weekly habit completion">
                {week.map((day) => <div className={`week-day${day.today ? ' week-day--today' : ''}`} key={`${day.day}-${day.date}`}>
                  <span className="week-day__name">{day.day}</span>
                  <span className={`week-day__date${day.today ? ' week-day__date--today' : ''}`}>{day.date}</span>
                  <span className={`week-dot${day.done ? ' week-dot--done' : ''}${day.today ? ' week-dot--today' : ''}`} aria-label={day.done ? 'Completed' : day.today ? 'Today' : 'Upcoming'}>{day.done ? '✓' : day.today ? '·' : ''}</span>
                </div>)}
              </div>
              <div className="week-foot"><span className="week-legend"><i className="week-legend__dot" />Completed</span><span>3 of 7 days</span></div>
            </Card>
            <p className="aside-note">“Small steps every day add up to remarkable things.”</p>
          </aside>
        </div>
        <footer className="habit-footer">A softer way to build routines <span>·</span> One day at a time</footer>
      </div>

      <Modal
        variant="sheet"
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add a habit"
        footer={<><Button variant="ghost" onClick={() => setAddOpen(false)}>Cancel</Button><Button type="submit" form="add-habit-form" disabled={!newName.trim()}>Save habit</Button></>}
      >
        <form id="add-habit-form" className="add-habit-form" onSubmit={addHabit}>
          <p className="add-habit-intro">Choose one small thing you’d like to make part of your day.</p>
          <Input label="Habit name" placeholder="e.g. Stretch for five minutes" value={newName} onChange={(event) => setNewName(event.target.value)} required autoFocus />
          <Input label="When (optional)" placeholder="e.g. After breakfast" value={newTime} onChange={(event) => setNewTime(event.target.value)} />
          <fieldset className="habit-frequency"><legend>Repeat</legend><div className="frequency-options">{['Every day', 'Weekdays', 'Choose days'].map((option, index) => <label key={option}><input type="radio" name="frequency" defaultChecked={index === 0} /><span>{option}</span></label>)}</div></fieldset>
        </form>
      </Modal>
    </main>
  );
}
