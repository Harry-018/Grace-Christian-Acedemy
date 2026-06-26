import React from "react";

const AdmissionCard = ({ Icon, Atitle }) => {
  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center gap-3 rounded-xl bg-bone p-5 text-center font-[Poppins] shadow-sm sm:w-56 md:w-60">
      <div className="flex h-16 w-16 items-center justify-center text-swamp-green sm:h-20 sm:w-20">
        {Icon}
      </div>

      <span className="text-sm sm:text-base">{Atitle}</span>
    </div>
  );
};

export default AdmissionCard;