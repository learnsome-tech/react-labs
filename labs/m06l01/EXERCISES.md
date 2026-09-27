# Exercises — Concurrent Mode: Interruptible Work And Lane Priority

Lesson `m06l01` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m06l01)

## Exercise 1: Simulate Lane Preemption with Microtasks

1. Model a queue holding low priority background work items.
2. Add a function that inserts an urgent task at the front of the queue.
3. Iterate through work units using cooperative yielding.
4. Confirm that urgent tasks finish before background items resume.

> **Hint**: Extract the highest bitmask lane and verify work ordering.


---

© LearnSome.tech · support@iwantto.learnsome.tech
