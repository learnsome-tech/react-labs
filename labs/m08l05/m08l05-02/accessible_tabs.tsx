import "./dom-shim";
import React, { useState, act } from "react";
import { createRoot } from "react-dom/client";
function RovingTabs({ tabs }: { tabs: string[] }) {
  const [cur, setCur] = useState(0);
  return (
    <div role="tablist">
      {tabs.map((t, i) => (
        <button key={t} role="tab"
          tabIndex={cur === i ? 0 : -1}
          aria-selected={cur === i}
          onClick={() => setCur(i)}>{t}</button>
      ))}
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<RovingTabs tabs={["A", "B"]} />); });
const btn = rootEl.querySelectorAll("button");
console.log(`Active tabIndex: ${btn[0].tabIndex}`);
console.log(`Inactive tabIndex: ${btn[1].tabIndex}`);
console.log(`Selected: ${btn[0].getAttribute("aria-selected")}`);
