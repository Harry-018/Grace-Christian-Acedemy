import React from "react"

const StepCard = ({ step, title, description, Icon }) => {
  return (
    <div className="flex items-start gap-3 p-5">
      <div className="flex items-center justify-center p-5 rounded-full bg-swamp-green text-white">
        {Icon}
      </div>

      <div>
        <h2 className="font-[PoppinsBold] text-xs text-swamp-green">
         {step} {title}
        </h2>

        <p className="font-[Poppins] text-2xs">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard