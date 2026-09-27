# Exercises — Component Purity: Pure Functions, Idempotence And Side Effects

Lesson `m01l02` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m01l02)

## Exercise 1: Refactor an impure mutation into a pure calculation

1. Identify a component mutating an array passed into its props.
2. Clone the array using slice or spread before sorting or filtering.
3. Verify the original prop array remains un-mutated after render.
4. Confirm consecutive render passes produce identical output.

> **Hint**: Use props.items.slice().sort() instead of mutating the prop array directly.


---

© LearnSome.tech · support@iwantto.learnsome.tech
