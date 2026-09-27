import "./dom-shim";
import React, { useOptimistic, useState, useTransition, act } from "react";
import { createRoot } from "react-dom/client";
function Chat() {
  const [val, setVal] = useState("idle");
  const [, start] = useTransition();
  const [opt, setOpt] = useOptimistic(val, (_, next: string) => next);
  const send = (m: string) => {
    start(async () => { setOpt("sending"); setVal(m); });
  };
  return <button onClick={() => send("saved")}>{opt}</button>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Chat />); });
console.log(`Before: ${rootEl.querySelector("button")?.textContent}`);
await act(async () => { rootEl.querySelector("button")!.click(); });
console.log(`After: ${rootEl.querySelector("button")?.textContent}`);
