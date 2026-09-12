import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technology from "./components/technology/Technology";
import type { Itechnology } from "./types/technologyType";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();

  // const [stack, setStack] = useState<Itechnology[]>([]);

  // // Add technology
  // const handleAddToStack = (technology: Itechnology) => {
  //   setStack((prev) => [...prev, technology]);
  // };

  // // Remove single technology
  // const handleRemoveFromStack = (id: string) => {
  //   setStack((prev) => prev.filter((tech) => tech.id !== id));
  // };

  // // Remove all
  // const handleRemoveAll = () => {
  //   setStack([]);
  // };

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technology
          technologyPromise={technologyPromise}
          // stack={stack}
          // onAddToStack={handleAddToStack}
          // onRemoveFromStack={handleRemoveFromStack}
          // onRemoveAll={handleRemoveAll}
        />
      </Suspense>
    </>
  );
}

export default App;
