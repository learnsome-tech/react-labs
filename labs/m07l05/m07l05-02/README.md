# m07l05-02 · Suspense Fetch

**Lesson:** [Client-Side Data Fetching Architectures with Suspense](https://learnsome.tech/learn/react-course/m07l05) (lesson 7.5, module 7: Suspense, Streaming And Error Boundaries) · Pro  
**Check:** Graded

## Goal

You can contrast Fetch-on-Render with Render-as-You-Fetch architectures and implement cache-coordinated Suspense data fetching.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/suspense_fetch.tsx`](starter/suspense_fetch.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m07l05/m07l05-02/starter`
2. Read `suspense_fetch.tsx`.
3. Run it: `tsx suspense_fetch.tsx`.
4. Check it from the repository root: `./check m07l05-02`.

## Expected output

```text
Card: Payload: profile
Entries: 1
```

## How to check

`./check m07l05-02` copies `starter/` into a scratch directory and runs `tsx suspense_fetch.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m07l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
