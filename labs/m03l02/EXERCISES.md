# Exercises — Avoiding Effect Antipatterns: Derived State And Events

Lesson `m03l02` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m03l02)

## Exercise 1: Refactor Redundant Effect State into Pure Derivation

1. Identify an effect that updates filteredItems whenever items changes.
2. Remove the filteredItems state variable and its setter entirely.
3. Compute filteredItems synchronously inside the render function.
4. Verify that tests pass with one fewer render cycle.

> **Hint**: Delete the useState call and define const filteredItems directly in the body.


---

© LearnSome.tech · support@iwantto.learnsome.tech
