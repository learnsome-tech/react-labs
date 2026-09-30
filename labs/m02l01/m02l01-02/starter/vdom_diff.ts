interface VNode { type: string; text: string; }
export function diffNodes(prev: VNode, next: VNode): string[] {
  const deltas: string[] = [];
  if (prev.type !== next.type) {
    deltas.push(`Replace <${prev.type}> with <${next.type}>`);
  } else if (prev.text !== next.text) {
    deltas.push(`Update text to "${next.text}"`);
  }
  return deltas;
}
const treeA: VNode = { type: "h1", text: "Alpha" };
const treeB: VNode = { type: "h1", text: "Beta" };
const patches = diffNodes(treeA, treeB);
console.log(`Nodes compared: 2`);
console.log(`Mutations required: ${patches.length}`);
console.log(`DOM Patch: ${patches[0]}`);
