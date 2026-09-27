# Exercises — useLayoutEffect vs useEffect: Painting And Synchronous Reads

Lesson `m03l03` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m03l03)

## Exercise 1: Coordinate Tooltip Alignment Before Paint

1. Build a Tooltip component with an unmeasured initial coordinate.
2. Use useLayoutEffect to read getBoundingClientRect from the anchor.
3. Update the tooltip position state synchronously.
4. Verify in the browser profiler that only one paint frame occurs.

> **Hint**: Call getBoundingClientRect inside useLayoutEffect to calculate top and left.


---

© LearnSome.tech · support@iwantto.learnsome.tech
