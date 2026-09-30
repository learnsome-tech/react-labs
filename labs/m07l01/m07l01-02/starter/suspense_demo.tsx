import "./dom-shim";
import React, { Suspense, use, act } from "react";
import { createRoot } from "react-dom/client";
const cached = Promise.resolve("Resolved Data");
function AsyncWidget({ p }: { p: Promise<string> }) {
  const res = use(p);
  return <span>{res}</span>;
}
function App() {
  return (
    <Suspense fallback={<span>Waiting</span>}>
      <AsyncWidget p={cached} />
    </Suspense>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<App />); });
console.log(`Content: ${rootEl.textContent}`);
console.log(`Tag: ${rootEl.querySelector("span")?.tagName}`);
