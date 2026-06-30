import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GradeSelector from "../Components/GradeSelector";
import PaymentSelector from "../Components/PaymentSelector";

const TuitionPage = () => {
  const { feesData, paymethodData } = useLoaderData();

  const [gradeLevel, setGradeLevel] = useState(
    feesData?.[0]?.grade_level || "",
  );
  const [payMethod, setPayMethod] = useState(paymethodData?.[0]?.option || "");

  const selectedFees = feesData.find((fees) => fees.grade_level === gradeLevel);

  const selectedPayMethod = paymethodData?.find(
    (paymethod) => paymethod.option === payMethod,
  );

  const subtotalboys = selectedFees
    ? Number(selectedFees.tuition_fee || 0) +
      Number(selectedFees.miscel_fee || 0) +
      Number(selectedFees.books || 0) +
      Number(selectedFees.uniform_boys || 0) +
      Number(selectedFees.pe_uniform_boys || 0)
    : 0;
  const subtotalgirls = selectedFees
    ? Number(selectedFees.tuition_fee || 0) +
      Number(selectedFees.miscel_fee || 0) +
      Number(selectedFees.books || 0) +
      Number(selectedFees.uniform_girls || 0) +
      Number(selectedFees.pe_uniform_girls || 0)
    : 0;

  const discountPercent = Number(selectedPayMethod?.discount || 0) / 100;
  const discountedGirls = subtotalgirls * discountPercent;
  const discountedBoys = subtotalboys * discountPercent;

  const formatCurrency = (amount) => {
    return Number(amount || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="flex w-80 flex-col gap-y-10 p-5 xs:w-100 md:w-150 md:gap-y-8 md:p-8 lg:w-full lg:flex-row lg:gap-x-12">
      <div className="flex flex-col gap-y-5 md:gap-y-8">
        <h1 className="font-[PoppinsBold] text-sm text-swamp-green md:text-lg lg:text-2xl">
          FEES
        </h1>
        <div className="flex flex-col gap-y-3">
          <GradeSelector
            feesData={feesData}
            selectedGrade={gradeLevel}
            onSelectGrade={setGradeLevel}
          />
          {selectedFees ? (
            <div className="min-w-70 items-center rounded-2xl bg-bone p-5 text-sm inset-shadow-med lg:p-8 xl:w-150">
              <div className="flex flex-col gap-y-5">
                {/* tuition fee */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      Tuition Fee
                    </h1>
                    <h3 className="text-2xs text-ashlight md:text-xs lg:text-base">
                      One-time /per semester
                    </h3>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.tuition_fee)}
                  </span>
                </div>

                {/* miscellaneous fee */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      Miscellaneous Fee
                    </h1>
                    <h3 className="text-2xs text-ashlight md:text-xs lg:text-base">
                      One-time /per semester
                    </h3>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.miscel_fee)}
                  </span>
                </div>

                {/* books */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">Books</h1>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.books)}
                  </span>
                </div>

                {/* uniform boys */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      Uniform (Boys)
                    </h1>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.uniform_boys)}
                  </span>
                </div>

                {/* pe uniform boys */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      P.E Uniform (Boys)
                    </h1>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.pe_uniform_boys)}
                  </span>
                </div>

                {/* uniform girls */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      Uniform (Girls)
                    </h1>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.uniform_girls)}
                  </span>
                </div>

                {/* pe uniform girls */}
                <div className="flex items-center justify-between border-b border-b-ashlight/50 pb-5">
                  <span>
                    <h1 className="text-xs md:text-sm lg:text-lg">
                      P.E Uniform (Girls)
                    </h1>
                  </span>
                  <span className="font-sans font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱ {formatCurrency(selectedFees.pe_uniform_girls)}
                  </span>
                </div>

                {/* subtotal row */}
                <div className="flex items-center justify-between pt-2">
                  <span>
                    <h1 className="text-sm text-swamp-green md:text-base lg:text-xl">
                      Subtotal:
                    </h1>
                  </span>
                  <span className="font-sans text-sm font-extrabold text-swamp-green md:text-lg lg:text-xl">
                    ₱{formatCurrency(subtotalgirls)} - ₱
                    {formatCurrency(subtotalboys)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-5 text-xs text-ashlight">
              No fee data found for this grade level.
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-5 md:gap-y-8">
        <h1 className="font-[PoppinsBold] text-sm text-swamp-green md:text-lg lg:text-2xl">
          Payment Method
        </h1>

        <div className="flex flex-col gap-y-3">
          <PaymentSelector
            paymethodData={paymethodData}
            selectedMethod={payMethod}
            onSelectMethod={setPayMethod}
          />
          {selectedPayMethod ? (
            <div className="flex flex-col gap-y-3 rounded-2xl bg-bone p-5 inset-shadow-med md:gap-y-5 lg:gap-y-8 lg:p-8 xl:w-150">
              <span className="text-xs text-ashlight md:text-sm lg:text-base">
                {selectedPayMethod.explaination}
              </span>
              <div className="flex items-center justify-between py-2">
                <span>
                  <h1 className="text-sm text-swamp-green md:text-base lg:text-xl">
                    Total:
                  </h1>
                </span>

                <span className="font-sans text-sm font-extrabold text-swamp-green md:text-lg lg:text-xl">
                  ₱{formatCurrency(subtotalgirls - discountedGirls)} - ₱
                  {formatCurrency(subtotalboys - discountedBoys)}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-5 text-xs text-ashlight">
              no payment method for this transaction
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TuitionPage;
