import { Counter } from "./counter";

export const App = () => {
  return (
    <>
      <div>
        <h1 class="text-3xl text-red-500 font-bold underline">
          Vite + TypeScript + SolidJS
        </h1>
        <div class="card">
          <Counter />
        </div>
      </div>
    </>
  );
};
