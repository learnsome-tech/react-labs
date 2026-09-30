# m05l01 · Rules of Hooks: Call Order, Hook Lists, And Fiber Storage

Module 5: Custom Hooks And Behavioral Abstractions · lesson 5.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m05l01)

**Goal:** You can explain why hooks rely on strict call order, how the Fiber linked list stores hook records, and how to avoid conditional hook violations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l01-02](m05l01-02/) | Hook Storage | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Refactor Conditional Hook Invocations

1. Identify an antipattern where useEffect is called inside an if block.
2. Move the hook invocation to the top level of the component.
3. Relocate the conditional check inside the effect body itself.
4. Verify that ESLint passes cleanly with zero hook violations.

> **Hint:** Call useEffect unconditionally and place if (!isEnabled) return inside it.

## Check yourself

- Why does React not use named identifiers or keys to associate hooks with components?
- What precise data structure does a Fiber node use to store hook records internally?
- What runtime failure occurs if a component calls three hooks on render one and two hooks on render two?
- How do you conditionally execute effect logic without violating the Rules of Hooks?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
