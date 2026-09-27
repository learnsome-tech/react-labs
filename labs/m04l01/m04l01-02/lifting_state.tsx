import "./dom-shim";
import React, { useState, act } from "react";
import { createRoot } from "react-dom/client";
function Field({ val, onEdit }: { val: string; onEdit: (v: string) => void }) {
  return <input value={val} onChange={(e) => onEdit(e.target.value)} />;
}
function ParentContainer() {
  const [term, setTerm] = useState("alpha");
  return (
    <div>
      <Field val={term} onEdit={setTerm} />
      <Field val={term} onEdit={setTerm} />
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<ParentContainer />); });
const list = rootEl.querySelectorAll("input");
console.log(`First field: ${list[0].value}`);
console.log(`Second field: ${list[1].value}`);
console.log(`Synced: ${list[0].value === list[1].value}`);
