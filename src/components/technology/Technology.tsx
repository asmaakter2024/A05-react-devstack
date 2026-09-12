import { use, useState } from "react";
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

  const addToStack = (tech: Itechnology) => {
    setSelectedTechnologies((prev) => {
      // একই technology যেন একাধিকবার add না হয়
      const alreadyExists = prev.some((item) => item.id === tech.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, tech];
    });
  };

  const removeFromStack = (id: string) => {
    setSelectedTechnologies((prev) => prev.filter((tech) => tech.id !== id));
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">
          Explore the
          <span className="text-4xl font-bold bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-xl font-light mb-6">
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
