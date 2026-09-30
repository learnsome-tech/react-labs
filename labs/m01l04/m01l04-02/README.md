# m01l04-02 · State Batching

**Lesson:** [State with useState: Immutability And Asynchronous Batching](https://learnsome.tech/learn/react-course/m01l04) (lesson 1.4, module 1: React 19 Foundations & JSX Compilation) · Free  
**Check:** Graded

## Goal

You can manage component state immutably using useState and reason about React's asynchronous state snapshots and automatic batching.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/state_batching.tsx`](starter/state_batching.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l04/m01l04-02/starter`
2. Read `state_batching.tsx`.
3. Run it: `tsx state_batching.tsx`.
4. Check it from the repository root: `./check m01l04-02`.

## Expected output

```text
Rendered count: 2
```

## How to check

`./check m01l04-02` copies `starter/` into a scratch directory and runs `tsx state_batching.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m01l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
