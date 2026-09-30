# m03l02 · Avoiding Effect Antipatterns: Derived State And Events

Module 3: Component Lifecycle, Effects And Refs · lesson 3.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m03l02)

**Goal:** You can identify when NOT to use useEffect, calculate derived values during render, and handle user events in event handlers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l02-02](m03l02-02/) | Derived State | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Refactor Redundant Effect State into Pure Derivation

1. Identify an effect that updates filteredItems whenever items changes.
2. Remove the filteredItems state variable and its setter entirely.
3. Compute filteredItems synchronously inside the render function.
4. Verify that tests pass with one fewer render cycle.

> **Hint:** Delete the useState call and define const filteredItems directly in the body.

## Check yourself

- What is the performance cost of updating state inside a useEffect after a prop changes?
- Why should user actions like submitting a purchase order live in event handlers instead of effects?
- How can you reset a form component internal state without writing an effect that observes ID changes?
- When should an expensive calculation in render be wrapped with useMemo?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
