import type { Itechnology } from "../../types/technologyType";
import { FaStar } from "react-icons/fa";
// interface TechCardProps {
//   tech: Itechnology;
//   onAddToStack: (technology: Itechnology) => void;
// }

const TechCard = ({ tech }) => {
  return (
    <div className="container max-auto mb-16 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="h-12 w-12" />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-lg font-medium text-sky-500">
          {tech.badge}
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-[18px] font-bold text-slate-900">{tech.name}</h2>

        <p className="mt-3 text-[12px] leading-9 text-slate-500">
          {tech.description}
        </p>
      </div>

      <div className="my-7 h-px bg-slate-100"></div>

      <div className="flex items-center justify-between gap-4">
        <span className="rounded-lg bg-slate-100 px-4 py-2 text-lg text-slate-600">
          {tech.category}
        </span>

        <span className="text-lg text-slate-500">{tech.difficulty}</span>

        <div className="flex items-center gap-2 text-lg text-slate-600">
          <FaStar className="text-yellow-400" />
          <span>{tech.rating}</span>
        </div>
      </div>
 
      <button 
      // onClick={() => onAddToStack(tech)}
      className="mt-7 w-full rounded-xl bg-slate-950 py-4 text-lg font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
