# m06l02 · useTransition: Non-Blocking State Updates for Fluid UI

Module 6: React 19 Actions, Transitions And Async · lesson 6.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m06l02)

**Goal:** You can use useTransition to designate state transitions as non-blocking, handle isPending loading indicators, and keep typing inputs fluid.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l02-02](m06l02-02/) | Transition Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Non-Blocking Search Filter

1. Create an input field that updates query state urgently on keystroke.
2. Use startTransition to filter a large list of mock records.
3. Display a subtle spinner or opacity shift while isPending is true.
4. Verify rapid typing remains responsive without input lag.

> **Hint:** Call setInput(val) synchronously and wrap setFilter(val) in startTransition.

## Check yourself

- What is the difference in priority between a normal state update and one wrapped in startTransition?
- How does React nineteen expand startTransition capabilities compared to React eighteen?
- Why should controlled text inputs not have their direct value setters placed inside startTransition?
- What visual affordance should you display to users while isPending is true?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
