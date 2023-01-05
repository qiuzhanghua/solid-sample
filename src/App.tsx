import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
const Home = lazy(() => import("./pages/Home"));

export default function App () {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}
