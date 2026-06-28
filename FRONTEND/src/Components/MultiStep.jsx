import React from "react";

const MultiStep = ({ steps, activeStep, onStepClick }) => {
  return (
    <div className="mb-6 rounded-3xl border border-gray-200 bg-white px-4 py-4 shadow-sm sm:px-5">
      <div className="flex items-center gap-3 overflow-x-auto pb-1">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          return (
            <button
              type="button"
              key={step.label}
              onClick={() => onStepClick?.(index)}
              className="min-w-[4.5rem] text-left"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                  isActive
                    ? "border-swamp-green bg-swamp-green text-white"
                    : "border-gray-200 bg-white text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <p className={`mt-2 text-[11px] ${isActive ? "text-swamp-green" : "text-gray-400"}`}>
                {step.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MultiStep;
