import React from "react";

const MiniCard = ({ descri, icon, Stitle }) => {
  return (
    <div className="flex min-h-40 min-w-85 snap-center flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med">
      <span className="flex gap-x-3">
        <span className="text-swamp-green">{icon}</span>
        <h1 className="font-[PoppinsBold]">{Stitle}</h1>
      </span>
      <p className="text-justify text-sm text-ashlight">{descri}</p>
    </div>
  );
};

export default MiniCard;
