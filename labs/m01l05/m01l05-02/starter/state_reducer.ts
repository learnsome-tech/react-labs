type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string };
type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: string };
export function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START": return { status: "loading" };
    case "FETCH_SUCCESS": return { status: "success", data: action.payload };
  }
}
let current: State = { status: "idle" };
current = requestReducer(current, { type: "FETCH_START" });
console.log(`Loading state: ${current.status}`);
current = requestReducer(current, {
  type: "FETCH_SUCCESS", payload: "User Profile"
});
console.log(`Success state: ${current.status}`);
if (current.status === "success") console.log(`Data: ${current.data}`);
