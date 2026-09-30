# m05l03 · useSyncExternalStore: Tearing-Free Store Subscriptions

Module 5: Custom Hooks And Behavioral Abstractions · lesson 5.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m05l03)

**Goal:** You can subscribe React components to non-React state stores using useSyncExternalStore, preventing visual tearing during concurrent rendering.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l03-02](m05l03-02/) | Sync External Store | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a useOnlineStatus Custom Hook

1. Subscribe to browser window online and offline events.
2. Implement a getSnapshot function reading navigator.onLine.
3. Provide a getServerSnapshot returning true as default.
4. Verify component renders online status and responds to offline events.

> **Hint:** Pass window.addEventListener and removeEventListener to subscribe.

## Check yourself

- What is UI tearing, and how does concurrent rendering increase its likelihood?
- Why does returning a new object reference from getSnapshot cause an infinite loop?
- What three arguments can you provide to the useSyncExternalStore hook?
- Why is useSyncExternalStore preferred over useEffect and useState for store subscriptions?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
