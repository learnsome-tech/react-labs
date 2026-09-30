# m03l01 · useEffect Lifecycle: Mount, Dependencies, And Cleanup Phases

Module 3: Component Lifecycle, Effects And Refs · lesson 3.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m03l01)

**Goal:** You can synchronize components with external systems using useEffect, handle teardown and abort signals, and manage dependencies.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l01-02](m03l01-02/) | Effect Lifecycle | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an Abortable Data Fetcher Effect

1. Create an effect that initiates a fetch with an AbortSignal.
2. Return a cleanup function that aborts the controller signal.
3. Catch AbortError without logging an uncaught error.
4. Verify rapid dependency changes cancel previous pending queries.

> **Hint:** Instantiate new AbortController inside the effect and pass controller.signal to fetch.

## Check yourself

- Why does React execute the previous effect cleanup before running the next effect on dependency updates?
- How does StrictMode in development help identify missing effect cleanups?
- What causes network race conditions when fetching data directly inside useEffect?
- How does an AbortController prevent stale responses from corrupting component state?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
