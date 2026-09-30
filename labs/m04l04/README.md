# m04l04 · Higher-Order Components And Render Props: Tradeoff Analysis

Module 4: State Sharing, Context And Composition · lesson 4.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m04l04)

**Goal:** You can compare HOCs and Render Props, analyze prop collision and wrapper hell tradeoffs, and migrate patterns to modern custom hooks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l04-02](m04l04-02/) | Render Props | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Migrate a Legacy Render Prop to a Custom Hook

1. Inspect a MousePosition render prop component tracking cursor coordinates.
2. Author a useMousePosition custom hook encapsulating that state.
3. Refactor the consumer component to call the hook directly.
4. Verify that component markup becomes flat without wrapper tags.

> **Hint:** Extract the useState and window event listener into the new custom hook.

## Check yourself

- What is the prop collision problem inherent to Higher-Order Components?
- How does the Render Props pattern solve prop collision without extra indirection?
- Why did custom hooks replace HOCs as the primary logic sharing mechanism?
- In what specific UI scenarios is the Render Prop pattern still preferred over hooks?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
