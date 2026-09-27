# Exercises — Creating Event Listener Hooks with Clean Teardown Logic

Lesson `m05l04` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m05l04)

## Exercise 1: Build a useKeyPress Hook with Escape Handler

1. Author a useKeyPress hook listening to keydown events on window.
2. Inspect the event key property and match against a target key.
3. Execute the provided callback when the target key is pressed.
4. Verify that unmounting the consumer removes the keydown listener.

> **Hint**: Check if event.key === targetKey inside the event listener wrapper.


---

© LearnSome.tech · support@iwantto.learnsome.tech
