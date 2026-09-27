import "./dom-shim";
import React, { act } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
let bubbled = false;
const appEl = document.getElementById("app")!;
function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(<aside id="portal">{children}</aside>, appEl);
}
function Parent() {
  return (
    <div onClick={() => { bubbled = true; }}>
      <Modal><button>Action</button></Modal>
    </div>
  );
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Parent />); });
const btn = document.querySelector("#portal button") as HTMLButtonElement;
console.log(`Placed in target: ${appEl.contains(btn)}`);
act(() => { btn.click(); });
console.log(`Bubbled to parent: ${bubbled}`);
