# m07l03 · Error Boundaries: componentDidCatch And Fallback UI Trees

Module 7: Suspense, Streaming And Error Boundaries · lesson 7.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m07l03)

**Goal:** You can implement Error Boundaries using static getDerivedStateFromError and componentDidCatch to isolate subtree crashes and display graceful fallbacks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l03-02](m07l03-02/) | Error Boundary | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resettable Error Boundary Widget

1. Add a reset button inside the Error Boundary fallback UI.
2. Clear the error state when the reset button is clicked.
3. Pass a retry key to re-mount the child component subtree.
4. Verify that recovering from the error restores the interactive child.

> **Hint:** Set state to { hasError: false } inside the onReset callback.

## Check yourself

- What happens to the DOM if an unhandled error occurs without an Error Boundary?
- What is the difference in purpose between getDerivedStateFromError and componentDidCatch?
- Why can Error Boundaries not catch errors thrown inside an onClick event handler?
- How can you allow a user to reset an Error Boundary and retry rendering the crashed subtree?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
