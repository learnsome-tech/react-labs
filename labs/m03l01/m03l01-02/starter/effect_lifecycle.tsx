import "./dom-shim";
import React, { useEffect, act } from "react";
import { createRoot } from "react-dom/client";
const logs: string[] = [];
function Tracker({ id }: { id: number }) {
  useEffect(() => {
    logs.push(`sub:${id}`);
    return () => { logs.push(`unsub:${id}`); };
  }, [id]);
  return <span>{id}</span>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Tracker id={1} />); });
await act(async () => { root.render(<Tracker id={2} />); });
await act(async () => { root.render(null); });
console.log(`Trace: ${logs.join(" -> ")}`);
