import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technology from "./components/technology/Technology";
import type { Itechnology } from "./types/technologyType";
import Footer from "./components/Footer";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};


function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technology technologyPromise={technologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
