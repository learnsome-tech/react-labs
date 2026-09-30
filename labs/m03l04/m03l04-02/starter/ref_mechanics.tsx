import "./dom-shim";
import React, { useRef, useState, act } from "react";
import { createRoot } from "react-dom/client";
function ActionBox() {
  const [val, setVal] = useState(0);
  const hits = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => { hits.current += 1; setVal(hits.current); };
  return (
    <div>
      <input ref={inputRef} defaultValue="active" />
      <button onClick={onClick}>Run</button>
      <span>Value: {val}</span>
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<ActionBox />); });
act(() => { rootEl.querySelector("button")!.click(); });
console.log(rootEl.querySelector("span")!.textContent);
console.log(`Input exists: ${rootEl.querySelector("input") !== null}`);
