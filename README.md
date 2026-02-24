# @everystate/react

**React adapter for EveryState with hooks**

Use EveryState in React with `usePath`, `useIntent`, `useWildcard`, and `useAsync` hooks.
Built on React 18's `useSyncExternalStore` for concurrent-mode safety.

## Installation

```bash
npm install @everystate/react @everystate/core react
```

## Quick Start

```jsx
import { createEveryState } from '@everystate/core';
import { EventStateProvider, usePath, useIntent } from '@everystate/react';

const store = createEveryState({ count: 0 });

function Counter() {
  const count = usePath('count');
  const setCount = useIntent('count');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <EventStateProvider store={store}>
      <Counter />
    </EventStateProvider>
  );
}
```

## Hooks

- **`usePath(path)`** - Subscribe to a dot-path. Re-renders only when that path changes.
- **`useIntent(path)`** - Returns a stable setter function for a path. Memoized to prevent unnecessary re-renders.
- **`useWildcard(path)`** - Subscribe to a wildcard path (e.g. `'user.*'`). Returns the parent object.
- **`useAsync(path)`** - Returns `{ data, status, error, execute, cancel }` for async operations.
- **`useStore()`** - Returns the raw store from context.

## License

MIT © Ajdin Imsirovic
