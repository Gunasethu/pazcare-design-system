import { Avatar, Button, Card, Count, Cover, Icon, Nav, Page, Stack, Tag } from '../../../design-system/components';
import './yearly-progress.css';

export const idea = 'Yearly reading activity leads, turning the profile into a personal reading log with shelves and reviews close at hand.';
export const order = 5;

const months = [
  ['Jan', 1], ['Feb', 1], ['Mar', 2], ['Apr', 1], ['May', 2], ['Jun', 1],
  ['Jul', 1], ['Aug', 3], ['Sep', 2], ['Oct', 4], ['Nov', 0], ['Dec', 0],
];

export default function YearlyProgressLayout() {
  return <Page className="reader-page progress-profile">
    <main className="reader-content">
      <header className="profile-heading"><Avatar name="Nina Shah" size="lg" tint="lavender" /><div><p className="profile-location">Reader profile</p><h1>Nina Shah</h1><p>Portland, Oregon · Member since 2019</p></div><Button variant="secondary" icon="pencil" size="sm">Edit profile</Button></header>
      <div className="profile-tabs"><Nav label="Profile sections" items={[{ label: 'Overview', href: '#overview', active: true }, { label: 'Books', href: '#books' }, { label: 'Reviews', href: '#reviews' }, { label: 'About', href: '#about' }]} /></div>
      <div className="progress-layout">
        <section className="progress-main">
          <Card className="year-card"><div className="year-card-head"><div><p className="section-kicker">Reading challenge · 2026</p><h2>18 of 24 books</h2></div><Button size="sm" icon="pencil">Edit goal</Button></div>
            <div className="year-summary"><strong>75%</strong><span>of your yearly goal</span><span className="summary-note">You’re two books ahead of your pace.</span></div>
            <div className="year-track"><span style={{ width: '75%' }} /></div>
            <div className="chart-heading"><h3>Books finished each month</h3><span>18 books this year</span></div>
            <div className="month-chart" role="img" aria-label="Books finished by month: January 1, February 1, March 2, April 1, May 2, June 1, July 1, August 3, September 2, October 4">
              {months.map(([month, value]) => <div className="month-column" key={month}><span className="month-value">{value || ''}</span><div className="bar-track"><span style={{ height: `${Math.max(value * 11, 0)}%` }} /></div><span className="month-label">{month}</span></div>)}
            </div>
            <div className="chart-legend"><span className="legend-dot" />Books finished</div>
          </Card>
          <Card className="year-recent"><div className="section-heading"><div><p className="section-kicker">Read this year</p><h2>Recent finishes</h2></div><a className="subtle-link" href="#books">All 46 books <Icon name="arrow-right" /></a></div>
            <div className="finished-books"><article><Cover size="md" src="/covers/intermezzo.jpg" alt="Intermezzo by Sally Rooney" /><div><strong>Intermezzo</strong><p>Sally Rooney</p><Tag>Fiction</Tag></div><span className="finish-date">Oct 18</span></article><article><Cover size="md" src="/covers/orbital.jpg" alt="Orbital by Samantha Harvey" /><div><strong>Orbital</strong><p>Samantha Harvey</p><Tag>Literary fiction</Tag></div><span className="finish-date">Oct 6</span></article><article><Cover size="md" src="/covers/the-art-of-noticing.jpg" alt="The Art of Noticing by Rob Walker" /><div><strong>The Art of Noticing</strong><p>Rob Walker</p><Tag>Nonfiction</Tag></div><span className="finish-date">Sep 29</span></article></div>
          </Card>
          <Card className="year-reviews"><div className="section-heading"><div><p className="section-kicker">Recent reviews</p><h2>Notes from the margins</h2></div><a className="subtle-link" href="#reviews">More reviews <Icon name="arrow-right" /></a></div><article className="short-review"><div><strong>Orbital</strong><span className="stars">★★★★★</span></div><p>Small and expansive at once. I kept rereading the last page.</p><span className="muted">October 6</span></article><article className="short-review"><div><strong>Intermezzo</strong><span className="stars">★★★★☆</span></div><p>A patient book about grief and the strange shape of moving forward.</p><span className="muted">October 18</span></article></Card>
        </section>
        <aside className="progress-side">
          <Card className="reading-stats"><p className="section-kicker">Your year so far</p><h2>Reading, in numbers</h2><div className="stats-grid"><div><strong>18</strong><span>books finished</span></div><div><strong>5,482</strong><span>pages read</span></div><div><strong>31</strong><span>days reading streak</span></div><div><strong>4.1</strong><span>average rating</span></div></div></Card>
          <Card className="currently-reading"><div className="section-heading"><div><p className="section-kicker">On the nightstand</p><h2>Currently reading</h2></div><Count>3</Count></div><Stack gap={3}><div className="mini-book"><Cover size="sm" src="/covers/the-creative-act.jpg" alt="The Creative Act by Rick Rubin" /><span><strong>The Creative Act</strong><small>Rick Rubin</small></span></div><div className="mini-book"><Cover size="sm" src="/covers/north-woods.jpg" alt="North Woods by Daniel Mason" /><span><strong>North Woods</strong><small>Daniel Mason</small></span></div><div className="mini-book"><Cover size="sm" src="/covers/ways-of-seeing.jpg" alt="Ways of Seeing by John Berger" /><span><strong>Ways of Seeing</strong><small>John Berger</small></span></div></Stack></Card>
          <Card className="friends-reading"><div className="section-heading"><h2>Friends reading</h2><a href="#friends" className="subtle-link">See all</a></div><div className="friend-row"><Avatar name="Ava Martin" size="sm" tint="mint" /><span><strong>Ava Martin</strong><small>Reading “The Bee Sting”</small></span></div><div className="friend-row"><Avatar name="Dev Singh" size="sm" tint="mint" /><span><strong>Dev Singh</strong><small>Finished “Piranesi”</small></span></div></Card>
        </aside>
      </div>
    </main>
  </Page>;
}
