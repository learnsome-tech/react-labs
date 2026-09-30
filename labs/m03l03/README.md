# m03l03 · useLayoutEffect vs useEffect: Painting And Synchronous Reads

Module 3: Component Lifecycle, Effects And Refs · lesson 3.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m03l03)

**Goal:** You can contrast execution timing between useLayoutEffect and useEffect, measure DOM elements before paint, and prevent layout flicker.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l03-02](m03l03-02/) | Layout Timing | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Coordinate Tooltip Alignment Before Paint

1. Build a Tooltip component with an unmeasured initial coordinate.
2. Use useLayoutEffect to read getBoundingClientRect from the anchor.
3. Update the tooltip position state synchronously.
4. Verify in the browser profiler that only one paint frame occurs.

> **Hint:** Call getBoundingClientRect inside useLayoutEffect to calculate top and left.

## Check yourself

- What specific phase of the browser pipeline sits between useLayoutEffect and useEffect?
- Why does measuring DOM nodes in useEffect frequently cause visible user interface flickering?
- What is the performance drawback of placing heavy CPU tasks inside useLayoutEffect?
- Why does useLayoutEffect trigger a console warning during server-side rendering?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
