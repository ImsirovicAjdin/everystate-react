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


## Ecosystem

| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support. Core state engine (you are here). | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EveryStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | Proprietary |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for EveryState stores. Zero dependency. | Proprietary |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |

## License

MIT © Ajdin Imsirovic
