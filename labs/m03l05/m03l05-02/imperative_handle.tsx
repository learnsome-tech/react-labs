import "./dom-shim";
import React, { useRef, useImperativeHandle, act } from "react";
import { createRoot } from "react-dom/client";
export interface FieldHandle {
  getValue: () => string;
}
function Field({ ref }: { ref: React.Ref<FieldHandle> }) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current?.value ?? "",
  }));
  return <input ref={inputRef} defaultValue="token" />;
}
const fieldRef = React.createRef<FieldHandle>();
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
await act(async () => {
  root.render(<Field ref={fieldRef} />);
});
const val = fieldRef.current?.getValue();
const raw = (fieldRef.current as any)?.tagName !== undefined;
console.log(`Handle value: ${val}`);
console.log(`Raw DOM exposed: ${raw}`);
