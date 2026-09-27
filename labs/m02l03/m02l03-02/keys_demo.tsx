import "./dom-shim";
import React, { useState, act } from "react";
import { createRoot } from "react-dom/client";
function Profile({ name }: { name: string }) {
  const [draft] = useState("draft");
  return <div>{name}: {draft}</div>;
}
const root = createRoot(document.getElementById("root")!);
await act(async () => {
  root.render(<Profile key="u1" name="Alice" />);
});
const first = document.getElementById("root")!.textContent;
await act(async () => {
  root.render(<Profile key="u2" name="Bob" />);
});
const second = document.getElementById("root")!.textContent;
console.log(`Render one: ${first}`);
console.log(`Render two: ${second}`);
