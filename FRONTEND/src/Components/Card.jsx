import React from "react";

const Card = ({ Ctitle, Cage, Cdesc, Cimg }) => {
  return (
    <div className="flex max-h-80 min-h-75 max-w-70 min-w-60 snap-center flex-col gap-y-5 rounded-2xl bg-bone p-3 inset-shadow-med">
      <div className="relative w-full">
        <img src={Cimg} alt="" className="rounded-lg" />
        <div className="absolute inset-0 rounded-lg bg-black/30" />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-[PoppinsBold] text-base text-egg-dark">
          {Ctitle}
        </span>
        <span className="text-xs text-swamp-green">{Cage}</span>
      </div>
      <div>
        <p className="text-xs text-ashlight">{Cdesc}</p>
      </div>
    </div>
  );
};

export default Card;
