<img src="https://learnsome.tech/logo.png" width="48" alt="LearnSome.tech">

# React 19 & Modern Component Architecture

8 modules, 40 lessons: React 19 Foundations & JSX Compilation; Reconciliation Engine And The React Fiber; Component Lifecycle, Effects And Refs; State Sharing, Context And Composition; Custom Hooks And Behavioral Abstractions; React 19 Actions, Transitions And Async; Suspense, Streaming And Error Boundaries; Performance Optimization & React Compiler.

## Watch and read

- **Course page**: [https://learnsome.tech/courses/react-course](https://learnsome.tech/courses/react-course)
- **Video player**: [https://learnsome.tech/courses/react-course/watch](https://learnsome.tech/courses/react-course/watch)
- **Handbook PDF**: [https://learnsome.tech/handbooks/react/book.pdf](https://learnsome.tech/handbooks/react/book.pdf)
- **On-site handbook**: [https://learnsome.tech/courses/react-course/book](https://learnsome.tech/courses/react-course/book)

## What is in this repository

This repository contains code artifacts, exercises and reference files for the lessons in this course.
40 lessons include a `labs/<lessonId>/` folder.
Each folder is named after the lesson identifier (e.g. `labs/m01l01/`) and contains the
artifact files shown in the course video, an `EXERCISES.md` with hands-on tasks, and
sub-directories named by artifact reference (e.g. `m01l01-02/`).

## Lessons

| # | Lesson | Watch | Labs | Handbook |
|---|--------|-------|------|----------|
| | **React 19 Foundations & JSX Compilation** | | | |
| 1 | JSX Transpilation: createElement, JSX Runtime, React Elements | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m01l01) | [labs/m01l01/](labs/m01l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-1-1) |
| 2 | Component Purity: Pure Functions, Idempotence And Side Effects | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m01l02) | [labs/m01l02/](labs/m01l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-1-2) |
| 3 | Props Contract: Immutability, Children, And Polymorphic Tags | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m01l03) | [labs/m01l03/](labs/m01l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-1-3) |
| 4 | State with useState: Immutability And Asynchronous Batching | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m01l04) | [labs/m01l04/](labs/m01l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-1-4) |
| 5 | Complex State with useReducer: State Machines And Action Types | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m01l05) | [labs/m01l05/](labs/m01l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-1-5) |
| | **Reconciliation Engine And The React Fiber** | | | |
| 6 | Virtual DOM vs Real DOM: The Reconciliation Cost Model | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m02l01) | [labs/m02l01/](labs/m02l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-2-1) |
| 7 | React Fiber Architecture: Work Units, Priority And Commits | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m02l02) | [labs/m02l02/](labs/m02l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-2-2) |
| 8 | Keys In Depth: Identity Preservation And Identity Resetting | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m02l03) | [labs/m02l03/](labs/m02l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-2-3) |
| 9 | Diffing Algorithm: Element Type Shifts And Subtree Tear Down | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m02l04) | [labs/m02l04/](labs/m02l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-2-4) |
| 10 | SyntheticEvent System: Event Delegation in Modern React | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m02l05) | [labs/m02l05/](labs/m02l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-2-5) |
| | **Component Lifecycle, Effects And Refs** | | | |
| 11 | useEffect Lifecycle: Mount, Dependencies, And Cleanup Phases | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m03l01) | [labs/m03l01/](labs/m03l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-3-1) |
| 12 | Avoiding Effect Antipatterns: Derived State And Events | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m03l02) | [labs/m03l02/](labs/m03l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-3-2) |
| 13 | useLayoutEffect vs useEffect: Painting And Synchronous Reads | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m03l03) | [labs/m03l03/](labs/m03l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-3-3) |
| 14 | useRef Mechanics: DOM References And Mutable Persistent State | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m03l04) | [labs/m03l04/](labs/m03l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-3-4) |
| 15 | useImperativeHandle: Controlled Ref Forwarding Boundaries | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m03l05) | [labs/m03l05/](labs/m03l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-3-5) |
| | **State Sharing, Context And Composition** | | | |
| 16 | Lifting State Up: Colocation, Ownership, And Data Flow | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m04l01) | [labs/m04l01/](labs/m04l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-4-1) |
| 17 | useContext in Depth: Scoping, Consumer Subscription Costs | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m04l02) | [labs/m04l02/](labs/m04l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-4-2) |
| 18 | Compound Components: Inversion of Control with Context | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m04l03) | [labs/m04l03/](labs/m04l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-4-3) |
| 19 | Higher-Order Components And Render Props: Tradeoff Analysis | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m04l04) | [labs/m04l04/](labs/m04l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-4-4) |
| 20 | Slot Patterns And Headless UI Architecture in React | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m04l05) | [labs/m04l05/](labs/m04l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-4-5) |
| | **Custom Hooks And Behavioral Abstractions** | | | |
| 21 | Rules of Hooks: Call Order, Hook Lists, And Fiber Storage | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m05l01) | [labs/m05l01/](labs/m05l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-5-1) |
| 22 | Custom Hook Composition: Encapsulating Reactive Logic | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m05l02) | [labs/m05l02/](labs/m05l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-5-2) |
| 23 | useSyncExternalStore: Tearing-Free Store Subscriptions | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m05l03) | [labs/m05l03/](labs/m05l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-5-3) |
| 24 | Creating Event Listener Hooks with Clean Teardown Logic | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m05l04) | [labs/m05l04/](labs/m05l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-5-4) |
| 25 | useId: Generating Stable Accessible Form Element Identifiers | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m05l05) | [labs/m05l05/](labs/m05l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-5-5) |
| | **React 19 Actions, Transitions And Async** | | | |
| 26 | Concurrent Mode: Interruptible Work And Lane Priority | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m06l01) | [labs/m06l01/](labs/m06l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-6-1) |
| 27 | useTransition: Non-Blocking State Updates for Fluid UI | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m06l02) | [labs/m06l02/](labs/m06l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-6-2) |
| 28 | useActionState: Async Action Handlers And Pending States | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m06l03) | [labs/m06l03/](labs/m06l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-6-3) |
| 29 | useOptimistic: Instantaneous UI Updates with Rollback | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m06l04) | [labs/m06l04/](labs/m06l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-6-4) |
| 30 | The use() Hook: Reading Promises And Context Directly | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m06l05) | [labs/m06l05/](labs/m06l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-6-5) |
| | **Suspense, Streaming And Error Boundaries** | | | |
| 31 | Suspense Architecture: Promises, Fallbacks, And Co-ordination | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m07l01) | [labs/m07l01/](labs/m07l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-7-1) |
| 32 | Code-Splitting with React.lazy: Dynamic Imports And Chunks | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m07l02) | [labs/m07l02/](labs/m07l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-7-2) |
| 33 | Error Boundaries: componentDidCatch And Fallback UI Trees | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m07l03) | [labs/m07l03/](labs/m07l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-7-3) |
| 34 | React Portals: Escaping Stacking Contexts for Modals | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m07l04) | [labs/m07l04/](labs/m07l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-7-4) |
| 35 | Client-Side Data Fetching Architectures with Suspense | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m07l05) | [labs/m07l05/](labs/m07l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-7-5) |
| | **Performance Optimization & React Compiler** | | | |
| 36 | Render Diagnostics: Profiling Re-Renders with React DevTools | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m08l01) | [labs/m08l01/](labs/m08l01/) | [§](https://learnsome.tech/courses/react-course/book#lesson-8-1) |
| 37 | React.memo, useMemo, And useCallback: Optimization Costs | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m08l02) | [labs/m08l02/](labs/m08l02/) | [§](https://learnsome.tech/courses/react-course/book#lesson-8-2) |
| 38 | The React Compiler: Automated Memoization Under The Hood | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m08l03) | [labs/m08l03/](labs/m08l03/) | [§](https://learnsome.tech/courses/react-course/book#lesson-8-3) |
| 39 | Virtualization: Rendering Infinite Datasets Efficiently | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m08l04) | [labs/m08l04/](labs/m08l04/) | [§](https://learnsome.tech/courses/react-course/book#lesson-8-4) |
| 40 | Accessible Headless Primitives: ARIA, Focus, And Keyboard | [▶](https://learnsome.tech/courses/react-course/watch?lesson=m08l05) | [labs/m08l05/](labs/m08l05/) | [§](https://learnsome.tech/courses/react-course/book#lesson-8-5) |

## Exercises

Each lesson folder contains an `EXERCISES.md` with hands-on tasks drawn directly from the course material.
Open the file for a lesson to see the tasks and, where provided, hints.

---

© LearnSome.tech · support@iwantto.learnsome.tech
