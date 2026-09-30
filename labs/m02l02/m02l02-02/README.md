# m02l02-02 · Fiber Walk

**Lesson:** [React Fiber Architecture: Work Units, Priority And Commits](https://learnsome.tech/learn/react-course/m02l02) (lesson 2.2, module 2: Reconciliation Engine And The React Fiber) · Pro  
**Check:** Graded

## Goal

You can explain the React Fiber data structure, incremental time-sliced work loop, and double-buffering architecture.

## Files

- [`starter/fiber_walk.ts`](starter/fiber_walk.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l02/m02l02-02/starter`
2. Read `fiber_walk.ts`.
3. Run it: `node fiber_walk.ts`.
4. Check it from the repository root: `./check m02l02-02`.

## Expected output

```text
Visited sequence: app -> nav -> main
Total units processed: 3
```

## How to check

`./check m02l02-02` copies `starter/` into a scratch directory and runs `node fiber_walk.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m02l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
