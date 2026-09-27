# Exercises — Virtualization: Rendering Infinite Datasets Efficiently

Lesson `m08l04` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m08l04)

## Exercise 1: Build a Virtualized List with Scroll Sync

1. Create a scrollable viewport container with overflow-y auto.
2. Listen to the onScroll event to update the active scrollTop state.
3. Calculate startIndex and endIndex using itemHeight and viewportHeight.
4. Verify only the active slice of elements appears in the DOM tree.

> **Hint**: Render an empty spacer div styled with height: totalItems * itemHeight.


---

© LearnSome.tech · support@iwantto.learnsome.tech
