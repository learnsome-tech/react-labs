# m05l04 · Creating Event Listener Hooks with Clean Teardown Logic

Module 5: Custom Hooks And Behavioral Abstractions · lesson 5.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m05l04)

**Goal:** You can implement a robust useEventListener custom hook that handles target switching, captures changing handler references, and guarantees clean teardown.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l04-02](m05l04-02/) | Event Hook | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a useKeyPress Hook with Escape Handler

1. Author a useKeyPress hook listening to keydown events on window.
2. Inspect the event key property and match against a target key.
3. Execute the provided callback when the target key is pressed.
4. Verify that unmounting the consumer removes the keydown listener.

> **Hint:** Check if event.key === targetKey inside the event listener wrapper.

## Check yourself

- Why does omitting dependencies from an event listener effect lead to stale closures?
- How does caching the event callback inside a useRef prevent listener churn?
- What consequence occurs in single-page apps if a window listener is not removed on unmount?
- How can you extend useEventListener to support both DOM elements and the window object?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
