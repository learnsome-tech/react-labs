// React 19 & Modern Component Architecture — lesson m08l04 — Virtualization: Rendering Infinite Datasets Efficiently
// https://learnsome.tech/courses/react-course/watch?lesson=m08l04
// © LearnSome.tech
interface VirtualConfig {
  total: number; itemH: number; viewH: number; scroll: number;
}
function getVirtualWindow(cfg: VirtualConfig) {
  const start = Math.max(0, Math.floor(cfg.scroll / cfg.itemH) - 1);
  const end = Math.min(
    cfg.total - 1, Math.floor((cfg.scroll + cfg.viewH) / cfg.itemH) + 1
  );
  return { start, end, totalH: cfg.total * cfg.itemH, count: end - start + 1 };
}
const win = getVirtualWindow({
  total: 10000, itemH: 40, viewH: 200, scroll: 400
});
console.log(`Total height: ${win.totalH}`);
console.log(`Start index: ${win.start}`);
console.log(`End index: ${win.end}`);
console.log(`DOM node count: ${win.count}`);
