import "./dom-shim";
import React, { use, createContext, act } from "react";
import { createRoot } from "react-dom/client";
const ThemeCtx = createContext("dark");
function ThemedBox({ enabled }: { enabled: boolean }) {
  if (!enabled) return <span>Disabled</span>;
  const theme = use(ThemeCtx);
  return <span>Theme: {theme}</span>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(
    <ThemeCtx value="emerald"><ThemedBox enabled={false} /></ThemeCtx>
  );
});
console.log(`When false: ${rootEl.textContent}`);
await act(async () => {
  root.render(
    <ThemeCtx value="emerald"><ThemedBox enabled={true} /></ThemeCtx>
  );
});
console.log(`When true: ${rootEl.textContent}`);
