import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
let externalCounter = 0;
function ImpureBadge() {
  externalCounter++;
  return <span>Render: {externalCounter}</span>;
}
function PureBadge({ count }: { count: number }) {
  return <span>Render: {count}</span>;
}
const imp1 = renderToStaticMarkup(<ImpureBadge />);
const imp2 = renderToStaticMarkup(<ImpureBadge />);
const p1 = renderToStaticMarkup(<PureBadge count={1} />);
const p2 = renderToStaticMarkup(<PureBadge count={1} />);
console.log(`Impure identical: ${imp1 === imp2}`);
console.log(`Pure identical: ${p1 === p2}`);
