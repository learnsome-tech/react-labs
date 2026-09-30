# m04l04-02 · Render Props

**Lesson:** [Higher-Order Components And Render Props: Tradeoff Analysis](https://learnsome.tech/learn/react-course/m04l04) (lesson 4.4, module 4: State Sharing, Context And Composition) · Pro  
**Check:** Graded

## Goal

You can compare HOCs and Render Props, analyze prop collision and wrapper hell tradeoffs, and migrate patterns to modern custom hooks.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/render_props.tsx`](starter/render_props.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l04/m04l04-02/starter`
2. Read `render_props.tsx`.
3. Run it: `tsx render_props.tsx`.
4. Check it from the repository root: `./check m04l04-02`.

## Expected output

```text
Before: Count: 0
After: Count: 1
```

## How to check

`./check m04l04-02` copies `starter/` into a scratch directory and runs `tsx render_props.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/react-course/m04l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
