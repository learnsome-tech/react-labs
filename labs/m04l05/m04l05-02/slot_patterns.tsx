import "./dom-shim";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
interface Slots { top: React.ReactNode; main: React.ReactNode; }
function Layout({ top, main }: Slots) {
  return <section><header>{top}</header><main>{main}</main></section>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(<Layout top={<h1>App</h1>} main={<p>Content</p>} />);
});
console.log(`Top: ${rootEl.querySelector("h1")?.textContent}`);
console.log(`Main: ${rootEl.querySelector("p")?.textContent}`);
