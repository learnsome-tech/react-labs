# m08l01 · Render Diagnostics: Profiling Re-Renders with React DevTools

Module 8: Performance Optimization & React Compiler · lesson 8.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m08l01)

**Goal:** You can profile React re-renders, interpret DevTools flamegraphs and commit phases, and diagnose wasted rendering cycles.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m08l01-02](m08l01-02/) | Profiler Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Profile and Diagnose a Cascading Re-Render

1. Render a parent component containing a heavy child table.
2. Add a search input state to the parent.
3. Profile keystrokes and observe the table re-rendering on every keypress.
4. Verify that lifting state or memoizing isolates the heavy child.

> **Hint:** Check the Profiler commit bar to identify the table component duration.

## Check yourself

- What are the three fundamental reasons why a React component re-renders?
- Why does a child component re-render even when none of its props have changed?
- What is the difference between actualDuration and baseDuration in Profiler metrics?
- How does the DevTools Ranked view assist in identifying rendering performance bottlenecks?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
