import React from "react";

const MiniCard = ({ childActData }) => {
  return (
    <div className="flex overflow-hidden">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-x-5 overflow-x-auto px-5 py-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-5 lg:overflow-visible">
        {childActData.map((CActivity) => {
          return (
            <div className="flex min-h-40 max-w-105 min-w-80 snap-center flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med">
              <span className="flex flex-col gap-y-5">
                <h1 className="font-[PoppinsBold]">
                  {CActivity.activity_title}
                </h1>
                <p className="text-justify text-sm text-ashlight">
                  {CActivity.activity_description}
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCard;
