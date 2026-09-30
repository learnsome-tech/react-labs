# m08l03 · The React Compiler: Automated Memoization Under The Hood

Module 8: Performance Optimization & React Compiler · lesson 8.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m08l03)

**Goal:** You can explain how the React Compiler transforms component code into fine-grained memoization caches, eliminating manual useMemo and useCallback.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m08l03-02](m08l03-02/) | Compiler Cache | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Clean Imperative Code for Compiler Compliance

1. Inspect a component that mutates a passed items array before mapping.
2. Refactor the sorting operation using non-mutating toSorted or slice.
3. Remove obsolete useMemo and useCallback hooks.
4. Verify compiler linting passes with full automatic memoization enabled.

> **Hint:** Use array.toSorted() instead of array.sort() to avoid in-place mutation.

## Check yourself

- How does the React Compiler eliminate the need for manual useCallback and useMemo?
- What internal data structure does the compiler emit into components to store cached values?
- Why does the React Compiler require strict adherence to component purity?
- What happens when the compiler encounters code that violates the Rules of React?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
