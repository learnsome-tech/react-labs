# m06l02-02 · Transition Demo

**Lesson:** [useTransition: Non-Blocking State Updates for Fluid UI](https://learnsome.tech/learn/react-course/m06l02) (lesson 6.2, module 6: React 19 Actions, Transitions And Async) · Pro  
**Check:** Graded

## Goal

You can use useTransition to designate state transitions as non-blocking, handle isPending loading indicators, and keep typing inputs fluid.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/transition_demo.tsx`](starter/transition_demo.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l02/m06l02-02/starter`
2. Read `transition_demo.tsx`.
3. Run it: `tsx transition_demo.tsx`.
4. Check it from the repository root: `./check m06l02-02`.

## Expected output

```text
Term: beta
Status: ready
```

## How to check

`./check m06l02-02` copies `starter/` into a scratch directory and runs `tsx transition_demo.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m06l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
