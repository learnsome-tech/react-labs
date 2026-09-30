# m03l05 · useImperativeHandle: Controlled Ref Forwarding Boundaries

Module 3: Component Lifecycle, Effects And Refs · lesson 3.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m03l05)

**Goal:** You can use useImperativeHandle to expose a curated, type-safe imperative interface while encapsulating internal DOM nodes and implementation details.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l05-02](m03l05-02/) | Imperative Handle | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resettable Form Field with Imperative Handle

1. Declare a FormFieldHandle interface with clear and focus methods.
2. Implement a custom input component accepting a ref prop.
3. Implement useImperativeHandle to wire the clear and focus actions.
4. Verify the parent can trigger both actions without accessing the DOM input.

> **Hint:** Return an object with clear and focus callbacks from the handle factory.

## Check yourself

- How does passing refs in React nineteen differ from earlier versions that used forwardRef?
- Why is exposing raw DOM nodes to parent components considered an architectural liability?
- What arguments does useImperativeHandle accept?
- When should you prefer declarative props over an imperative ref handle?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
