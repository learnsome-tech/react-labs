import "./dom-shim";
import React, { useActionState, act } from "react";
import { createRoot } from "react-dom/client";
async function saveAction(prev: string, data: FormData) {
  const user = data.get("user") as string;
  return `Saved: ${user}`;
}
function Form() {
  const [state, formAction, isPending] = useActionState(saveAction, "Empty");
  return (
    <form action={formAction}>
      <input name="user" defaultValue="Jordan" />
      <button type="submit" disabled={isPending}>Save</button>
      <span>{state}</span>
    </form>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Form />); });
console.log(`Initial: ${rootEl.querySelector("span")?.textContent}`);
await act(async () => { rootEl.querySelector("button")!.click(); });
console.log(`Result: ${rootEl.querySelector("span")?.textContent}`);
