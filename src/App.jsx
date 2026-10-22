   import { Button, Input, Card, Tag } from '../design-system/components';

const row = { display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' };

export default function App() {
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
    </main>
  );
}