# m07l01 · Suspense Architecture: Promises, Fallbacks, And Co-ordination

Module 7: Suspense, Streaming And Error Boundaries · lesson 7.1 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m07l01)

**Goal:** You can orchestrate concurrent component rendering with Suspense, understand promise throwing mechanics, and coordinate nested boundaries.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l01-02](m07l01-02/) | Suspense Demo | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement Nested Suspense Boundaries

1. Create a FastWidget promise resolving in ten milliseconds.
2. Create a SlowWidget promise resolving in eighty milliseconds.
3. Wrap both in independent nested Suspense boundaries.
4. Verify FastWidget renders its content while SlowWidget displays its fallback.

> **Hint:** Provide distinct fallback skeletons for each individual Suspense wrapper.

## Check yourself

- What internal mechanism occurs when a component suspends during rendering?
- Why does nesting multiple Suspense boundaries provide a superior user experience?
- What happens if a component suspends but has no ancestor Suspense boundary?
- How does the React nineteen use API simplify building suspending components?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
