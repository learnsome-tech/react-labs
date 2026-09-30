# m03l04 · useRef Mechanics: DOM References And Mutable Persistent State

Module 3: Component Lifecycle, Effects And Refs · lesson 3.4 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m03l04)

**Goal:** You can use useRef to hold references to DOM nodes and store mutable instance variables across renders without triggering re-renders.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l04-02](m03l04-02/) | Ref Mechanics | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Auto Focusing Form Input

1. Create a text input field linked to an inputRef.
2. Add a button that triggers inputRef.current.focus() on click.
3. Use a second ref to track how many times focus was requested.
4. Verify that focusing the input does not cause an extra re-render.

> **Hint:** Call inputRef.current?.focus() inside the button click handler.

## Check yourself

- What is the structural difference between the object returned by useRef and useState?
- Why does modifying ref.current fail to trigger a component re-render?
- When does React assign the real DOM node to a ref object during the lifecycle?
- Why is reading or writing ref.current during rendering considered an antipattern?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
