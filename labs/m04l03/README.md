# m04l03 · Compound Components: Inversion of Control with Context

Module 4: State Sharing, Context And Composition · lesson 4.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m04l03)

**Goal:** You can implement the Compound Component pattern using Context to give consumers flexible layout control while maintaining shared internal state.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l03-02](m04l03-02/) | Compound Tabs | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Compound Toggle Switch Widget

1. Build a Toggle container component holding boolean state.
2. Implement Toggle.Button which inverts the state on click.
3. Implement Toggle.On and Toggle.Off for conditional content display.
4. Throw an error if Toggle.Button is used outside of Toggle.

> **Hint:** Throw an error inside useToggleContext when the context value is null.

## Check yourself

- What problem does the Compound Component pattern solve compared to monolithic configuration props?
- How does an internal Context facilitate communication between compound subcomponents?
- Why is it recommended to throw an error if a compound subcomponent is rendered without a provider?
- What are the benefits of attaching compound subcomponents as static properties on the parent component?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
