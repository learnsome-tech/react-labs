# m01l02 · Component Purity: Pure Functions, Idempotence And Side Effects

Module 1: React 19 Foundations & JSX Compilation · lesson 1.2 · Free · [Open the lesson](https://learnsome.tech/learn/react-course/m01l02)

**Goal:** You can write strictly pure React components that are idempotent and free from render-phase side effects.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l02-02](m01l02-02/) | Component Purity | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Refactor an impure mutation into a pure calculation

1. Identify a component mutating an array passed into its props.
2. Clone the array using slice or spread before sorting or filtering.
3. Verify the original prop array remains un-mutated after render.
4. Confirm consecutive render passes produce identical output.

> **Hint:** Use props.items.slice().sort() instead of mutating the prop array directly.

## Check yourself

- Why does React require component render functions to be pure?
- What happens during Strict Mode in development that exposes impure components?
- Why is mutating an array passed via props considered a dangerous render-phase side effect?
- Where should side effects such as data fetching and analytics beacons live in React?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
