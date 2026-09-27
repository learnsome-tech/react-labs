import "./dom-shim";
import React, { Component, act } from "react";
import { createRoot } from "react-dom/client";
interface Props { fb: string; children: React.ReactNode; }
class Boundary extends Component<Props, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  render() {
    if (this.state.err) return <div>{this.props.fb}</div>;
    return this.props.children;
  }
}
function Flawed(): React.ReactNode { throw new Error("Boom"); }
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
const orig = console.error; console.error = () => {};
await act(async () => {
  root.render(<Boundary fb="Handled"><Flawed /></Boundary>);
});
console.error = orig;
console.log(`Fallback: ${rootEl.textContent}`);
console.log(`Active: ${rootEl.querySelector("div") !== null}`);
