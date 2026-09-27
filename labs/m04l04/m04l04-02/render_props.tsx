import "./dom-shim";
import React, { useState, act } from "react";
import { createRoot } from "react-dom/client";
interface ProviderProps {
  render: (val: { count: number; inc: () => void }) => React.ReactNode;
}
function Provider({ render }: ProviderProps) {
  const [count, setCount] = useState(0);
  return <>{render({ count, inc: () => setCount((c) => c + 1) })}</>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(
    <Provider render={({ count, inc }) => (
      <button onClick={inc}>Count: {count}</button>
    )} />
  );
});
console.log(`Before: ${rootEl.querySelector("button")?.textContent}`);
act(() => { rootEl.querySelector("button")!.click(); });
console.log(`After: ${rootEl.querySelector("button")?.textContent}`);
