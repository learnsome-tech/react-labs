import "./dom-shim";
import React, { useState, useEffect, act } from "react";
import { createRoot } from "react-dom/client";
let unmounts = 0;
function Child() {
  const [val] = useState("stable");
  useEffect(() => () => { unmounts++; }, []);
  return <span>{val}</span>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(<div><Child /></div>);
});
console.log(`Initial unmounts: ${unmounts}`);
await act(async () => {
  root.render(<section><Child /></section>);
});
console.log(`After type change unmounts: ${unmounts}`);
console.log(`DOM tag: ${rootEl.firstElementChild?.tagName}`);
