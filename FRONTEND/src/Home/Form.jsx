import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiStep from "../Components/MultiStep";

const steps = [
  {
    label: "Student",
    title: "Student information",
    fields: [
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "firstName", label: "First Name", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date" },
    ],
  },
  {
    label: "Contact",
    title: "Phone and email",
    fields: [
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "09XX XXX XXXX" },
      { name: "email", label: "Email Address", type: "email", placeholder: "name@example.com" },
    ],
  },
  {
    label: "Address",
    title: "Home address",
    fields: [
      { name: "street", label: "Street / Barangay", type: "text" },
      { name: "city", label: "City / Municipality", type: "text" },
    ],
  },
  {
    label: "Enrollment",
    title: "Enrollment details",
    fields: [
      { name: "grade", label: "Grade Level", type: "text" },
      { name: "program", label: "Program", type: "text" },
    ],
  },
  {
    label: "Review",
    title: "Review and submit",
    fields: [],
  },
];

const Form = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(
    useMemo(() => {
      return steps.reduce((acc, step) => {
        step.fields.forEach((field) => {
          acc[field.name] = "";
        });
        return acc;
      }, {});
    }, []),
  );

  const step = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => {
    if (!isLastStep) setActiveStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLastStep) {
      console.log("formData", formData);
      alert("Form submitted. Phone setup ready.");
      navigate("/admission");
    } else {
      goNext();
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-4xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-2 text-2xl font-[PoppinsBold] text-swamp-green">Admission Form</h1>
        <p className="mb-6 text-sm text-gray-600">Follow the 5 steps below. This form is built with reusable step data and a shared MultiStep component.</p>

        <MultiStep steps={steps} activeStep={activeStep} onStepClick={setActiveStep} />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-[PoppinsBold] text-swamp-green">{step.title}</p>
                <p className="text-xs text-gray-500">Step {activeStep + 1} of {steps.length}</p>
              </div>
            </div>

            {step.fields.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {step.fields.map((field) => (
                  <label key={field.name} className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      placeholder={field.placeholder || ""}
                      onChange={(event) => updateField(field.name, event.target.value)}
                      className="w-full rounded-2xl border border-gray-200 bg-egg px-4 py-3 text-sm text-egg-dark outline-none transition focus:border-swamp-green focus:ring-2 focus:ring-swamp-green/10"
                    />
                  </label>
                ))}
              </div>
            ) : (
              <div className="space-y-3 rounded-3xl border border-gray-100 bg-egg px-5 py-5 text-sm text-gray-700">
                <p className="font-[PoppinsBold] text-swamp-green">Please confirm your details:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="rounded-2xl bg-white p-3 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">{key.replace(/([A-Z])/g, " $1")}</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">{value || "—"}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={activeStep === 0}
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-700 transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              Prev
            </button>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-swamp-green px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
