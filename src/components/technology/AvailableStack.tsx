import type { Itechnology } from "../../types/technologyType";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

interface AvailableStackProps {
  technology: Itechnology[];
  selectedTechnologies: Itechnology[];
  addToStack: (tech: Itechnology) => void;
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const AvailableStack = ({
  technology,
  selectedTechnologies,
  addToStack,
  removeFromStack,
  removeAll,
}: AvailableStackProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Available Technologies */}
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {technology.map((tech) => {
          const isSelected = selectedTechnologies.some(
            (item) => item.id === tech.id,
          );

          return (
            <TechCard
              key={tech.id}
              tech={tech}
              addToStack={addToStack}
              isSelected={isSelected}
            />
          );
        })}
      </div>

      {/* Your Stack */}
      <div className="col-span-1">
        <YourStack
          technologies={selectedTechnologies}
          removeTechnology={removeFromStack}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
};

export default AvailableStack;
