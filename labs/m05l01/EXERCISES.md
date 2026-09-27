# Exercises — Rules of Hooks: Call Order, Hook Lists, And Fiber Storage

Lesson `m05l01` · [Watch](https://learnsome.tech/courses/react-course/watch?lesson=m05l01)

## Exercise 1: Refactor Conditional Hook Invocations

1. Identify an antipattern where useEffect is called inside an if block.
2. Move the hook invocation to the top level of the component.
3. Relocate the conditional check inside the effect body itself.
4. Verify that ESLint passes cleanly with zero hook violations.

> **Hint**: Call useEffect unconditionally and place if (!isEnabled) return inside it.


---

© LearnSome.tech · support@iwantto.learnsome.tech
