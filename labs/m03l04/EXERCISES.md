# Exercises — useRef Mechanics: DOM References And Mutable Persistent State

Lesson `m03l04` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m03l04)

## Exercise 1: Build an Auto Focusing Form Input

1. Create a text input field linked to an inputRef.
2. Add a button that triggers inputRef.current.focus() on click.
3. Use a second ref to track how many times focus was requested.
4. Verify that focusing the input does not cause an extra re-render.

> **Hint**: Call inputRef.current?.focus() inside the button click handler.


---

© LearnSome.tech · support@iwantto.learnsome.tech
