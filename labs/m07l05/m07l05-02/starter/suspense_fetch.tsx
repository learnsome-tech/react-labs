import "./dom-shim";
import React, { Suspense, use, act } from "react";
import { createRoot } from "react-dom/client";
const cache = new Map<string, Promise<string>>();
function query(key: string): Promise<string> {
  if (!cache.has(key)) {
    cache.set(key, Promise.resolve(`Payload: ${key}`));
  }
  return cache.get(key)!;
}
function Card({ id }: { id: string }) {
  const res = use(query(id));
  return <span>{res}</span>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(
    <Suspense fallback={<span>Wait</span>}><Card id="profile" /></Suspense>
  );
});
console.log(`Card: ${rootEl.querySelector("span")?.textContent}`);
console.log(`Entries: ${cache.size}`);
