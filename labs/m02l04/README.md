# m02l04 · Diffing Algorithm: Element Type Shifts And Subtree Tear Down

Module 2: Reconciliation Engine And The React Fiber · lesson 2.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m02l04)

**Goal:** You can explain React diffing assumptions, demonstrate subtree destruction when element types change, and preserve state effectively.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l04-02](m02l04-02/) | Diffing Types | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Prevent Unintended Teardown During Layout Changes

1. Create a stateful counter wrapped inside an article tag.
2. Add a layout toggle that conditionally swaps the article to a div.
3. Verify that counter state resets to zero when the tag changes.
4. Refactor the component to keep the tag stable while toggling classes.

> **Hint:** Toggle CSS classes on a stable element rather than swapping tag names.

## Check yourself

- What mathematical time complexity does React achieve with its heuristic diffing algorithm?
- Why does swapping a div for a section cause all children inside to unmount and lose state?
- How does React handle same-type elements with updated attributes versus different-type elements?
- How should you structure conditional styling to prevent accidental component unmounts?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
