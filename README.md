# @everystate/react v1.0.6

**React adapter for EveryState with hooks**

Use EveryState in React with `usePath`, `useIntent`, `useWildcard`, and `useAsync` hooks.
Built on React 18's `useSyncExternalStore` for concurrent-mode safety.

## Installation

```bash
npm install @everystate/react @everystate/core react
```

> **Zero external dependencies** - `@everystate/react` only depends on `@everystate/core` (same namespace) and React as peer dependencies. For its self-test and integration tests, it uses `@everystate/test` (also same namespace). No third-party packages required.

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
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EventStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | MIT |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for UIstate stores. Zero dependency. | MIT |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |
| [@everystate/vue](https://www.npmjs.com/package/@everystate/vue) | Vue 3 composables adapter: `provideStore`, `usePath`, `useIntent`, `useWildcard`, `useAsync` | MIT |
| [@everystate/types](https://www.npmjs.com/package/@everystate/types) | Typed dot-path autocomplete for EveryState stores (you are here) | MIT |

## Self-test (CLI, opt-in)

Run the bundled self-test to verify the store-side patterns that the React hooks consume.
It requires `@everystate/core` but **no React runtime** - it exercises the store layer only.
It is **opt-in** and never runs automatically on install:

```bash
# via npx (no install needed)
npx everystate-react-self-test

# if installed locally
everystate-react-self-test

# or directly
node node_modules/@everystate/react/self-test.js
```

You can also run the npm script from the package folder:

```bash
npm --prefix node_modules/@everystate/react run self-test
```

### Integration tests (@everystate/test)

The `tests/` folder contains a separate integration suite that uses
`@everystate/test` and `@everystate/core` (declared as `devDependencies`).
This is an intentional tradeoff: the **self-test** stays lightweight,
while integration tests remain available for deeper validation.

**For end users** (after installing the package):

```bash
# Install test dependencies
npm install @everystate/test @everystate/core

# Run from package folder
cd node_modules/@everystate/react
npm run test:integration
# or short alias
npm run test:i
```

Or, from your project root:

```bash
npm --prefix node_modules/@everystate/react run test:integration
# or short alias
npm --prefix node_modules/@everystate/react run test:i
```

**For package developers** (working in the source repo):

```bash
# Install dev dependencies first
npm install

# Run integration tests
npm run test:integration
```

## License

MIT © Ajdin Imsirovic
