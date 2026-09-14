import { use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Itechnology } from "../../types/technologyType";
import AvailableStack from "./AvailableStack";

interface TechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Itechnology[]
  >([]);

  // Add technology
  const addToStack = (tech: Itechnology) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === tech.id,
    );

    if (alreadyExists) {
      return;
    }

    setSelectedTechnologies((prev) => [...prev, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove single technology
  const removeFromStack = (id: string) => {
    const updatedStack = selectedTechnologies.filter((tech) => tech.id !== id);

    setSelectedTechnologies(updatedStack);

    if (selectedTechnologies.length === 1) {
      toast.info("Stack is removed");
    }
  };

  // Remove all technologies
  const removeAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("Stack is removed");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-4xl font-bold text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mb-10 text-xl font-light">
          Pick one technology per category to build your ideal stack.
        </p>

        <AvailableStack
          technology={technology}
          selectedTechnologies={selectedTechnologies}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
};

export default Technology;
