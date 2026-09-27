# Exercises — Virtual DOM vs Real DOM: The Reconciliation Cost Model

Lesson `m02l01` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m02l01)

## Exercise 1: Calculate real DOM patch mutations from virtual diffs

1. Create two virtual node trees with identical outer container types.
2. Change only a nested paragraph text property.
3. Run the diff calculator against both trees.
4. Verify exactly one DOM text update mutation is generated.

> **Hint**: Preserve the outer container type to avoid tearing down subtrees.


---

© LearnSome.tech · support@iwantto.learnsome.tech
