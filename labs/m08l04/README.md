# m08l04 · Virtualization: Rendering Infinite Datasets Efficiently

Module 8: Performance Optimization & React Compiler · lesson 8.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m08l04)

**Goal:** You can implement list virtualization concepts to render thousands of items efficiently by windowing only the visible viewport elements.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m08l04-02](m08l04-02/) | Virtual List | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Virtualized List with Scroll Sync

1. Create a scrollable viewport container with overflow-y auto.
2. Listen to the onScroll event to update the active scrollTop state.
3. Calculate startIndex and endIndex using itemHeight and viewportHeight.
4. Verify only the active slice of elements appears in the DOM tree.

> **Hint:** Render an empty spacer div styled with height: totalItems * itemHeight.

## Check yourself

- Why does rendering ten thousand native DOM elements degrade web application performance?
- How does a virtualized list simulate a full-length scrollbar without rendering all elements?
- What is the role of the overscan parameter in list virtualization?
- How do dynamic item heights complicate virtualization calculations compared to fixed heights?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
