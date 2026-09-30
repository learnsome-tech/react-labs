# m08l05 · Accessible Headless Primitives: ARIA, Focus, And Keyboard

Module 8: Performance Optimization & React Compiler · lesson 8.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m08l05)

**Goal:** You can implement accessible headless component primitives with roving tabIndex, ARIA role mapping, and keyboard navigation.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m08l05-02](m08l05-02/) | Accessible Tabs | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Keyboard-Navigable Dropdown

1. Implement a Menu component with role equals menu.
2. Add MenuItem options with role equals menuitem.
3. Handle ArrowDown and ArrowUp to shift focused items.
4. Verify the Escape key closes the menu and returns focus to trigger.

> **Hint:** Set focusedIndex in state and call element.focus() inside an effect.

## Check yourself

- How does the roving tabIndex pattern differ from standard sequential tab stops?
- Why must modal dialogs trap focus and restore focus to the trigger upon closing?
- What role does aria-selected play for assistive technologies in a tablist widget?
- How does a headless component architecture guarantee accessibility across design system themes?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
