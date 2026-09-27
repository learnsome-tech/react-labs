# Exercises — useContext in Depth: Scoping, Consumer Subscription Costs

Lesson `m04l02` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m04l02)

## Exercise 1: Split Monolithic Context into State and Dispatch

1. Create UserStateContext and UserDispatchContext separately.
2. Provide both contexts in an AppProvider wrapper.
3. Build a component that only reads dispatch without state.
4. Verify that state updates do not trigger re-renders in the dispatch component.

> **Hint**: Components calling useContext(UserDispatchContext) do not re-render when state changes.


---

© LearnSome.tech · support@iwantto.learnsome.tech
