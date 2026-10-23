import { Avatar, Button, Card, Count, Cover, Icon, Inline, Nav, Page, Stack, Tag } from '../../../design-system/components';
import './current-read.css';

export const idea = 'The profile opens on the book being read now, with shelves and yearly progress supporting the next reading session.';
export const order = 4;

export default function CurrentReadLayout() {
  return <Page className="reader-page current-read">
    <main className="reader-content">
      <header className="profile-heading"><Avatar name="Nina Shah" size="lg" tint="lavender" /><div><p className="profile-location">Reader profile</p><h1>Nina Shah</h1><p>146 books · 14 reviews · Portland, Oregon</p></div><Button variant="secondary" icon="pencil" size="sm">Edit profile</Button></header>
      <div className="reader-columns">
        <section className="reader-main-col">
          <Card className="now-reading-card"><div className="section-heading"><div><p className="section-kicker">Currently reading</p><h2>The Creative Act</h2><p className="book-author">Rick Rubin</p></div><Tag tint="mint">Reading</Tag></div>
            <div className="now-book"><Cover size="lg" src="/covers/the-creative-act.jpg" alt="The Creative Act by Rick Rubin" /><div className="book-details"><p className="book-note">“The act of creation is an act of exploration.”</p><p className="book-caption">A few pages with morning coffee.</p><div className="progress-label"><span>Page 184 of 432</span><span>43%</span></div><div className="reading-progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"><span style={{ width: '43%' }} /></div><Inline gap={2} className="book-actions"><Button icon="check" size="sm">Update progress</Button><Button variant="ghost" icon="more" iconOnly aria-label="More book actions" /></Inline></div></div>
          </Card>
          <Card className="shelves-card"><div className="section-heading"><div><p className="section-kicker">Shelves</p><h2>Books by mood</h2></div><a className="subtle-link" href="#all-shelves">All shelves <Icon name="arrow-right" /></a></div>
            <div className="shelf-grid"><a href="#reading"><span className="shelf-covers"><Cover size="sm" src="/covers/the-creative-act.jpg" alt="The Creative Act by Rick Rubin" /><Cover size="sm" src="/covers/north-woods.jpg" alt="North Woods by Daniel Mason" /><Cover size="sm" src="/covers/ways-of-seeing.jpg" alt="Ways of Seeing by John Berger" /></span><strong>Currently reading</strong><span>3 books</span></a><a href="#want-to-read"><span className="shelf-covers"><Cover size="sm" src="/covers/beloved.jpg" alt="Beloved by Toni Morrison" /><Cover size="sm" src="/covers/piranesi.jpg" alt="Piranesi by Susanna Clarke" /><Cover size="sm" src="/covers/sea-of-tranquility.jpg" alt="Sea of Tranquility by Emily St. John Mandel" /></span><strong>Want to read</strong><span>28 books</span></a><a href="#favorites"><span className="shelf-covers"><Cover size="sm" src="/covers/beloved.jpg" alt="Beloved by Toni Morrison" /><Cover size="sm" src="/covers/piranesi.jpg" alt="Piranesi by Susanna Clarke" /><Cover size="sm" src="/covers/sea-of-tranquility.jpg" alt="Sea of Tranquility by Emily St. John Mandel" /></span><strong>Favorites</strong><span>12 books</span></a></div>
          </Card>
          <Card className="reviews-card"><div className="section-heading"><div><p className="section-kicker">Recent reviews</p><h2>Books worth passing on</h2></div><a className="subtle-link" href="#reviews">All reviews <Icon name="arrow-right" /></a></div>
            <div className="review-row"><Cover size="sm" src="/covers/tomorrow-and-tomorrow-and-tomorrow.jpg" alt="Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin" /><div><strong>Tomorrow, and Tomorrow, and Tomorrow</strong><p>Gabrielle Zevin</p><span className="stars">★★★★★</span><p className="review-quote">“A thoughtful story about making things together, and what it costs to keep going.”</p></div></div>
            <div className="review-row"><Cover size="sm" src="/covers/small-things-like-these.jpg" alt="Small Things Like These by Claire Keegan" /><div><strong>Small Things Like These</strong><p>Claire Keegan</p><span className="stars">★★★★☆</span><p className="review-quote">“Quiet and precise. I read it in one sitting.”</p></div></div>
          </Card>
        </section>
        <aside className="reader-side-col">
          <Card className="challenge-card"><p className="section-kicker">2026 reading challenge</p><h2>18 of 24 books</h2><div className="challenge-visual"><strong>75%</strong><span>through your goal</span></div><div className="challenge-track"><span style={{ width: '75%' }} /></div><p className="challenge-note">Six more books to reach your goal.</p><a className="subtle-link" href="#challenge">View challenge <Icon name="arrow-right" /></a></Card>
          <Card className="stats-card"><p className="section-kicker">This year</p><h2>Reading at your pace</h2><div className="stats-grid"><div><strong>5,482</strong><span>pages read</span></div><div><strong>14</strong><span>reviews written</span></div><div><strong>6</strong><span>new authors</span></div><div><strong>4.2</strong><span>average rating</span></div></div></Card>
          <Card className="profile-shelves"><div className="section-heading"><h2>My shelves</h2><Count>6</Count></div><Nav orientation="vertical" label="My book shelves" items={[{ label: 'All books', trailing: <Count>146</Count> }, { label: 'Want to read', trailing: <Count>28</Count> }, { label: 'Read', trailing: <Count>115</Count> }, { label: 'Favorites', trailing: <Count>12</Count> }]} /></Card>
          <div className="profile-meta"><span>Joined 2019</span><span>Portland, Oregon</span></div>
        </aside>
      </div>
    </main>
  </Page>;
}
