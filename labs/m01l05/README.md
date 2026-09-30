# m01l05 · Complex State with useReducer: State Machines And Action Types

Module 1: React 19 Foundations & JSX Compilation · lesson 1.5 · Free · [Open the lesson](https://learnsome.tech/learn/react-course/m01l05)

**Goal:** You can manage complex, interdependent component state transitions using useReducer, discriminated action unions, and pure reducer functions.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l05-02](m01l05-02/) | State Reducer | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement a reducer handling error transitions

1. Add an error state type carrying an error message string.
2. Add a FETCH_FAILURE action carrying the error payload.
3. Update the reducer to handle the failure transition.
4. Verify the reducer moves into the error status on failure.

> **Hint:** Return an object with status error and the action error message.

## Check yourself

- When is useReducer preferred over multiple useState hooks?
- Why can reducers not perform asynchronous operations like fetch()?
- How do discriminated union types in TypeScript protect against impossible UI states?
- Why does the stable identity of the dispatch function benefit performance optimization?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
