# m01l04 · State with useState: Immutability And Asynchronous Batching

Module 1: React 19 Foundations & JSX Compilation · lesson 1.4 · Free · [Open the lesson](https://learnsome.tech/learn/react-course/m01l04)

**Goal:** You can manage component state immutably using useState and reason about React's asynchronous state snapshots and automatic batching.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l04-02](m01l04-02/) | State Batching | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Update an array of items immutably using functional setter

1. Declare a state array holding three string items.
2. Append a fourth item without mutating the original array.
3. Use a functional updater with the array spread operator.
4. Confirm the new array has four items and a fresh reference.

> **Hint:** setItems((prev) => [...prev, newItem]) produces a new reference.

## Check yourself

- Why does calling setCount(count + 1) three times in an event handler only increment by 1?
- How does passing an updater function setCount(prev => prev + 1) solve stale closures?
- What equality check does React perform to determine whether to skip a component re-render?
- How does React 19's automatic batching handle state updates inside setTimeout or Promises?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
