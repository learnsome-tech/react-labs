# m04l02 · useContext in Depth: Scoping, Consumer Subscription Costs

Module 4: State Sharing, Context And Composition · lesson 4.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m04l02)

**Goal:** You can create and consume React Context, scope providers locally, and mitigate consumer re-render costs using split contexts or memoization.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l02-02](m04l02-02/) | Context Scope | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Split Monolithic Context into State and Dispatch

1. Create UserStateContext and UserDispatchContext separately.
2. Provide both contexts in an AppProvider wrapper.
3. Build a component that only reads dispatch without state.
4. Verify that state updates do not trigger re-renders in the dispatch component.

> **Hint:** Components calling useContext(UserDispatchContext) do not re-render when state changes.

## Check yourself

- What comparison algorithm does React use to decide if a context value changed?
- Why does passing a new object literal to a Provider cause performance bottlenecks?
- How does splitting state and dispatch into separate contexts prevent unnecessary renders?
- What syntax improvement does React nineteen introduce for rendering Context providers?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
