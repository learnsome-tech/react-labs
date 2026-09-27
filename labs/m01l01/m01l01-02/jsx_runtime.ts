// React 19 & Modern Component Architecture — lesson m01l01 — JSX Transpilation: createElement, JSX Runtime, React Elements
// https://learnsome.tech/courses/react-course/watch?lesson=m01l01
// © LearnSome.tech
import { jsx } from "react/jsx-runtime";
import { renderToStaticMarkup } from "react-dom/server";
interface CardProps { title: string; count: number; }
function StatCard({ title, count }: CardProps) {
  return jsx("div", {
    className: "card",
    children: [
      jsx("h3", { children: title }, "h"),
      jsx("span", { children: `Count: ${count}` }, "s"),
    ],
  });
}
const el = jsx(StatCard, { title: "Active Users", count: 42 });
console.log(`Element type: ${typeof el.type}`);
console.log(`Title prop: ${el.props.title}`);
console.log(`Rendered: ${renderToStaticMarkup(el as any)}`);
