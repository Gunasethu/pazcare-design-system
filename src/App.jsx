import { useState } from 'react';
import {
  Button, Input, Card, Tag, Avatar, Nav, List, ListItem, Modal,
} from '../design-system/components';

const row = { display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' };

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selected, setSelected] = useState('maya');

  return (
    <main style={{ padding: 'var(--space-5)', display: 'grid', gap: 'var(--space-4)', maxWidth: 720 }}>
      <h1>Design system</h1>

      <h2>Button</h2>
      <div style={row}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h2>Input</h2>
      <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
        <Input label="Name" placeholder="Your name" hint="As it appears on your profile" />
        <Input label="Email" defaultValue="not-an-email" error="Enter a valid email address" />
      </div>

      <h2>Card</h2>
      <div style={row}>
        <Card>Plain card</Card>
        <Card tint="lavender">Lavender</Card>
        <Card tint="mint">Mint</Card>
        <Card tint="sky">Sky</Card>
      </div>

      <h2>Tag</h2>
      <div style={row}>
        <Tag>Neutral</Tag>
        <Tag tint="lavender">Lavender</Tag>
        <Tag tint="mint">Mint</Tag>
        <Tag tint="sky">Sky</Tag>
      </div>

      <h2>Avatar</h2>
      <div style={row}>
        <Avatar name="Maya Rao" size="sm" />
        <Avatar name="Arjun Nair" size="md" tint="mint" />
        <Avatar name="Sam" size="lg" tint="sky" />
      </div>

      <h2>Nav</h2>
      <Nav
        label="Horizontal demo"
        items={[
          { label: 'Work', active: true },
          { label: 'About' },
          { label: 'Contact' },
        ]}
      />
      <div style={{ maxWidth: 240 }}>
        <Nav
          orientation="vertical"
          label="Vertical demo"
          items={[
            { label: 'general', active: true, trailing: <Tag tint="sky">3</Tag> },
            { label: 'design' },
            { label: 'random' },
          ]}
        />
      </div>

      <h2>List</h2>
      <Card style={{ padding: 0 }}>
        <List>
          <ListItem
            leading={<Avatar name="Maya Rao" />}
            title="Maya Rao"
            description="Sent the final mockups"
            trailing="10:42"
            selected={selected === 'maya'}
            onClick={() => setSelected('maya')}
          />
          <ListItem
            leading={<Avatar name="Arjun Nair" tint="mint" />}
            title="Arjun Nair"
            description="Can we move the review to Friday?"
            trailing="Yesterday"
            selected={selected === 'arjun'}
            onClick={() => setSelected('arjun')}
          />
          <ListItem title="Static row (not clickable)" description="No onClick, so it renders as plain content" />
        </List>
      </Card>

      <h2>Modal and Sheet</h2>
      <div style={row}>
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Button variant="secondary" onClick={() => setSheetOpen(true)}>Open sheet</Button>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="New channel"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Create</Button>
          </>
        }
      >
        <Input label="Channel name" placeholder="e.g. design-reviews" />
      </Modal>

      <Modal
        variant="sheet"
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Filters"
        footer={<Button onClick={() => setSheetOpen(false)}>Apply</Button>}
      >
        <div style={row}>
          <Tag tint="lavender">Reading</Tag>
          <Tag tint="mint">Finished</Tag>
          <Tag tint="sky">Want to read</Tag>
        </div>
      </Modal>
    </main>
  );
}