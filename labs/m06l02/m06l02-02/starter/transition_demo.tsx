import "./dom-shim";
import React, { useState, useTransition, act } from "react";
import { createRoot } from "react-dom/client";
function FilterBox() {
  const [term, setTerm] = useState("alpha");
  const [isPending, startTransition] = useTransition();
  const update = (next: string) => {
    startTransition(() => { setTerm(next); });
  };
  return (
    <div>
      <button onClick={() => update("beta")}>Switch</button>
      <span id="st">{isPending ? "busy" : "ready"}</span>
      <span id="val">{term}</span>
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<FilterBox />); });
await act(async () => { rootEl.querySelector("button")!.click(); });
console.log(`Term: ${rootEl.querySelector("#val")?.textContent}`);
console.log(`Status: ${rootEl.querySelector("#st")?.textContent}`);
