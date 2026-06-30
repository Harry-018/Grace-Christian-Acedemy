import React from "react";
import MultiStep from "../Components/FormComponents/MultiStep";
 
export default function Form(){ 
  return (
    <div className="min-h-screen bg-[#F2F4EE] flex items-start justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-10xl bg-white rounded-3xl shadow-md p-5 md:p-8 lg:p-10 xl:p-12">
        <MultiStep />
      </div>
    </div>
  );
}