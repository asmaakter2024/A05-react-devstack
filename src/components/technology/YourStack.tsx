import type { Itechnology } from "../../types/technologyType";

interface YourStackProps {
  technologies: Itechnology[];
  removeTechnology: (id: string) => void;
  removeAll: () => void;
}

const YourStack = ({
  technologies,
  removeTechnology,
  removeAll,
}: YourStackProps) => {
  return (
    <div className="w-full max-w-[408px] rounded-[24px] border border-slate-100 bg-white p-[30px] shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[24px] font-bold  leading-8 text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[18px] font-normal text-slate-400">
          {technologies.length} Technology
          {technologies.length !== 1 ? "ies" : "y"} Selected
        </p>
      </div>

      {/* Technology List / Empty State */}

      {technologies.length === 0 ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-lg rounded-xl border p-3 border-slate-400 font-medium text-slate-400">
            YourStack is empty
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex h-[72px] items-center justify-between rounded-xl border border-slate-200 bg-white px-4"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <h3 className="text-[15px] font-semibold leading-5 text-slate-900">
                    {tech.name}
                  </h3>

                  <p className="text-[11px] font-medium text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeTechnology(tech.id)}
                className="flex h-8 w-8 items-center justify-center text-slate-400 transition hover:text-red-500"
                aria-label={`Remove ${tech.name}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}

      {technologies.length > 0 && (
        <button
          onClick={removeAll}
          className="mt-[69px] h-[45px] w-full rounded-xl border border-red-400 bg-white text-[20px] font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
