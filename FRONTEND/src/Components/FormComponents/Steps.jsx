import React from "react";
import { TextInput, DateInput, RadioGroup, SelectInput, StepHeader, ReviewSection, FieldRow, Checkbox } from "./FormComponents";

const GRADE_OPTIONS = [
  { label: "Nursery", value: "Nursery" },
  { label: "Pre-Kinder", value: "Pre-Kinder" },
  { label: "Kinder", value: "Kinder" },
];

const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const REGION_OPTIONS = [
  { label: "NCR – National Capital Region", value: "NCR" },
  { label: "Region III – Central Luzon", value: "Region III" },
  { label: "Region IV-A – CALABARZON", value: "Region IV-A" },
  { label: "Region VII – Central Visayas", value: "Region VII" },
  { label: "Region XI – Davao Region", value: "Region XI" },
];

const RELATION_OPTIONS = [
  { label: "Grandparent", value: "Grandparent" },
  { label: "Aunt / Uncle", value: "Aunt/Uncle" },
  { label: "Sibling", value: "Sibling" },
  { label: "Other", value: "Other" },
];

const SectionLabel = ({ title }) => (
  <p className="text-2xs font-bold uppercase tracking-widest text-[#7A8C4E] mb-3">{title}</p>
);

//  Step 1: Student Information + Address 

export const Step1_StudentInfo = ({ student, address, onStudentChange, onAddressChange }) => (
  <>
    <StepHeader number={1} title="Student & Address Information" />

    <SectionLabel title="Student Information" />
    <RadioGroup label="Grade Level" options={GRADE_OPTIONS} value={student.gradeLevel} onChange={(v) => onStudentChange("gradeLevel", v)} required />

    <FieldRow>
      <TextInput label="Last Name" value={student.lastName} onChange={(v) => onStudentChange("lastName", v)} required />
      <TextInput label="First Name" value={student.firstName} onChange={(v) => onStudentChange("firstName", v)} required />
      <TextInput label="Middle Name" value={student.middleName} onChange={(v) => onStudentChange("middleName", v)} />
    </FieldRow>

    <FieldRow>
      <DateInput label="Date of Birth" value={student.dob} onChange={(v) => onStudentChange("dob", v)} required />
      <TextInput label="Place of Birth" value={student.pob} onChange={(v) => onStudentChange("pob", v)} />
    </FieldRow>

    <FieldRow>
      <TextInput label="Religion" value={student.religion} onChange={(v) => onStudentChange("religion", v)} />
      <TextInput label="Nationality" value={student.nationality} onChange={(v) => onStudentChange("nationality", v)} />
    </FieldRow>

    <RadioGroup label="Gender" options={GENDER_OPTIONS} value={student.gender} onChange={(v) => onStudentChange("gender", v)} required />

    <div className="border-t border-dashed border-gray-200 my-5" />

    <SectionLabel title="Address Information" />
    <TextInput label="House No. / Street" value={address.street} onChange={(v) => onAddressChange("street", v)} required />

    <FieldRow>
      <TextInput label="Barangay" value={address.barangay} onChange={(v) => onAddressChange("barangay", v)} required />
      <TextInput label="City / Municipality" value={address.city} onChange={(v) => onAddressChange("city", v)} required />
    </FieldRow>

    <FieldRow>
      <TextInput label="Province" value={address.province} onChange={(v) => onAddressChange("province", v)} required />
      <SelectInput label="Region" options={REGION_OPTIONS} value={address.region} onChange={(v) => onAddressChange("region", v)} required />
      <TextInput label="ZIP Code" value={address.zip} onChange={(v) => onAddressChange("zip", v)} />
    </FieldRow>
  </>
);

//  Step 2: Parents / Guardian Info 

export const Step2_Guardian = ({ data, onChange }) => (
  <>
    <StepHeader number={2} title="Parents / Guardian Info" />

    <SectionLabel title="Father's Information" />
    <TextInput label="Full Name" value={data.fatherName} onChange={(v) => onChange("fatherName", v)} />
    <FieldRow>
      <TextInput label="Occupation" value={data.fatherOccupation} onChange={(v) => onChange("fatherOccupation", v)} />
      <TextInput label="Contact Number" value={data.fatherContact} onChange={(v) => onChange("fatherContact", v)} />
      <TextInput label="Email Address" value={data.fatherEmail} onChange={(v) => onChange("fatherEmail", v)} />
    </FieldRow>

    <div className="border-t border-dashed border-gray-200 my-4" />

    <SectionLabel title="Mother's Information" />
    <TextInput label="Full Name" value={data.motherName} onChange={(v) => onChange("motherName", v)} />
    <FieldRow>
      <TextInput label="Occupation" value={data.motherOccupation} onChange={(v) => onChange("motherOccupation", v)} />
      <TextInput label="Contact Number" value={data.motherContact} onChange={(v) => onChange("motherContact", v)} />
      <TextInput label="Email Address" value={data.motherEmail} onChange={(v) => onChange("motherEmail", v)} />
    </FieldRow>

    <div className="border-t border-dashed border-gray-200 my-4" />

    <SectionLabel title="Guardian (if applicable)" />
    <TextInput label="Full Name" value={data.guardianName} onChange={(v) => onChange("guardianName", v)} />
    <FieldRow>
      <SelectInput label="Relationship" options={RELATION_OPTIONS} value={data.guardianRelation} onChange={(v) => onChange("guardianRelation", v)} />
      <TextInput label="Contact Number" value={data.guardianContact} onChange={(v) => onChange("guardianContact", v)} />
    </FieldRow>
  </>
);

//  Step 3: Review Form + Data Consent 

export const Step3_Review = ({ student, address, guardian, consent, onConsentChange }) => (
  <>
    <StepHeader number={3} title="Review Form" />
    <p className="text-xs text-gray-400 mb-5 -mt-2">Please review your details before submitting.</p>

    <ReviewSection
      title="Student Information"
      fields={[
        { label: "Grade Level", value: student.gradeLevel },
        { label: "Full Name", value: [student.firstName, student.middleName, student.lastName].filter(Boolean).join(" ") },
        { label: "Date of Birth", value: student.dob },
        { label: "Gender", value: student.gender },
      ]}
    />
    <ReviewSection
      title="Address"
      fields={[
        { label: "Street", value: address.street },
        { label: "Barangay", value: address.barangay },
        { label: "City", value: address.city },
        { label: "Province", value: address.province },
        { label: "Region", value: address.region },
      ]}
    />
    <ReviewSection
      title="Parents / Guardian"
      fields={[
        { label: "Father", value: guardian.fatherName },
        { label: "Father's Occupation", value: guardian.fatherOccupation },
        { label: "Father's Contact", value: guardian.fatherContact },
        { label: "Father's Email", value: guardian.fatherEmail },
        { label: "Mother", value: guardian.motherName },
        { label: "Mother's Occupation", value: guardian.motherOccupation },
        { label: "Mother's Contact", value: guardian.motherContact },
        { label: "Mother's Email", value: guardian.motherEmail },
        { label: "Guardian", value: guardian.guardianName },
      ]}
    />

    <div className="border-t border-gray-100 my-5" />

    <Checkbox
      label="I understand and agree that my data, and my child's data, will be collected and shared for enrollment purposes, in accordance with data privacy laws."
      checked={consent}
      onChange={onConsentChange}
      required
    />
  </>
);