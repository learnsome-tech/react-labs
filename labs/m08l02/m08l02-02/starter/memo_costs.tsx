import "./dom-shim";
import React, { memo, useState, useCallback, act } from "react";
import { createRoot } from "react-dom/client";
let childRenders = 0;
const Child = memo(({ onRun }: { onRun: () => void }) => {
  childRenders++;
  return <button onClick={onRun}>Child</button>;
});
function Parent() {
  const [n, setN] = useState(0);
  const fn = useCallback(() => {}, []);
  return (
    <div>
      <button id="p" onClick={() => setN((c) => c + 1)}>P: {n}</button>
      <Child onRun={fn} />
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Parent />); });
await act(async () => { (rootEl.querySelector("#p") as any).click(); });
console.log(`Child render passes: ${childRenders}`);
