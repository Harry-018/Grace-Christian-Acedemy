import { useState } from "react";
import { ProgressBar, NavButtons } from "./FormComponents";
import { Step1_StudentInfo, Step2_Guardian, Step3_Review } from "./Steps";

//  Initial States 

const initialStudent = {
  gradeLevel: "", lastName: "", firstName: "", middleName: "",
  dob: "", pob: "", religion: "", nationality: "", gender: "",
};

const initialAddress = {
  street: "", barangay: "", city: "", province: "", region: "", zip: "",
};

const initialGuardian = {
  fatherName: "", fatherOccupation: "", fatherContact: "", fatherEmail: "",
  motherName: "", motherOccupation: "", motherContact: "", motherEmail: "",
  guardianName: "", guardianRelation: "", guardianContact: "",
};

//  Success Screen 

const SuccessScreen = ({ onGoHome }) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="w-16 h-16 rounded-full bg-[#f0f3eb] flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-[#5C6B3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h2 className="text-lg font-bold text-[#3d4d20] mb-2">Form Submitted!</h2>
    <p className="text-sm text-gray-500 mb-8 px-4">
      Your enrollment form has been received. We'll get in touch with you soon.
    </p>
    <button
      onClick={onGoHome}
      className="px-6 py-3 rounded-xl bg-[#5C6B3A] text-white text-sm font-bold active:bg-[#3d4d20] transition"
    >
      Go to Homepage
    </button>
  </div>
);

//  MultiStep 

const TOTAL_STEPS = 3;

export default function MultiStep() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [student, setStudent]   = useState(initialStudent);
  const [address, setAddress]   = useState(initialAddress);
  const [guardian, setGuardian] = useState(initialGuardian);
  const [consent, setConsent]   = useState(false);

  const updateStudent  = (key, val) => setStudent((p)  => ({ ...p, [key]: val }));
  const updateAddress  = (key, val) => setAddress((p)  => ({ ...p, [key]: val }));
  const updateGuardian = (key, val) => setGuardian((p) => ({ ...p, [key]: val }));

  const handleNext  = () => step < TOTAL_STEPS ? setStep((s) => s + 1) : setSubmitted(true);
  const handlePrev  = () => setStep((s) => Math.max(1, s - 1));
  const handleGoHome = () => {
    setSubmitted(false);
    setStep(1);
    setStudent(initialStudent);
    setAddress(initialAddress);
    setGuardian(initialGuardian);
    setConsent(false);
  };

  const isNextDisabled =
    (step === 1 && !student.gradeLevel) ||
    (step === 3 && !consent);

  if (submitted) return <SuccessScreen onGoHome={handleGoHome} />;

  return (
    <>
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

      {step === 1 && (
        <Step1_StudentInfo
          student={student}
          address={address}
          onStudentChange={updateStudent}
          onAddressChange={updateAddress}
        />
      )}
      {step === 2 && <Step2_Guardian data={guardian} onChange={updateGuardian} />}
      {step === 3 && (
        <Step3_Review
          student={student}
          address={address}
          guardian={guardian}
          consent={consent}
          onConsentChange={setConsent}
        />
      )}

      <NavButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={step === 1}
        isLast={step === TOTAL_STEPS}
        isNextDisabled={isNextDisabled}
      />
    </>
  );
}