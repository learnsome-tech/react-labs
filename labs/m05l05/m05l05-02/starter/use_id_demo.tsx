import "./dom-shim";
import React, { useId, act } from "react";
import { createRoot } from "react-dom/client";
function Field({ label, hint }: { label: string; hint: string }) {
  const id = useId();
  const inId = `${id}-in`;
  const hintId = `${id}-hint`;
  return (
    <div>
      <label htmlFor={inId}>{label}</label>
      <input id={inId} aria-describedby={hintId} defaultValue="admin" />
      <span id={hintId}>{hint}</span>
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(<Field label="User" hint="Must be unique" />);
});
const lbl = rootEl.querySelector("label")!;
const inp = rootEl.querySelector("input")!;
console.log(`Linked: ${lbl.htmlFor === inp.id}`);
