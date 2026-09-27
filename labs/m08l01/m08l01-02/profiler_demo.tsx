import "./dom-shim";
import React, { Profiler, useState, act } from "react";
import { createRoot } from "react-dom/client";
const logs: string[] = [];
function onRender(id: string, phase: string) {
  logs.push(`${id}:${phase}`);
}
function Counter() {
  const [val, setVal] = useState(0);
  return (
    <Profiler id="app" onRender={onRender}>
      <button onClick={() => setVal((v) => v + 1)}>Val: {val}</button>
    </Profiler>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Counter />); });
await act(async () => { rootEl.querySelector("button")!.click(); });
console.log(`Mount: ${logs[0]}`);
console.log(`Update: ${logs[1]}`);
console.log(`Events: ${logs.length}`);
