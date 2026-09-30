# m02l05 · SyntheticEvent System: Event Delegation in Modern React

Module 2: Reconciliation Engine And The React Fiber · lesson 2.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m02l05)

**Goal:** You can explain how React SyntheticEvent normalizes cross-browser events and attaches handlers to the root container rather than individual DOM nodes.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l05-02](m02l05-02/) | Synthetic Events | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Intercept Modal Backdrop Clicks with Propagation

1. Build a modal dialog with an outer backdrop and inner content card.
2. Add an onClick handler to the backdrop to close the dialog.
3. Call stopPropagation inside the inner card click handler.
4. Verify that clicking inside the card does not trigger modal closure.

> **Hint:** Invoke e.stopPropagation on the inner card container element.

## Check yourself

- Where does React attach DOM event listeners in modern React versus legacy React sixteen?
- Why can you safely inspect e.target inside an asynchronous callback in modern React?
- What is the difference between onClick and onClickCapture in terms of execution order?
- How does calling e.stopPropagation affect native listeners attached to document.body?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
