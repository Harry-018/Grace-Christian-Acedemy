import React from "react";

const GradeSelector = ({ feesData, selectedGrade, onSelectGrade }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="w-20 text-2xs md:w-25 md:text-sm lg:w-30 lg:text-lg">
        Select Level:
      </h3>
      <div className="flex">
        {feesData.map((fees, index) => {
          const isActive = selectedGrade === fees.grade_level;

          return (
            <button
              key={index}
              onClick={() => onSelectGrade(fees.grade_level)}
              className={`cursor-pointer p-2 text-2xs md:px-3 md:text-sm lg:px-4 lg:text-base${
                isActive
                  ? " rounded-2xl bg-swamp-green font-[PoppinsBold] text-bone inset-shadow-small"
                  : " text-ashlight"
              }`}
            >
              {fees.grade_level}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GradeSelector;
