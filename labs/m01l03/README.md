# m01l03 · Props Contract: Immutability, Children, And Polymorphic Tags

Module 1: React 19 Foundations & JSX Compilation · lesson 1.3 · Free · [Open the lesson](https://learnsome.tech/learn/react-course/m01l03)

**Goal:** You can design strongly typed, immutable component interfaces using props, children composition, and polymorphic element tags.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l03-02](m01l03-02/) | Polymorphic Box | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Author a polymorphic Card component with semantic HTML

1. Create a Card component accepting an as prop defaulted to article.
2. Accept a title prop and children for body content.
3. Render the dynamic tag enclosing an h3 heading and a div for children.
4. Verify rendering with as section produces a section root tag.

> **Hint:** Alias the prop to Tag so JSX recognizes it as a component tag.

## Check yourself

- Why should you never mutate a prop inside a child component in React?
- How does JSX distinguish between an HTML tag and a custom component variable?
- What is prop drilling and what are two architectural techniques to eliminate it?
- Why is JavaScript parameter default syntax preferred over defaultProps in modern React?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
