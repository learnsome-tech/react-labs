import "./dom-shim";
import React, { lazy, Suspense, act } from "react";
import { createRoot } from "react-dom/client";
const loadModule = () => Promise.resolve({
  default: () => <span>Chunk Loaded</span>
});
const LazyComp = lazy(loadModule);
function App() {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <LazyComp />
    </Suspense>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<App />); });
console.log(`Result: ${rootEl.textContent}`);
console.log(`Spans: ${rootEl.querySelectorAll("span").length}`);
