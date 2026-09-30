# m05l02 · Custom Hook Composition: Encapsulating Reactive Logic

Module 5: Custom Hooks And Behavioral Abstractions · lesson 5.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m05l02)

**Goal:** You can compose multiple built-in hooks into clean, reusable custom hooks that encapsulate reactive state, effects, and business invariants.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l02-02](m05l02-02/) | Custom Hook | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Reusable useToggle Custom Hook

1. Author a useToggle hook accepting an optional initial boolean.
2. Return the current state along with toggle, setTrue, and setFalse.
3. Ensure all returned functions have stable references via useCallback.
4. Use the hook in a disclosure component and verify its behavior.

> **Hint:** Return an object containing { value, toggle, setTrue, setFalse }.

## Check yourself

- Does calling the same custom hook across two different components share state between them?
- When should a custom hook return an array tuple versus a named object dictionary?
- Why should action functions returned from custom hooks be memoized with useCallback?
- How does encapsulating state inside a custom hook simplify automated unit testing?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
