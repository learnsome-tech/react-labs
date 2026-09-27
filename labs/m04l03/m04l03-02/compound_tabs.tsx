import "./dom-shim";
import React, { createContext, useContext, useState, act } from "react";
import { createRoot } from "react-dom/client";
type C = { cur: string; set: (s: string) => void };
const Ctx = createContext<C | null>(null);
function Tabs({ init, children }: { init: string; children: React.ReactNode }) {
  const [cur, set] = useState(init);
  return <Ctx value={{ cur, set }}>{children}</Ctx>;
}
function Tab({ id }: { id: string }) {
  const { cur, set } = useContext(Ctx)!;
  return <button onClick={() => set(id)}>{cur === id ? "on" : "off"}</button>;
}
function Panel({ id, msg }: { id: string; msg: string }) {
  const { cur } = useContext(Ctx)!;
  return cur === id ? <span>{msg}</span> : null;
}
const el = document.getElementById("root")!;
const root = createRoot(el);
await act(async () => {
  root.render(<Tabs init="1"><Tab id="1"/><Panel id="1" msg="Hello"/></Tabs>);
});
console.log(`Active: ${el.querySelector("span")?.textContent}`);
