const SyncLane = 0b0001;
const DefaultLane = 0b0010;
const TransitionLane = 0b0100;
function highestPriority(lanes: number): number {
  return lanes & -lanes;
}
let pending = 0;
function enqueue(lane: number) { pending |= lane; }
enqueue(TransitionLane);
enqueue(SyncLane);
enqueue(DefaultLane);
const first = highestPriority(pending);
pending &= ~first;
const second = highestPriority(pending);
pending &= ~second;
console.log(`First: ${first === SyncLane ? "Sync" : "Other"}`);
console.log(`Second: ${second === DefaultLane ? "Default" : "Other"}`);
console.log(`Remaining: ${pending}`);
