# Exercises — useEffect Lifecycle: Mount, Dependencies, And Cleanup Phases

Lesson `m03l01` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m03l01)

## Exercise 1: Implement an Abortable Data Fetcher Effect

1. Create an effect that initiates a fetch with an AbortSignal.
2. Return a cleanup function that aborts the controller signal.
3. Catch AbortError without logging an uncaught error.
4. Verify rapid dependency changes cancel previous pending queries.

> **Hint**: Instantiate new AbortController inside the effect and pass controller.signal to fetch.


---

© LearnSome.tech · support@iwantto.learnsome.tech
