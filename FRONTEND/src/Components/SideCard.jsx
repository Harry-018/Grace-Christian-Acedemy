import React from "react";

const SideCard = ({ Icon, Title }) => {
  return (
    <div className="flex h-25 w-full flex-col items-center justify-center gap-y-3 rounded-2xl bg-bone inset-shadow-med md:h-full md:w-40">
      <span>{Icon}</span>
      <h1 className="text-sm">{Title}</h1>
    </div>
  );
};

export default SideCard;
