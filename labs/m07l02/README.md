# m07l02 · Code-Splitting with React.lazy: Dynamic Imports And Chunks

Module 7: Suspense, Streaming And Error Boundaries · lesson 7.2 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m07l02)

**Goal:** You can reduce initial JavaScript bundle sizes using React.lazy and dynamic ES module imports with Suspense loading fallbacks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l02-02](m07l02-02/) | Lazy Chunks | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement On-Demand Modal Code Splitting

1. Declare a lazy loaded SettingsModal component.
2. Render a button that toggles an isOpen boolean state.
3. Conditionally render the lazy modal inside Suspense when open is true.
4. Verify in the network tab that the modal chunk only downloads on click.

> **Hint:** Render {isOpen && <Suspense fallback={<Spinner />}><Modal /></Suspense>}.

## Check yourself

- What requirements must a module satisfy to be imported with React.lazy?
- Why does React throw an error if a lazy component is rendered without a Suspense boundary?
- How does interaction-based code splitting differ from route-based code splitting?
- How can you proactively preload a lazy component before the user clicks to view it?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
