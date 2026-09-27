import "./dom-shim";
import React, { useEffect, useRef, useState, act } from "react";
import { createRoot } from "react-dom/client";
function useListener(type: string, handler: (e: any) => void) {
  const ref = useRef(handler);
  ref.current = handler;
  useEffect(() => {
    const sub = (e: any) => ref.current(e);
    window.addEventListener(type, sub);
    return () => window.removeEventListener(type, sub);
  }, [type]);
}
function Tracker() {
  const [msg, setMsg] = useState("init");
  useListener("alert", (e: any) => setMsg(e.detail));
  return <div>Msg: {msg}</div>;
}
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => { root.render(<Tracker />); });
const ev = new CustomEvent("alert", { detail: "ok" });
act(() => { window.dispatchEvent(ev); });
console.log(rootEl.textContent);
