# Exercises — The React Compiler: Automated Memoization Under The Hood

Lesson `m08l03` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m08l03)

## Exercise 1: Clean Imperative Code for Compiler Compliance

1. Inspect a component that mutates a passed items array before mapping.
2. Refactor the sorting operation using non-mutating toSorted or slice.
3. Remove obsolete useMemo and useCallback hooks.
4. Verify compiler linting passes with full automatic memoization enabled.

> **Hint**: Use array.toSorted() instead of array.sort() to avoid in-place mutation.


---

© LearnSome.tech · support@iwantto.learnsome.tech
