# m08l01-02 · Profiler Demo

**Lesson:** [Render Diagnostics: Profiling Re-Renders with React DevTools](https://learnsome.tech/learn/react-course/m08l01) (lesson 8.1, module 8: Performance Optimization & React Compiler) · Pro  
**Check:** Graded

## Goal

You can profile React re-renders, interpret DevTools flamegraphs and commit phases, and diagnose wasted rendering cycles.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/profiler_demo.tsx`](starter/profiler_demo.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m08l01/m08l01-02/starter`
2. Read `profiler_demo.tsx`.
3. Run it: `tsx profiler_demo.tsx`.
4. Check it from the repository root: `./check m08l01-02`.

## Expected output

```text
Mount: app:mount
Update: app:update
Events: 2
```

## How to check

`./check m08l01-02` copies `starter/` into a scratch directory and runs `tsx profiler_demo.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m08l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
