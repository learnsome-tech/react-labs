# m04l05 · Slot Patterns And Headless UI Architecture in React

Module 4: State Sharing, Context And Composition · lesson 4.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m04l05)

**Goal:** You can design component slots using named props and implement Headless UI primitives that completely decouple state and accessibility from styles.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l05-02](m04l05-02/) | Slot Patterns | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Modal Dialog with Named Slots

1. Create a Dialog container accepting title, body, and actions slots.
2. Render an accessible dialog role with aria-labelledby.
3. Pass a cancel and confirm button into the actions slot.
4. Verify that omitting the actions slot does not render an empty footer.

> **Hint:** Conditionally render the footer tag only when actions prop is provided.

## Check yourself

- What advantages do named slot props provide over relying strictly on the children prop?
- How does Headless UI architecture differ from traditional UI component libraries?
- Why is managing ARIA attributes and keyboard shortcuts easier with headless hooks and primitives?
- How can you conditionally hide slot wrapper elements when a slot prop is undefined?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
