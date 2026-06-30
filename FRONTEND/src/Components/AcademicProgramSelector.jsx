import React from "react";

const AcademicProgramSelector = ({
  programData,
  selectedProgram,
  onSelectProgram,
}) => {
  return (
    <div className="flex justify-between gap-y-3">
      <div className="no-scrollbar flex gap-x-5 overflow-x-auto">
        {programData.map((program, index) => {
          const isActive = selectedProgram === program.program;

          return (
            <button
              key={index}
              onClick={() => onSelectProgram(program.program)}
              className={`cursor-pointer text-xs md:text-sm ${
                isActive ? "border-b text-swamp-green" : "text-ashlight"
              } pb-2`}
            >
              {program.program}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AcademicProgramSelector;
