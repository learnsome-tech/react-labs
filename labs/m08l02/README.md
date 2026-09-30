# m08l02 · React.memo, useMemo, And useCallback: Optimization Costs

Module 8: Performance Optimization & React Compiler · lesson 8.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m08l02)

**Goal:** You can apply React.memo, useMemo, and useCallback to preserve reference equality, quantify memoization overhead, and avoid premature optimization.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m08l02-02](m08l02-02/) | Memo Costs | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Fix Broken Memoization from Inline Objects

1. Inspect a memoized DataGrid receiving an inline filter configuration object.
2. Observe the DataGrid re-rendering on every parent state update.
3. Wrap the configuration object in useMemo with appropriate dependencies.
4. Verify the DataGrid skips re-rendering when unrelated state changes.

> **Hint:** Define const config = useMemo(() => ({ query, limit }), [query, limit]).

## Check yourself

- Why does passing an inline arrow function to a React.memo component break memoization?
- What is the difference in purpose between useMemo and useCallback?
- What hidden performance and cognitive costs are associated with manual memoization?
- When is memoizing a calculation or callback actually worthwhile?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
