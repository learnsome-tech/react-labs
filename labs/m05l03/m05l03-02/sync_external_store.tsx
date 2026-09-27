import "./dom-shim";
import React, { useSyncExternalStore, act } from "react";
import { createRoot } from "react-dom/client";
class Store {
  private val = 100;
  private subs = new Set<() => void>();
  subscribe = (cb: () => void) => {
    this.subs.add(cb); return () => this.subs.delete(cb);
  };
  getSnapshot = () => this.val;
  set = (v: number) => { this.val = v; this.subs.forEach((cb) => cb()); };
}
const store = new Store();
function Viewer() {
  const val = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return <span>Store: {val}</span>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Viewer />); });
console.log(`Initial: ${rootEl.textContent}`);
act(() => { store.set(250); });
console.log(`Updated: ${rootEl.textContent}`);
