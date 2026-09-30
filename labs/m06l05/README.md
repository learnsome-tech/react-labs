# m06l05 · The use() Hook: Reading Promises And Context Directly

Module 6: React 19 Actions, Transitions And Async · lesson 6.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m06l05)

**Goal:** You can read Promises and React Context conditionally using the use API, integrating directly with Suspense and Error Boundaries.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l05-02](m06l05-02/) | Use Hook Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Consume an Asynchronous Promise with Suspense

1. Create a cached promise that resolves user details after twenty milliseconds.
2. Implement a UserCard component that unwraps the promise using use.
3. Wrap the card in a Suspense boundary with a skeleton fallback.
4. Verify that the card displays the resolved name upon completion.

> **Hint:** Instantiate the promise outside the component function before passing as prop.

## Check yourself

- Why is the use API allowed inside conditional blocks while other hooks are strictly forbidden?
- What happens when a component calls use with a pending Promise?
- Why must Promises passed to the use API be cached rather than created inside render?
- How does the use API handle rejected Promises?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
