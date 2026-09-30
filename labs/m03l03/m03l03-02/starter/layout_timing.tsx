import "./dom-shim";
import React, { useEffect, useLayoutEffect, act } from "react";
import { createRoot } from "react-dom/client";
const executionLog: string[] = [];
function MeasureBox() {
  useLayoutEffect(() => {
    executionLog.push("layout-effect");
  }, []);
  useEffect(() => {
    executionLog.push("passive-effect");
  }, []);
  executionLog.push("render");
  return <div id="box">Content</div>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<MeasureBox />); });
console.log(`Order: ${executionLog.join(" -> ")}`);
