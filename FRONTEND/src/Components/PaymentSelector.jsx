import React from "react";

const PaymentSelector = ({ paymethodData, selectedMethod, onSelectMethod }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="w-20 text-2xs md:w-25 md:text-sm lg:w-35 lg:text-lg">
        Select Option:
      </h3>
      <div className="flex">
        {paymethodData &&
          paymethodData.map((method, index) => {
            const isActive = selectedMethod === method.option;

            return (
              <button
                key={index}
                onClick={() => onSelectMethod(method.option)}
                className={`cursor-pointer p-2 text-2xs md:px-3 md:text-sm lg:px-4 lg:text-base${
                  isActive
                    ? " rounded-2xl bg-swamp-green font-[PoppinsBold] text-bone inset-shadow-small"
                    : " text-ashlight"
                }`}
              >
                {method.option}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default PaymentSelector;
