import { createSignal } from "solid-js";

export default function Counter () {
  const cs = localStorage.getItem("savedCount") || "0";
  const c = parseInt(cs) || 0;
  const [count, setCount] = createSignal(c);
  const Inc = () => {
    setCount(count() + 1);
    localStorage.setItem("savedCount", count().toString());
  };
  return (
    <button
      type="button"
      onClick={Inc}
      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-6"
    >
      {count()}
    </button>
  );
}
