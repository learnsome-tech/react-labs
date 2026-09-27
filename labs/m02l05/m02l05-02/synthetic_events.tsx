import "./dom-shim";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
const log: string[] = [];
function App() {
  return (
    <div onClickCapture={() => log.push("capture")}
         onClick={() => log.push("bubble")}>
      <button onClick={(e) => {
        log.push(`btn:${e.type}`);
        console.log(`Native exists: ${e.nativeEvent !== undefined}`);
      }}>Click</button>
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<App />); });
const btn = rootEl.querySelector("button")!;
btn.click();
console.log(`Flow: ${log.join(" -> ")}`);
