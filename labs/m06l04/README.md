# m06l04 · useOptimistic: Instantaneous UI Updates with Rollback

Module 6: React 19 Actions, Transitions And Async · lesson 6.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m06l04)

**Goal:** You can use useOptimistic to update the user interface immediately before server action completion, automatically reconciling or rolling back upon resolution.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l04-02](m06l04-02/) | Optimistic Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Optimistic Like Button with Error Simulation

1. Manage a likesCount state variable initialized to forty.
2. Configure useOptimistic to increment the count by one immediately.
3. Trigger an async action that rejects on simulated network failure.
4. Verify the like count increments instantly and reverts on error.

> **Hint:** Throw an Error inside the async transition and catch it outside the component.

## Check yourself

- What problem does useOptimistic solve for user perceived latency?
- Why must setOptimistic be called inside startTransition or a form action?
- What happens to the optimistic state if the asynchronous server action rejects with an error?
- How does useOptimistic differ from managing optimistic state with useState?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
