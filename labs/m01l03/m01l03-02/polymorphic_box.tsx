import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
interface BoxProps {
  as?: "div" | "button" | "section";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}
function Box({ as: Tag = "div", variant = "primary", children }: BoxProps) {
  return <Tag className={`box box--${variant}`}>{children}</Tag>;
}
const divBox = renderToStaticMarkup(<Box variant="primary">Panel</Box>);
const btnBox = renderToStaticMarkup(
  <Box as="button" variant="secondary">Action</Box>
);
console.log(`Div markup: ${divBox}`);
console.log(`Button markup: ${btnBox}`);
