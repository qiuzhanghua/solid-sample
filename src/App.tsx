import { Route, Routes } from "@solidjs/router";
// import { lazy } from "solid-js";
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </>
  );
}
