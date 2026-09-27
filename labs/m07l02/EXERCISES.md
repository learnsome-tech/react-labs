# Exercises — Code-Splitting with React.lazy: Dynamic Imports And Chunks

Lesson `m07l02` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m07l02)

## Exercise 1: Implement On-Demand Modal Code Splitting

1. Declare a lazy loaded SettingsModal component.
2. Render a button that toggles an isOpen boolean state.
3. Conditionally render the lazy modal inside Suspense when open is true.
4. Verify in the network tab that the modal chunk only downloads on click.

> **Hint**: Render {isOpen && <Suspense fallback={<Spinner />}><Modal /></Suspense>}.


---

© LearnSome.tech · support@iwantto.learnsome.tech
