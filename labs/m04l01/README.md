# m04l01 · Lifting State Up: Colocation, Ownership, And Data Flow

Module 4: State Sharing, Context And Composition · lesson 4.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m04l01)

**Goal:** You can determine the single source of truth for shared state, lift state to the closest common ancestor, and manage unidirectional data flow.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l01-02](m04l01-02/) | Lifting State | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Coordinate Sibling Accordion Sections

1. Create an Accordion parent holding activeSectionId state.
2. Render two AccordionItem child components.
3. Pass isOpen boolean and an onToggle callback to each child.
4. Verify that opening one item automatically collapses the other.

> **Hint:** Compare activeSectionId with each items unique key to compute isOpen.

## Check yourself

- What is the definition of closest common ancestor in a React component hierarchy?
- Why does duplicating state across two sibling components lead to synchronization bugs?
- How does excessive state lifting negatively impact rendering performance?
- How can passing children as props help eliminate intermediate prop drilling?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
