# m02l03 · Keys In Depth: Identity Preservation And Identity Resetting

Module 2: Reconciliation Engine And The React Fiber · lesson 2.3 · Pro · [Open the lesson](https://learnsome.tech/learn/react-course/m02l03)

**Goal:** You can use React keys to preserve component identity, reset state on demand, and avoid bugs caused by index keys.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l03-02](m02l03-02/) | Keys Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Demonstrate State Resetting with Dynamic Keys

1. Render a form component with initial text state.
2. Change the component key from profile one to profile two.
3. Confirm that the form state resets to its initial empty string.
4. Verify that no stale input values leak into the new profile.

> **Hint:** Assigning key equals selectedUserId forces React to recreate the fiber.

## Check yourself

- Why does using array indices as keys cause checkbox or input state to migrate to wrong items?
- What two properties does React compare to determine if an existing Fiber node can be reused?
- When is changing a component key preferred over writing an effect that resets local state?
- What lifecycle and effect events fire when an element key changes between renders?

---

[Course README](../../README.md) · [React 19 & Modern Component Architecture on LearnSome.tech](https://learnsome.tech/courses/react-course)
