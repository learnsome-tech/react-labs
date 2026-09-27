import "./dom-shim";
import React, { useState, useCallback, act } from "react";
import { createRoot } from "react-dom/client";
function useCounter(init = 0, step = 1) {
  const [val, setVal] = useState(init);
  const inc = useCallback(() => setVal((c) => c + step), [step]);
  return { val, inc };
}
function Widget() {
  const { val, inc } = useCounter(10, 5);
  return <button onClick={inc}>Val: {val}</button>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Widget />); });
console.log(`Before: ${rootEl.querySelector("button")?.textContent}`);
act(() => { rootEl.querySelector("button")!.click(); });
console.log(`After: ${rootEl.querySelector("button")?.textContent}`);
