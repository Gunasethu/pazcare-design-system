import { useEffect, useState } from 'react';
import { List, ListItem } from '../design-system/components';
import DesignSystemPreview from './DesignSystemPreview.jsx';

const modules = import.meta.glob('../products/**/index.jsx', { eager: true });

const layouts = Object.entries(modules).map(([path, mod]) => ({
  name: path.replace('../products/', '').replace('/index.jsx', ''),
  Component: mod.default,
  idea: mod.idea || '',
}));

const getRoute = () => window.location.hash.replace(/^#\/?/, '');

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const layout = layouts.find((item) => item.name === route);
  const isDesignSystem = route === 'design-system';

  if (layout || isDesignSystem) {
    return (
      <>
        <div
          style={{
            padding: 'var(--space-2) var(--space-3)',
            borderBottom: '1px solid var(--color-border)',
            fontSize: 'var(--text-sm-size)',
          }}
        >
          <a href="#/" style={{ color: 'var(--color-text-muted)' }}>
            ← All previews
          </a>
        </div>
        {layout ? <layout.Component /> : <DesignSystemPreview />}
      </>
    );
  }

  return (
    <main style={{ padding: 'var(--space-5)', maxWidth: 720, margin: '0 auto' }}>
      <h1>Previews</h1>
      <List>
        <ListItem
          title="Design system"
          description="Tokens and core components"
          onClick={() => { window.location.hash = '/design-system'; }}
        />
        {layouts.map((item) => (
          <ListItem
            key={item.name}
            title={item.name}
            description={item.idea}
            onClick={() => { window.location.hash = `/${item.name}`; }}
          />
        ))}
      </List>
    </main>
  );
}