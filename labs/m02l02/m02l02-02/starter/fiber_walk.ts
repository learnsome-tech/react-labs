interface Fiber {
  tag: string; child?: Fiber; sibling?: Fiber; return?: Fiber;
}
export function walkFiber(root: Fiber): string[] {
  const log: string[] = [];
  let curr: Fiber | undefined = root;
  while (curr) {
    log.push(curr.tag);
    if (curr.child) { curr = curr.child; continue; }
    while (curr && !curr.sibling) curr = curr.return;
    curr = curr ? curr.sibling : undefined;
  }
  return log;
}
const nav: Fiber = { tag: "nav" };
const main: Fiber = { tag: "main" };
const app: Fiber = { tag: "app", child: nav };
nav.sibling = main; nav.return = app; main.return = app;
const seq = walkFiber(app);
console.log(`Visited sequence: ${seq.join(" -> ")}`);
console.log(`Total units processed: ${seq.length}`);
