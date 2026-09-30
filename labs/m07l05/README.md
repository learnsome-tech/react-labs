# m07l05 · Client-Side Data Fetching Architectures with Suspense

Module 7: Suspense, Streaming And Error Boundaries · lesson 7.5 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m07l05)

**Goal:** You can contrast Fetch-on-Render with Render-as-You-Fetch architectures and implement cache-coordinated Suspense data fetching.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l05-02](m07l05-02/) | Suspense Fetch | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Cached Resource Reader for User Profiles

1. Implement a resource cache that maps user IDs to fetch promises.
2. Author a UserProfile component that calls use(readUser(id)).
3. Wrap the profile in Suspense with an avatar placeholder fallback.
4. Confirm that rendering two identical cards makes only one network call.

> **Hint:** Check if cache.has(userId) before instantiating a new fetch promise.

## Check yourself

- What causes network waterfalls when components fetch data inside useEffect?
- How does Render-as-You-Fetch differ fundamentally from Fetch-on-Render?
- Why does Suspense data fetching require a persistent promise cache outside the component?
- How do libraries like TanStack Query coordinate with React Suspense boundaries?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
