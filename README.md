# @everystate/react

**React adapter for EveryState with hooks**

Use EveryState in React with `usePath`, `useIntent`, and `useAsync` hooks.

## Installation

```bash
npm install @everystate/react @everystate/core react
```

## Quick Start

```jsx
import { createEventState } from '@everystate/core';
import { EventStateProvider, usePath } from '@everystate/react';

const store = createEventState({ count: 0 });

function Counter() {
  const count = usePath('count');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => store.set('count', count + 1)}>
        Increment
      </button>
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

- **`usePath(path)`** Subscribe to a specific path
- **`useIntent(intentName, handler)`** Handle user intents
- **`useAsync(path, fetcher)`** Async data loading

## License

MIT © Ajdin Imsirovic
