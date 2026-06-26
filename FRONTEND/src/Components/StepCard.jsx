import React from "react";

const StepCard = ({ step, title, description, Icon }) => {
  return (
    <div className="flex items-start gap-3 rounded-xl p-3 sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-swamp-green text-white sm:h-12 sm:w-12">
        {Icon}
      </div>

      <div className="min-w-0">
        <h2 className="font-[PoppinsBold] md:text-[20px] lg:text-[20px] text-[11px] text-swamp-green sm:text-xs">
          {step} {title}
        </h2>

        <p className="font-[Poppins] md:text-[15px] lg:text-[15px] text-2xs sm:text-2xs">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;