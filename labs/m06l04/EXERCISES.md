# Exercises — useOptimistic: Instantaneous UI Updates with Rollback

Lesson `m06l04` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m06l04)

## Exercise 1: Build an Optimistic Like Button with Error Simulation

1. Manage a likesCount state variable initialized to forty.
2. Configure useOptimistic to increment the count by one immediately.
3. Trigger an async action that rejects on simulated network failure.
4. Verify the like count increments instantly and reverts on error.

> **Hint**: Throw an Error inside the async transition and catch it outside the component.


---

© LearnSome.tech · support@iwantto.learnsome.tech
