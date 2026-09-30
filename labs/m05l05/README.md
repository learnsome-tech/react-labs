# m05l05 · useId: Generating Stable Accessible Form Element Identifiers

Module 5: Custom Hooks And Behavioral Abstractions · lesson 5.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m05l05)

**Goal:** You can use useId to generate stable, collision-free identifiers for ARIA attributes and form labels that match between server and client hydration.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l05-02](m05l05-02/) | Use Id Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Error-Annotated Input Field

1. Call useId to create a base identifier.
2. Link an input to a label with htmlFor.
3. Link the input to an error paragraph with aria-errormessage.
4. Verify all ARIA attributes share the same deterministic prefix.

> **Hint:** Set aria-errormessage to id-error and aria-invalid to true.

## Check yourself

- Why does using Math.random for HTML element IDs cause hydration mismatches?
- How does React compute deterministic identifiers without storing a global counter?
- Why should you append suffixes to a single useId call rather than calling useId multiple times?
- Why is useId not suitable for generating keys in dynamic list rendering?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
