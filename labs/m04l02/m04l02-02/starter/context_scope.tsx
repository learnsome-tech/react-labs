import "./dom-shim";
import React, { createContext, useContext, useState, act } from "react";
import { createRoot } from "react-dom/client";
const ThemeContext = createContext({ mode: "light" });
let renders = 0;
function Display() {
  renders++;
  const { mode } = useContext(ThemeContext);
  return <span>Mode: {mode}</span>;
}
function App() {
  const [mode] = useState("dark");
  return (
    <ThemeContext value={{ mode }}>
      <Display />
    </ThemeContext>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<App />); });
console.log(rootEl.textContent);
console.log(`Renders: ${renders}`);
