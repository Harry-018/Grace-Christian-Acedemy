import React from "react";
import { Link } from "react-router-dom";
import AdmissionCard from "../Components/AdmissionCard";
import {FileBadge, Camera, File, Form, Mail, BadgeCheck} from "lucide-react";
import StepCard  from "../Components/StepCard.jsx"

const Admission = () => {
  return <div className="flex flex-col   font-[Poppins] ">
    <h1 className="font-[PoppinsBold] text-swamp-green p-3">ADMISSION</h1>
    <h1 className="text-center text-2xs mt-5">Please prepare the following documents.</h1>

    <div className="flex flex-col-2 p-2 gap-3 justify-center">
    <AdmissionCard
    Icon={<FileBadge size={80}/>}
    Atitle={"PSA"}
    />

    <AdmissionCard
    Icon={<Camera size={80}/>}
    Atitle={"2x2 ID Picture"}
    />
    </div>

    <h1 className="text-center font-[PoppinsBold] text-swamp-green mt-10">Admission Process</h1>

    <div className="flex flex-col rounded-2xl bg-bone h-full w-70 mb-5">
      <h1 className="text-2xs mt-2 p-4"> Please follow these simple steps to complete your admission of application</h1>

    <StepCard 
    Icon={<File size={20}/>}
    title={"STEP 1: FILL OUT FORM"}
    description={"Complete the online application form"}
    />

    <StepCard 
    Icon={<Mail size={20}/>}
    title={"STEP 2: WAIT FOR EMAIL"}
    description={"Wait for confirmation message and date of submission "}
    />

    <StepCard 
    Icon={<Form size={20}/>}
    title={"STEP 3: REQUIREMENTS"}
    description={"The following requirements must be submitted "}
    />

    <StepCard 
    Icon={<BadgeCheck size={20}/>}
    title={"STEP 4: ENROLLMENT"}
    description={"Complete enrollment and become a part of Grace Christian Academy"}
    />
</div>

  <Link
  to="/admission-form"
  className="flex w-70 h-10 items-center justify-center rounded-xl bg-swamp-green mb-8 font-[PoppinsBold] text-white"
>
  FILL OUT FORM → 
</Link>
  </div>;
};

export default Admission;
