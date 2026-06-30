import React from "react";

const Card = ({ CardData, Cimg }) => {
  return (
    <div className="flex gap-x-5">
      {CardData.map((Card, index) => {
        return (
          <div
            key={index}
            className="relative flex min-h-80 min-w-60 snap-center flex-col justify-end overflow-hidden rounded-2xl p-5 text-bone inset-shadow-med duration-300 hover:scale-105 lg:h-90 lg:w-75"
            style={{
              backgroundImage: `url(${Cimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-egg-dark" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <span className="font-[PoppinsBold] text-base lg:text-xl">
                  {Card.program}
                </span>

                <span className="text-xs text-bone lg:text-base">
                  {Card.ages} Years Old
                </span>
              </div>

              <p className="text-xs lg:text-sm">{Card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
