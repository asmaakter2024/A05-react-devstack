import type { Itechnology } from "../../types/technologyType";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

const AvailableStack = ({ technology }) => {
  console.log(technology, "technology from available stack");
  return (
    // <div className="grid grid-cols-4 gap-4">
    //   <div className="col-span-3 grid grid-cols-3 gap-4">
    //     {technology.map((tech: Itechnology, ind: number) => {
    //       return <TechCard key={ind} tech={tech} />;
    //     })}
    //     <div className="col-span-1">
    //       <YourStack />
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-4 gap-4">
      {/* Technology Cards */}
      <div className="col-span-3 grid grid-cols-3 gap-4">
        {technology.map((tech: Itechnology, ind: number) => {
          return <TechCard key={ind} tech={tech} />;
        })}
      </div>

      {/* Your Stack */}
      <div className="col-span-1">
        <YourStack />
      </div>
    </div>
  );
};

export default AvailableStack;
