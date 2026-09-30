# m05l02-02 · Custom Hook

**Lesson:** [Custom Hook Composition: Encapsulating Reactive Logic](https://learnsome.tech/learn/react-course/m05l02) (lesson 5.2, module 5: Custom Hooks And Behavioral Abstractions) · Pro  
**Check:** Graded

## Goal

You can compose multiple built-in hooks into clean, reusable custom hooks that encapsulate reactive state, effects, and business invariants.

## Files

- [`starter/custom_hook.tsx`](starter/custom_hook.tsx): the listing from the lesson
- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l02/m05l02-02/starter`
2. Read `custom_hook.tsx`.
3. Run it: `tsx custom_hook.tsx`.
4. Check it from the repository root: `./check m05l02-02`.

## Expected output

```text
Before: Val: 10
After: Val: 15
```

## How to check

`./check m05l02-02` copies `starter/` into a scratch directory and runs `tsx custom_hook.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m05l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
