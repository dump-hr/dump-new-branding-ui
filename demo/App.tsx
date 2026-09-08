import { Button } from '../src';

export const App = () => (
  <div
    style={{
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start',
      fontFamily: 'system-ui, sans-serif',
    }}
  >
    <h1>@dump-hr/ui playground</h1>

    <section style={{ display: 'flex', gap: 12 }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </section>

    <section style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </section>
  </div>
);
