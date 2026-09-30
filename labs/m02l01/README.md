# m02l01 · Virtual DOM vs Real DOM: The Reconciliation Cost Model

Module 2: Reconciliation Engine And The React Fiber · lesson 2.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m02l01)

**Goal:** You can contrast Virtual DOM tree comparisons with real DOM layout costs and explain how React minimizes browser reflows.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l01-02](m02l01-02/) | Vdom Diff | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Calculate real DOM patch mutations from virtual diffs

1. Create two virtual node trees with identical outer container types.
2. Change only a nested paragraph text property.
3. Run the diff calculator against both trees.
4. Verify exactly one DOM text update mutation is generated.

> **Hint:** Preserve the outer container type to avoid tearing down subtrees.

## Check yourself

- Why does direct real DOM manipulation often cause layout thrashing?
- What is the primary difference between the Render phase and the Commit phase?
- Can the Render phase be paused or abandoned in React 19 without side effects?
- Why does the Commit phase execute synchronously in the browser?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
