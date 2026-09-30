<p>
  <a href="https://learnsome.tech/courses/react-course">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/wordmark-inverse.svg">
      <img src=".github/assets/wordmark.svg" alt="LearnSome.tech" width="260">
    </picture>
  </a>
</p>

# React 19 & Modern Component Architecture

**Fiber Reconciliation, Hooks, Actions, Suspense & the React Compiler**

8 modules, 40 lessons: React 19 Foundations & JSX Compilation; Reconciliation Engine And The React Fiber; Component Lifecycle, Effects And Refs; State Sharing, Context And Composition; Custom Hooks And Behavioral Abstractions; React 19 Actions, Transitions And Async; Suspense, Streaming And Error Boundaries; Performance Optimization & React Compiler. Intermediate level, about 1 hour.

This repository holds the labs of the LearnSome.tech course [React 19 & Modern Component Architecture](https://learnsome.tech/courses/react-course): each lab's starter files, a README with the goal, the steps and the expected output, and `./check`, which tests your work the way the site does.

## Start

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/learnsome-tech/react-labs?quickstart=1)

- **Codespaces:** the badge opens this repository in a dev container with Node.js 24.21.0, as in the site's lab sandbox.
- **On your machine:**

  ```sh
  git clone https://github.com/learnsome-tech/react-labs.git
  cd react-labs
  npm ci
  ./check m01l01-02
  ```

  You need Node.js for `./check`, and for the labs themselves Node.js 24.21.0. Other versions mostly work, but only the sandbox's versions are sure to print what the site prints. VS Code's Dev Containers extension builds the same container as Codespaces (x86-64).

## Doing a lab

1. Open the lesson on LearnSome.tech and the lab folder beside it: `labs/<lesson>/<lab>/`. The lab README has the goal, the steps and the expected output.
2. Work in the lab's `starter/` folder.
3. From the repository root, run `./check <lab>` (for example `./check m01l01-02`), or `./check <lesson>` for all labs of a lesson, or `./check --all`. `./check --list` shows every lab and how it is checked.

`./check` runs your starter the way the site's lab sandbox does: in a scratch copy that is its working directory and `HOME`, with `LANG=C.UTF-8`, `TZ=UTC`, `input.txt` on standard input, 10 seconds and 256 KiB of output per stream. It then compares the output with the site's own rules, so a pass here is a pass on the site.

| Check | What `./check` does | Labs |
| --- | --- | --- |
| Graded | Runs the program and compares its output with `expected.txt`. | 38 |
| Read along | Nothing to run here: the site shows the listing read-only, and the lab README says honestly what it needs (Docker, a cluster, a cloud account...). | 2 |

## What is published, and what is not

Every lab's starter is the code the lesson shows on screen, which is also what the lab editor on the site opens with. Where that code is the whole program, such as a recorded shell session or a script from the video, it is published as it is: it is the lesson content. Nothing beyond the lesson is published. There are no reference solutions and no answers to the lesson exercises, and nothing the site keeps private.

Pro lessons' labs are here as starters too. LearnSome.tech runs and grades your labs in its sandbox, hosts the videos and keeps your progress; running and grading a Pro lab on the site needs Pro.

## Modules and lessons

### Module 1: React 19 Foundations & JSX Compilation

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 1.1 | [JSX Transpilation: createElement, JSX Runtime, React Elements](https://learnsome.tech/learn/react-course/m01l01) | [1 lab](labs/m01l01/) | Free |
| 1.2 | [Component Purity: Pure Functions, Idempotence And Side Effects](https://learnsome.tech/learn/react-course/m01l02) | [1 lab](labs/m01l02/) | Free |
| 1.3 | [Props Contract: Immutability, Children, And Polymorphic Tags](https://learnsome.tech/learn/react-course/m01l03) | [1 lab](labs/m01l03/) | Free |
| 1.4 | [State with useState: Immutability And Asynchronous Batching](https://learnsome.tech/learn/react-course/m01l04) | [1 lab](labs/m01l04/) | Free |
| 1.5 | [Complex State with useReducer: State Machines And Action Types](https://learnsome.tech/learn/react-course/m01l05) | [1 lab](labs/m01l05/) | Free |

### Module 2: Reconciliation Engine And The React Fiber

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 2.1 | [Virtual DOM vs Real DOM: The Reconciliation Cost Model](https://learnsome.tech/learn/react-course/m02l01) | [1 lab](labs/m02l01/) | Pro |
| 2.2 | [React Fiber Architecture: Work Units, Priority And Commits](https://learnsome.tech/learn/react-course/m02l02) | [1 lab](labs/m02l02/) | Pro |
| 2.3 | [Keys In Depth: Identity Preservation And Identity Resetting](https://learnsome.tech/learn/react-course/m02l03) | [1 lab](labs/m02l03/) | Pro |
| 2.4 | [Diffing Algorithm: Element Type Shifts And Subtree Tear Down](https://learnsome.tech/learn/react-course/m02l04) | [1 lab](labs/m02l04/) | Pro |
| 2.5 | [SyntheticEvent System: Event Delegation in Modern React](https://learnsome.tech/learn/react-course/m02l05) | [1 lab](labs/m02l05/) | Pro |

### Module 3: Component Lifecycle, Effects And Refs

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 3.1 | [useEffect Lifecycle: Mount, Dependencies, And Cleanup Phases](https://learnsome.tech/learn/react-course/m03l01) | [1 lab](labs/m03l01/) | Pro |
| 3.2 | [Avoiding Effect Antipatterns: Derived State And Events](https://learnsome.tech/learn/react-course/m03l02) | [1 lab](labs/m03l02/) | Pro |
| 3.3 | [useLayoutEffect vs useEffect: Painting And Synchronous Reads](https://learnsome.tech/learn/react-course/m03l03) | [1 lab](labs/m03l03/) | Pro |
| 3.4 | [useRef Mechanics: DOM References And Mutable Persistent State](https://learnsome.tech/learn/react-course/m03l04) | [1 lab](labs/m03l04/) | Pro |
| 3.5 | [useImperativeHandle: Controlled Ref Forwarding Boundaries](https://learnsome.tech/learn/react-course/m03l05) | [1 lab](labs/m03l05/) | Pro |

### Module 4: State Sharing, Context And Composition

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 4.1 | [Lifting State Up: Colocation, Ownership, And Data Flow](https://learnsome.tech/learn/react-course/m04l01) | [1 lab](labs/m04l01/) | Pro |
| 4.2 | [useContext in Depth: Scoping, Consumer Subscription Costs](https://learnsome.tech/learn/react-course/m04l02) | [1 lab](labs/m04l02/) | Pro |
| 4.3 | [Compound Components: Inversion of Control with Context](https://learnsome.tech/learn/react-course/m04l03) | [1 lab](labs/m04l03/) | Pro |
| 4.4 | [Higher-Order Components And Render Props: Tradeoff Analysis](https://learnsome.tech/learn/react-course/m04l04) | [1 lab](labs/m04l04/) | Pro |
| 4.5 | [Slot Patterns And Headless UI Architecture in React](https://learnsome.tech/learn/react-course/m04l05) | [1 lab](labs/m04l05/) | Pro |

### Module 5: Custom Hooks And Behavioral Abstractions

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 5.1 | [Rules of Hooks: Call Order, Hook Lists, And Fiber Storage](https://learnsome.tech/learn/react-course/m05l01) | [1 lab](labs/m05l01/) | Pro |
| 5.2 | [Custom Hook Composition: Encapsulating Reactive Logic](https://learnsome.tech/learn/react-course/m05l02) | [1 lab](labs/m05l02/) | Pro |
| 5.3 | [useSyncExternalStore: Tearing-Free Store Subscriptions](https://learnsome.tech/learn/react-course/m05l03) | [1 lab](labs/m05l03/) | Pro |
| 5.4 | [Creating Event Listener Hooks with Clean Teardown Logic](https://learnsome.tech/learn/react-course/m05l04) | [1 lab](labs/m05l04/) | Pro |
| 5.5 | [useId: Generating Stable Accessible Form Element Identifiers](https://learnsome.tech/learn/react-course/m05l05) | [1 lab](labs/m05l05/) | Pro |

### Module 6: React 19 Actions, Transitions And Async

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 6.1 | [Concurrent Mode: Interruptible Work And Lane Priority](https://learnsome.tech/learn/react-course/m06l01) | [1 lab](labs/m06l01/) | Pro |
| 6.2 | [useTransition: Non-Blocking State Updates for Fluid UI](https://learnsome.tech/learn/react-course/m06l02) | [1 lab](labs/m06l02/) | Pro |
| 6.3 | [useActionState: Async Action Handlers And Pending States](https://learnsome.tech/learn/react-course/m06l03) | [1 lab](labs/m06l03/) | Pro |
| 6.4 | [useOptimistic: Instantaneous UI Updates with Rollback](https://learnsome.tech/learn/react-course/m06l04) | [1 lab](labs/m06l04/) | Pro |
| 6.5 | [The use() Hook: Reading Promises And Context Directly](https://learnsome.tech/learn/react-course/m06l05) | [1 lab](labs/m06l05/) | Pro |

### Module 7: Suspense, Streaming And Error Boundaries

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 7.1 | [Suspense Architecture: Promises, Fallbacks, And Co-ordination](https://learnsome.tech/learn/react-course/m07l01) | [1 lab](labs/m07l01/) | Pro |
| 7.2 | [Code-Splitting with React.lazy: Dynamic Imports And Chunks](https://learnsome.tech/learn/react-course/m07l02) | [1 lab](labs/m07l02/) | Pro |
| 7.3 | [Error Boundaries: componentDidCatch And Fallback UI Trees](https://learnsome.tech/learn/react-course/m07l03) | [1 lab](labs/m07l03/) | Pro |
| 7.4 | [React Portals: Escaping Stacking Contexts for Modals](https://learnsome.tech/learn/react-course/m07l04) | [1 lab](labs/m07l04/) | Pro |
| 7.5 | [Client-Side Data Fetching Architectures with Suspense](https://learnsome.tech/learn/react-course/m07l05) | [1 lab](labs/m07l05/) | Pro |

### Module 8: Performance Optimization & React Compiler

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 8.1 | [Render Diagnostics: Profiling Re-Renders with React DevTools](https://learnsome.tech/learn/react-course/m08l01) | [1 lab](labs/m08l01/) | Pro |
| 8.2 | [React.memo, useMemo, And useCallback: Optimization Costs](https://learnsome.tech/learn/react-course/m08l02) | [1 lab](labs/m08l02/) | Pro |
| 8.3 | [The React Compiler: Automated Memoization Under The Hood](https://learnsome.tech/learn/react-course/m08l03) | [1 lab](labs/m08l03/) | Pro |
| 8.4 | [Virtualization: Rendering Infinite Datasets Efficiently](https://learnsome.tech/learn/react-course/m08l04) | [1 lab](labs/m08l04/) | Pro |
| 8.5 | [Accessible Headless Primitives: ARIA, Focus, And Keyboard](https://learnsome.tech/learn/react-course/m08l05) | [1 lab](labs/m08l05/) | Pro |

**Free** lessons are open to anyone with a free LearnSome.tech account; **Pro** lessons need a Pro membership to watch, run and grade on the site.

## Licence

- **Code** (starter files, `check` and `.learnsome/`, the dev container and the workflows) is under the [MIT licence](LICENSE).
- **Written text** (the READMEs, lab instructions, lesson text, exercises and questions) is under [CC BY-NC-SA 4.0](LICENSE-text.md): share and adapt it with attribution to LearnSome.tech, not commercially, under the same licence.
- The LearnSome.tech name and logo are not covered by either licence.

## Contributing and security

This repository is generated from the course. Report a broken lab or a content error [as an issue](../../issues/new/choose); see [CONTRIBUTING.md](CONTRIBUTING.md). Security reports go to [SECURITY.md](SECURITY.md).

© 2026 LearnSome.tech
