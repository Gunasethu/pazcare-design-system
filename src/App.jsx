import { Button } from '../design-system/components/Button.jsx';

export default function App() {
  return (
    <main style={{ padding: 'var(--space-5)', display: 'grid', gap: 'var(--space-4)' }}>
      <h1>Design system</h1>
      <h2>Button</h2>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  );
}