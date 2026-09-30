interface HookNode { val: any; next: HookNode | null; }
class FiberList {
  head: HookNode | null = null;
  curr: HookNode | null = null;
  step<T>(init: T): [T, (v: T) => void] {
    if (!this.curr) {
      const n: HookNode = { val: init, next: null };
      if (!this.head) this.head = n;
      else { let l = this.head; while (l.next) l = l.next; l.next = n; }
      return [n.val, (v) => { n.val = v; }];
    }
    const n = this.curr; this.curr = n.next;
    return [n.val, (v) => { n.val = v; }];
  }
}
const f = new FiberList();
const [, setA] = f.step(10);
const [, setB] = f.step("ok");
setA(25); f.curr = f.head;
const [vA] = f.step(0);
const [vB] = f.step("");
console.log(`Stored A: ${vA}, B: ${vB}`);
