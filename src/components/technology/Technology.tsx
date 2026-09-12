import React, { use } from "react";
import type { Itechnology } from "../../types/technologyType";
import AvailableStack from "./AvailableStack";

interface technologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technology = ({ technologyPromise }: technologyProps) => {
  console.log(technologyPromise);

  const technology = use(technologyPromise);
  //console.log(technology, "technology");
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">
          Explore the
          <span className="text-4xl font-bold bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-xl font-light">
          Pick one technology per category to build your ideal stack.
        </p>

        <AvailableStack technology={technology} />
      </div>
    </div>
  );
};

export default Technology;
