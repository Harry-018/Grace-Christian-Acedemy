import React from "react";
import TransopoCard from "../Components/TransopoCard";

const TransportationPage = () => {
  return (
    <div>
      {/* upperdiv */}
      <div className="flex flex-col gap-y-5 p-5">
        <h1 className="font-[PoppinsBold] text-swamp-green">Transportation</h1>
        <span className="flex w-full justify-between gap-x-5 rounded-2xl bg-bone p-5 text-xs text-ashlight inset-shadow-med">
          <h2>Pickup and drop-off included</h2>
          <span className="w-0.5 bg-ashlight"></span>
          <h2>Scheduled twice a day</h2>
        </span>

        {/* lowerdive */}
        <div>
          <TransopoCard />
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
