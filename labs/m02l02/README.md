# m02l02 · React Fiber Architecture: Work Units, Priority And Commits

Module 2: Reconciliation Engine And The React Fiber · lesson 2.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m02l02)

**Goal:** You can explain the React Fiber data structure, incremental time-sliced work loop, and double-buffering architecture.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l02-02](m02l02-02/) | Fiber Walk | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Trace Fiber tree navigation across siblings

1. Construct a parent Fiber node with two child siblings.
2. Attach the child pointer to the first sibling.
3. Attach the sibling pointer to the second sibling.
4. Verify the traversal visits parent, first child, then second child.

> **Hint:** The parent child pointer always references the first child.

## Check yourself

- Why did the legacy Stack Reconciler struggle with high-frequency user inputs?
- What three pointers connect any Fiber node to the rest of the Fiber tree?
- How does double buffering prevent users from seeing partial, torn UI renders?
- What happens to the workInProgress tree if an update is aborted by higher-priority work?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
