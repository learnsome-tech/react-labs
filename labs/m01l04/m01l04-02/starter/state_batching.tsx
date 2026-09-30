import "./dom-shim";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react";
function BatchingCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  return <button onClick={increment}>{count}</button>;
}
const root = createRoot(document.getElementById("root")!);
act(() => { root.render(<BatchingCounter />); });
const btn = document.querySelector("button")!;
act(() => { btn.click(); });
console.log(`Rendered count: ${btn.textContent}`);
