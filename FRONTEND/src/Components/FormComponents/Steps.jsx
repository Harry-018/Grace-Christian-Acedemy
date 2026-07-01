import React from "react";
import {
  TextInput, DateInput, SelectInput, RadioGroup,
  Checkbox, Row, StepHeader, SectionLabel, Divider, ReviewSection
} from "./FormComponents";


const GRADE_OPTIONS = [
  { label: "Nursery",    value: "Nursery" },
  { label: "Pre-Kinder", value: "Pre-Kinder" },
  { label: "Kinder",    value: "Kinder" },
];

const GENDER_OPTIONS = [
  { label: "Male",   value: "Male" },
  { label: "Female", value: "Female" },
];

const REGION_OPTIONS = [
  { label: "NCR – National Capital Region",  value: "NCR" },
  { label: "Region III – Central Luzon",     value: "Region III" },
  { label: "Region IV-A – CALABARZON",       value: "Region IV-A" },
  { label: "Region VII – Central Visayas",   value: "Region VII" },
  { label: "Region XI – Davao Region",       value: "Region XI" },
];

const RELATION_OPTIONS = [
  { label: "Grandparent",  value: "Grandparent" },
  { label: "Aunt / Uncle", value: "Aunt/Uncle" },
  { label: "Sibling",      value: "Sibling" },
  { label: "Other",        value: "Other" },
];

export function Step1({ student, address, onStudent, onAddress }) {
  return (
    <>
      <StepHeader number={1} title="Student & Address Information" />

      <SectionLabel title="Student Information" />

      <RadioGroup
        label="Grade Level"
        options={GRADE_OPTIONS}
        value={student.gradeLevel}
        onChange={(v) => onStudent("gradeLevel", v)}
        required
      />

      <Row>
        <TextInput label="Last Name"   value={student.lastName}   onChange={(v) => onStudent("lastName", v)}   required />
        <TextInput label="First Name"  value={student.firstName}  onChange={(v) => onStudent("firstName", v)}  required />
        <TextInput label="Middle Name" value={student.middleName} onChange={(v) => onStudent("middleName", v)} />
      </Row>

      <Row>
        <DateInput label="Date of Birth"  value={student.dob} onChange={(v) => onStudent("dob", v)} required />
        <TextInput label="Place of Birth" value={student.pob} onChange={(v) => onStudent("pob", v)} />
      </Row>

      <Row>
        <TextInput label="Religion"    value={student.religion}    onChange={(v) => onStudent("religion", v)} />
        <TextInput label="Nationality" value={student.nationality} onChange={(v) => onStudent("nationality", v)} />
      </Row>

      <RadioGroup
        label="Gender"
        options={GENDER_OPTIONS}
        value={student.gender}
        onChange={(v) => onStudent("gender", v)}
        required
      />

      <Divider />
      <SectionLabel title="Address Information" />

      <TextInput label="House No. / Street" value={address.street} onChange={(v) => onAddress("street", v)} required />

      <Row>
        <TextInput label="Barangay"          value={address.barangay} onChange={(v) => onAddress("barangay", v)} required />
        <TextInput label="City / Municipality" value={address.city}   onChange={(v) => onAddress("city", v)}     required />
      </Row>

      <Row>
        <TextInput   label="Province" value={address.province} onChange={(v) => onAddress("province", v)} required />
        <SelectInput label="Region"   options={REGION_OPTIONS} value={address.region} onChange={(v) => onAddress("region", v)} required />
        <TextInput   label="ZIP Code" value={address.zip}      onChange={(v) => onAddress("zip", v)} />
      </Row>
    </>
  );
}

export function Step2({ guardian, onGuardian }) {
  return (
    <>
      <StepHeader number={2} title="Parents / Guardian Info" />

      <SectionLabel title="Father's Information" />
      <Row>
        <TextInput label="Last Name"   value={guardian.fatherLastName}   onChange={(v) => onGuardian("fatherLastName", v)} />
        <TextInput label="First Name"  value={guardian.fatherFirstName}  onChange={(v) => onGuardian("fatherFirstName", v)} />
        <TextInput label="Middle Name" value={guardian.fatherMiddleName} onChange={(v) => onGuardian("fatherMiddleName", v)} />
      </Row>
      <Row>
        <TextInput label="Occupation"     value={guardian.fatherOccupation} onChange={(v) => onGuardian("fatherOccupation", v)} />
        <TextInput label="Contact Number" value={guardian.fatherContact}    onChange={(v) => onGuardian("fatherContact", v)} />
        <TextInput label="Email Address"  value={guardian.fatherEmail}      onChange={(v) => onGuardian("fatherEmail", v)} />
      </Row>

      <Divider />

      <SectionLabel title="Mother's Information" />
      <Row>
        <TextInput label="Last Name"   value={guardian.motherLastName}   onChange={(v) => onGuardian("motherLastName", v)} />
        <TextInput label="First Name"  value={guardian.motherFirstName}  onChange={(v) => onGuardian("motherFirstName", v)} />
        <TextInput label="Middle Name" value={guardian.motherMiddleName} onChange={(v) => onGuardian("motherMiddleName", v)} />
      </Row>
      <Row>
        <TextInput label="Occupation"     value={guardian.motherOccupation} onChange={(v) => onGuardian("motherOccupation", v)} />
        <TextInput label="Contact Number" value={guardian.motherContact}    onChange={(v) => onGuardian("motherContact", v)} />
        <TextInput label="Email Address"  value={guardian.motherEmail}      onChange={(v) => onGuardian("motherEmail", v)} />
      </Row>

      <Divider />

      <SectionLabel title="Guardian (if applicable)" />
      <Row>
        <TextInput label="Last Name"   value={guardian.guardianLastName}   onChange={(v) => onGuardian("guardianLastName", v)} />
        <TextInput label="First Name"  value={guardian.guardianFirstName}  onChange={(v) => onGuardian("guardianFirstName", v)} />
        <TextInput label="Middle Name" value={guardian.guardianMiddleName} onChange={(v) => onGuardian("guardianMiddleName", v)} />
      </Row>
      <Row>
        <SelectInput label="Relationship"   options={RELATION_OPTIONS}       value={guardian.guardianRelation} onChange={(v) => onGuardian("guardianRelation", v)} />
        <TextInput   label="Contact Number" value={guardian.guardianContact} onChange={(v) => onGuardian("guardianContact", v)} />
      </Row>
    </>
  );
}

export function Step3({ student, address, guardian, consent, onConsent }) {
  return (
    <>
      <StepHeader number={3} title="Review Form" />
      <p className="text-xs text-gray-400 mb-5 -mt-2">Please review your details before submitting.</p>

      <ReviewSection
        title="Student Information"
        fields={[
          { label: "Grade Level",    value: student.gradeLevel },
          { label: "Full Name",      value: [student.firstName, student.middleName, student.lastName].filter(Boolean).join(" ") },
          { label: "Date of Birth",  value: student.dob },
          { label: "Place of Birth", value: student.pob },
          { label: "Religion",       value: student.religion },
          { label: "Nationality",    value: student.nationality },
          { label: "Gender",         value: student.gender },
        ]}
      />

      <ReviewSection
        title="Address"
        fields={[
          { label: "Street",   value: address.street },
          { label: "Barangay", value: address.barangay },
          { label: "City",     value: address.city },
          { label: "Province", value: address.province },
          { label: "Region",   value: address.region },
          { label: "ZIP",      value: address.zip },
        ]}
      />

      <ReviewSection
        title="Parents / Guardian"
        fields={[
          { label: "Father's Name",       value: [guardian.fatherFirstName, guardian.fatherMiddleName, guardian.fatherLastName].filter(Boolean).join(" ") },
          { label: "Father's Occupation", value: guardian.fatherOccupation },
          { label: "Father's Contact",    value: guardian.fatherContact },
          { label: "Father's Email",      value: guardian.fatherEmail },
          { label: "Mother's Name",       value: [guardian.motherFirstName, guardian.motherMiddleName, guardian.motherLastName].filter(Boolean).join(" ") },
          { label: "Mother's Occupation", value: guardian.motherOccupation },
          { label: "Mother's Contact",    value: guardian.motherContact },
          { label: "Mother's Email",      value: guardian.motherEmail },
          { label: "Guardian's Name",     value: [guardian.guardianFirstName, guardian.guardianMiddleName, guardian.guardianLastName].filter(Boolean).join(" ") },
          { label: "Relationship",        value: guardian.guardianRelation },
        ]}
      />

      <Divider />

      <Checkbox
        label="I understand and agree that my data, and my child's data, will be collected and shared for enrollment purposes, in accordance with data privacy laws."
        checked={consent}
        onChange={onConsent}
        required
      />
    </>
  );
}