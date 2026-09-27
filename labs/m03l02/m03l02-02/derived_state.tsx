import "./dom-shim";
import React, { act } from "react";
import { createRoot } from "react-dom/client";
let renderCount = 0;
interface Props { qty: number; price: number; }
function OrderSummary({ qty, price }: Props) {
  renderCount++;
  const total = qty * price;
  return <div>Total: {total}</div>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(<OrderSummary qty={3} price={25} />);
});
console.log(`Content: ${rootEl.textContent}`);
console.log(`Render passes: ${renderCount}`);
