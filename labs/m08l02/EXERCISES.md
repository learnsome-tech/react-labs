# Exercises — React.memo, useMemo, And useCallback: Optimization Costs

Lesson `m08l02` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m08l02)

## Exercise 1: Fix Broken Memoization from Inline Objects

1. Inspect a memoized DataGrid receiving an inline filter configuration object.
2. Observe the DataGrid re-rendering on every parent state update.
3. Wrap the configuration object in useMemo with appropriate dependencies.
4. Verify the DataGrid skips re-rendering when unrelated state changes.

> **Hint**: Define const config = useMemo(() => ({ query, limit }), [query, limit]).


---

© LearnSome.tech · support@iwantto.learnsome.tech
