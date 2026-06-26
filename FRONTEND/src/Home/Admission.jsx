import React from "react";
import { Link } from "react-router-dom";
import AdmissionCard from "../Components/AdmissionCard";
import { FileBadge, Camera, File, Form, Mail, BadgeCheck } from "lucide-react";
import StepCard from "../Components/StepCard.jsx";

const Admission = () => {
  return (
    <div className="flex flex-col items-center px-4 py-6 font-[Poppins] sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <h1 className="p-3 text-xl font-[PoppinsBold] text-swamp-green sm:text-2xl md:text-3xl lg:hidden">
          ADMISSION
        </h1>
        <p className="mt-3 text-center md:text-md lg:text-xl text-sm sm:text-base">
          Please prepare the following documents.
        </p>

        <div className="mt-6 flex flex-col-3 gap-4 sm:flex-row md:justify-center sm:justify-center sm:gap-6 text-swamp-green">
          <AdmissionCard Icon={<FileBadge size={70} />} Atitle={"PSA"} />
          <AdmissionCard Icon={<Camera size={70} />} Atitle={"2x2 ID Picture"} />
        </div>

        <h1 className="mt-10 lg:text-[40px] lg:mt-20 text-center md:text-[40px] text-lg font-[PoppinsBold] text-swamp-green sm:text-xl">
          ADMISSION PROCESS
        </h1>

        <div className="mx-auto mb-5 mt-5 flex w-full max-w-3xl flex-col rounded-2xl bg-bone p-3 sm:p-5">
          <p className="mt-2 p-2 text-center text-sm sm:p-4 sm:text-base">
            Please follow these simple steps to complete your admission application.
          </p>

          <StepCard
            Icon={<File size={18} />}
            title={"STEP 1: FILL OUT FORM"}
            description={"Complete the online application form"}
          />

          <StepCard
            Icon={<Mail size={18} />}
            title={"STEP 2: WAIT FOR EMAIL"}
            description={"Wait for confirmation message and date of submission"}
          />

          <StepCard
            Icon={<Form size={18} />}
            title={"STEP 3: REQUIREMENTS"}
            description={"The following requirements must be submitted"}
          />

          <StepCard
            Icon={<BadgeCheck size={18} />}
            title={"STEP 4: ENROLLMENT"}
            description={"Complete enrollment and become a part of Grace Christian Academy"}
          />
        </div>

        <Link
          to="/admission-form"
          className="mx-auto mb-8 flex h-12 w-full max-w-72 items-center justify-center rounded-xl bg-swamp-green px-4 font-[PoppinsBold] text-white transition hover:opacity-90"
        >
          FILL OUT FORM →
        </Link>
      </div>
    </div>
  );
};

export default Admission;
