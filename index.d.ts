/**
 * @everystate/react
 *
 * React adapter for EveryState with hooks.
 * Built on React 18's useSyncExternalStore for concurrent-mode safety.
 */

import type { EveryStateStore } from '@everystate/core';
import type { ReactNode } from 'react';

/**
 * Provider: makes a store available to all child components via hooks.
 * The store is created *outside* React. The provider is pure dependency injection.
 */
export function EventStateProvider(props: {
  store: EveryStateStore;
  children: ReactNode;
}): JSX.Element;

/**
 * Returns the EveryState store from context.
 * Throws if called outside an EventStateProvider.
 */
export function useStore(): EveryStateStore;

/**
 * Subscribe to a dot-path in the store.
 * Re-renders the component only when the value at that path changes.
 * Uses React 18's useSyncExternalStore for concurrent-mode safety.
 *
 * @param path - Dot-separated state path (e.g. 'user.name')
 * @returns The current value at the path
 */
export function usePath(path: string): any;

/**
 * Returns a stable function that publishes a value to a path.
 * Memoized so it won't cause unnecessary re-renders when passed as a prop.
 *
 * @param path - Dot-separated intent path (e.g. 'intent.addTask')
 * @returns A setter function
 */
export function useIntent(path: string): (value: any) => any;

/**
 * Subscribe to a wildcard path (e.g. 'state.*').
 * Re-renders whenever any child of that path changes.
 * The returned value is the parent object at the path prefix.
 *
 * @param wildcardPath - e.g. 'state.tasks.*' or 'state.*'
 * @returns The current value at the parent path
 */
export function useWildcard(wildcardPath: string): any;

/**
 * Trigger an async operation and subscribe to its status.
 *
 * @param path - Base path for the async operation
 */
export function useAsync(path: string): {
  data: any;
  status: string | undefined;
  error: any;
  execute: (fetcher: (signal: AbortSignal) => Promise<any>) => Promise<any>;
  cancel: () => void;
};
