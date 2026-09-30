# m01l01 · JSX Transpilation: createElement, JSX Runtime, React Elements

Module 1: React 19 Foundations & JSX Compilation · lesson 1.1 · Free · [Open the lesson](https://learnsome.tech/learn/react-course/m01l01)

**Goal:** You can explain how compilers transform JSX into React elements and inspect the resulting virtual element objects.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l01-02](m01l01-02/) | Jsx Runtime | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Inspect the structure of a compiled React element

1. Import the jsx function from react slash jsx-runtime.
2. Create an element representing an article tag with title prop.
3. Verify that the type property of the element equals article.
4. Confirm that the element props object contains the title property.

> **Hint:** Elements are plain objects with type, props, and key properties.

## Check yourself

- What does the JSX expression <div className='box' /> compile into at build time?
- Why are React elements immutable once instantiated?
- What is the key functional difference between React.createElement and the modern jsx runtime?
- Why is key handled as a separate parameter in the automatic JSX runtime rather than inside props?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
