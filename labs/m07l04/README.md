# m07l04 · React Portals: Escaping Stacking Contexts for Modals

Module 7: Suspense, Streaming And Error Boundaries · lesson 7.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m07l04)

**Goal:** You can render DOM elements into external container nodes using createPortal while preserving React event bubbling and context trees.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l04-02](m07l04-02/) | Portal Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Modal with Esc Escape and Backdrop Click

1. Create a Modal component that renders into document.body with createPortal.
2. Add an outer overlay backdrop and centered dialog card.
3. Dismiss the modal when clicking the backdrop.
4. Verify clicking inside the modal card does not bubble to close the modal.

> **Hint:** Call stopPropagation inside the inner card click handler.

## Check yourself

- What CSS properties create stacking contexts that trap standard absolute elements?
- Where does createPortal place rendered elements in the physical DOM versus the Fiber tree?
- Why do clicks inside a portal bubble up to React parents even if they live in different DOM nodes?
- Do components inside a portal have access to context providers rendered in their React parent tree?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
