# m06l03 · useActionState: Async Action Handlers And Pending States

Module 6: React 19 Actions, Transitions And Async · lesson 6.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m06l03)

**Goal:** You can manage asynchronous form submissions and server actions using useActionState, handling pending states, returned data, and error states.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l03-02](m06l03-02/) | Action State | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Feedback Submission Form with Error Handling

1. Author an async action that validates comment length.
2. Return an error message if the comment has fewer than ten characters.
3. Return a success confirmation when validation passes.
4. Bind the action to a form using useActionState and display feedback.

> **Hint:** Return an object like { error: string } or { success: string } from the action.

## Check yourself

- What three values are returned by the useActionState hook tuple?
- Why does useActionState eliminate the need to call event.preventDefault on form submit?
- How does the action function receive both previous state and incoming FormData?
- How does useActionState support progressive enhancement in server-rendered applications?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
