// React 19 & Modern Component Architecture — lesson m05l04 — Creating Event Listener Hooks with Clean Teardown Logic
// https://learnsome.tech/courses/react-course/watch?lesson=m05l04
// © LearnSome.tech
import { JSDOM } from "jsdom";
const dom = new JSDOM("<!doctype html><html><head></head><body><div id=\"root\"></div><div id=\"app\"></div></body></html>", {
  url: "https://example.com/app",
  pretendToBeVisual: true,
});
globalThis.window = dom.window as any;
globalThis.document = dom.window.document;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.HTMLFormElement = dom.window.HTMLFormElement;
globalThis.Element = dom.window.Element;
globalThis.Node = dom.window.Node;
globalThis.CustomEvent = dom.window.CustomEvent;
globalThis.Event = dom.window.Event;
globalThis.MutationObserver = dom.window.MutationObserver;
globalThis.localStorage = dom.window.localStorage;
globalThis.sessionStorage = dom.window.sessionStorage;
globalThis.getComputedStyle = dom.window.getComputedStyle;
globalThis.FormData = dom.window.FormData;
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
