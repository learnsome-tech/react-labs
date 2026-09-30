# m06l05-02 · Use Hook Demo

**Lesson:** [The use() Hook: Reading Promises And Context Directly](https://learnsome.tech/learn/react-course/m06l05) (lesson 6.5, module 6: React 19 Actions, Transitions And Async) · Pro  
**Check:** Graded

## Goal

You can read Promises and React Context conditionally using the use API, integrating directly with Suspense and Error Boundaries.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/use_hook_demo.tsx`](starter/use_hook_demo.tsx): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l05/m06l05-02/starter`
2. Read `use_hook_demo.tsx`.
3. Run it: `tsx use_hook_demo.tsx`.
4. Check it from the repository root: `./check m06l05-02`.

## Expected output

```text
When false: Disabled
When true: Theme: emerald
```

## How to check

`./check m06l05-02` copies `starter/` into a scratch directory and runs `tsx use_hook_demo.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m06l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
