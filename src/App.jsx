import { useState } from 'react';
import './App.css';
import { Button, Card, Count, Cover, Icon, Inline, Input, List, ListItem, Modal, Nav, Page, Stack, Tag, Textarea } from '../design-system/components';

const layoutModules = import.meta.glob('../products/**/index.jsx', { eager: true });
const layouts = Object.entries(layoutModules).map(([file, module]) => {
  const path = file.replace('../products', '/products').replace('/index.jsx', '/');
  const folderName = path.split('/').filter(Boolean).at(-1);
  const label = folderName.replace(/-/g, ' ').replace(/^\w/, (letter) => letter.toUpperCase());
  return { path, folderName, label, order: module.order, description: module.idea, Component: module.default };
}).sort((a, b) => {
  const aOrder = typeof a.order === 'number' ? a.order : Number.POSITIVE_INFINITY;
  const bOrder = typeof b.order === 'number' ? b.order : Number.POSITIVE_INFINITY;
  return aOrder - bOrder || a.folderName.localeCompare(b.folderName);
});

const iconNames = ['plus', 'pencil', 'send', 'book', 'search', 'more', 'arrow-right', 'close', 'chevron-down', 'check'];

function ComponentPreview() {
  const [modalOpen, setModalOpen] = useState(false);
  return <Page className="preview-page">
    <header className="preview-header">
      <div><h1>Design system</h1><p>Components and states</p></div>
    </header>
    <div className="preview-grid">
      <Card className="preview-section">
        <h2>Actions</h2>
        <Inline gap={2}>
          <Button size="md" icon="plus">Add a book</Button>
          <Button variant="secondary" icon="search">Search</Button>
          <Button variant="ghost" icon="pencil">Edit</Button>
          <Button variant="secondary" icon="more" iconOnly aria-label="More actions" />
        </Inline>
      </Card>
      <Card className="preview-section">
        <h2>Fields</h2>
        <div className="preview-fields">
          <Input label="Book title" placeholder="Search books" />
          <Textarea label="Note" placeholder="Write a note" rows="3" />
        </div>
      </Card>
      <Card className="preview-section">
        <h2>Navigation and list</h2>
        <Nav label="Reading sections" items={[{ label: 'Currently reading', active: true, trailing: <Count>3</Count> }, { label: 'Finished', trailing: <Count>18</Count> }, { label: 'Want to read' }]} />
        <List className="preview-list">
          <ListItem title="The Creative Act" description="Rick Rubin" trailing={<Count>32%</Count>} selected />
          <ListItem title="The Safekeep" description="Yael van der Wouden" trailing="Finished" onClick={() => {}} />
          <ListItem title="Long titles wrap without overlapping adjacent content" description="A longer supporting description remains flexible at narrow widths" onClick={() => {}} />
        </List>
      </Card>
      <Card className="preview-section">
        <h2>Content</h2>
        <Inline gap={3} className="preview-content">
          <Cover size="sm" /><Cover size="md" /><Cover size="lg" />
          <Stack gap={2}><Inline gap={1}><Tag tint="lavender">Fiction</Tag><Tag tint="mint">Reading</Tag></Inline><p>Gray covers stay text-free. Tags use tints to label content.</p></Stack>
        </Inline>
      </Card>
      <Card className="preview-section">
        <h2>Icons</h2>
        <Inline gap={3} className="preview-icons">{iconNames.map((name) => <span key={name}><Icon name={name} /><small>{name}</small></span>)}</Inline>
      </Card>
      <Card className="preview-section">
        <h2>Overlay</h2>
        <p>Modal panels use the same white surface and container radius.</p>
        <Button variant="secondary" icon="arrow-right" onClick={() => setModalOpen(true)}>Open modal</Button>
      </Card>
    </div>
    <Modal open={modalOpen} title="Reading list" onClose={() => setModalOpen(false)} footer={<Button icon="check" onClick={() => setModalOpen(false)}>Done</Button>}>
      <p>One clear action, with the content aligned to the same left edge.</p>
    </Modal>
  </Page>;
}

function ProductsBar({ activePath }) {
  const items = layouts.map(({ label, path }) => ({ label, href: path, active: activePath === path.replace(/\/$/, '') }));
  return <header className="products-bar">
    <div className="products-bar__inner">
      <span className="products-bar__label">Products</span>
      <div className="products-bar__tabs"><Nav label="Product layouts" items={items} /></div>
    </div>
  </header>;
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isDesignSystem = pathname === '/design-system';
  const layout = layouts.find(({ path }) => path.replace(/\/$/, '') === pathname) || layouts[0];
  const Layout = layout?.Component;
  const activePath = isDesignSystem ? null : layout?.path.replace(/\/$/, '');

  return <>
    <ProductsBar activePath={activePath} />
    {isDesignSystem ? <ComponentPreview /> : Layout ? <Layout /> : <ComponentPreview />}
  </>;
}
