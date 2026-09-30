function createSlotCache(size: number) {
  const slots: any[] = new Array(size);
  return (idx: number, compute: () => any, deps: any[]) => {
    const prev = slots[idx];
    if (prev && deps.every((d, i) => Object.is(d, prev.deps[i]))) {
      return prev.val;
    }
    const val = compute();
    slots[idx] = { val, deps };
    return val;
  };
}
const $ = createSlotCache(1);
let runs = 0;
function compute(n: number) {
  return $(0, () => { runs++; return n * 2; }, [n]);
}
const a = compute(5);
const b = compute(5);
console.log(`Result: ${a}`);
console.log(`Cached: ${a === b}`);
console.log(`Runs: ${runs}`);
