import {createSignal} from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  const Inc = () => setCount(count() + 1);
  return  (
    <button onClick={Inc}>{count()}</button>
  );
}
