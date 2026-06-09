import Panel from "../Components/SidePanel.jsx";
import DCard from "../Components/DashboardCard.jsx";
import GenderChart from "../Components/Graphs/DoughnutChart.jsx";
import TuitionChart from "../Components/Graphs/PieChart.jsx";
import ApplicantChart from "../Components/Graphs/PieChart.jsx";
import ClassChart from "../Components/Graphs/BarGraph.jsx";
import LineChart from "../Components/Graphs/LineChart.jsx";
import LogsTable from "../Components/Table.jsx";

import { GraduationCap, FileUser, UserCog, Activity } from "lucide-react";
import UserData from "../TableData/TeacherData.json";
import StudentData from "../TableData/StudentData.json";

import React from "react";

function Dashboard() {
  const [data] = React.useState(() => [...UserData]);

  //gender function
  const genderCounts = StudentData.reduce((sum, student) => {
    const gender = student.gender || "Unknown";
    sum[gender] = (sum[gender] || 0) + 1;
    return sum;
  }, {});

  //tuition function
  const tuitionCounts = StudentData.reduce((sum, student) => {
    const tuition = student.tuition || "Unknown";
    sum[tuition] = (sum[tuition] || 0) + 1;
    return sum;
  }, {});

  //applicant function
  const applicantCounts = StudentData.reduce((sum, student) => {
    const applicant = student.applicationstatus || "Unknown";
    sum[applicant] = (sum[applicant] || 0) + 1;
    return sum;
  }, {});

  //grade level function
  const gradeLevelCounts = StudentData.reduce((sum, student) => {
    const gradeLevel = student.gradelevel || "Unknown";
    sum[gradeLevel] = (sum[gradeLevel] || 0) + 1;
    return sum;
  }, {});

  //class section function
  const classSectionCounts = StudentData.reduce((sum, student) => {
    const classSection = student.classsection || "Unknown";
    sum[classSection] = (sum[classSection] || 0) + 1;
    return sum;
  }, {});

  //student per year function
  const stdPerYearCounts = StudentData.reduce((sum, student) => {
    const stdPerYear = student.enrolledyear || "Unknown";
    sum[stdPerYear] = (sum[stdPerYear] || 0) + 1;
    return sum;
  }, {});

  //gender
  const genderTitle = "Student per Gender";
  const genderLabel = Object.keys(genderCounts); // ['Male', 'Female']
  const genderDataValues = Object.values(genderCounts); // [5, 5]

  //tuition
  const tuitionTitle = "Tuition Status";
  const tuitionLabel = Object.keys(tuitionCounts); // ['Pending', 'Rejected', 'Accepted']
  const tuitionDataValues = Object.values(tuitionCounts); // [5, 5]

  //applicant
  const applicantTitle = "Applicants Summary";
  const applicantLabel = Object.keys(applicantCounts); // ['Pending', 'Rejected', 'Accepted']
  const applicantDataValues = Object.values(applicantCounts); // [5, 5]

  //gradelevel
  const gradelevelTitle = "Students per Grade Level";
  const gradelevelLabel = Object.keys(gradeLevelCounts); // ['Male', 'Female']
  const gradelevelDataValues = Object.values(gradeLevelCounts); // [5, 5]

  //class section level
  const classSectionTitle = "Students per Section";
  const classSectionLabel = Object.keys(classSectionCounts); // ['Male', 'Female']
  const classSectionDataValues = Object.values(classSectionCounts); // [5, 5]

  //students per year
  const stdPerYearTitle = "Students per Year";
  const stdPerYearLabel = Object.keys(stdPerYearCounts); // ['Male', 'Female']
  const stdPerYearDataValues = Object.values(stdPerYearCounts); // [5, 5]

  //colors
  const colors = ["#606f49", "#97a97c", "#c2d5aa"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        maxWidth: 250,
        labels: {
          boxWidth: 12,
        },
      },
    },
  };
  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        maxHeight: 250,
        labels: {
          boxWidth: 12,
        },
      },
    },
  };

  return (
    <div className="flex h-screen w-screen gap-x-5 bg-egg">
      <Panel />
      <div className="flex h-full w-full">
        <div className="flex h-full w-auto flex-col justify-between gap-y-5 p-5">
          {/*cards*/}
          <div className="flex min-h-[15vh] w-[50vw] gap-x-5">
            <DCard
              label={"Total Students"}
              Icon={<GraduationCap className="h-10 w-10" />}
              value={120}
            />
            <DCard
              label={"Total Applicants"}
              Icon={<FileUser className="h-10 w-10" />}
              value={244}
            />

            <DCard
              label={"Total Staff"}
              Icon={<UserCog className="h-10 w-10" />}
              value={25}
            />
          </div>

          {/*Doughnutchart*/}
          <div className="flex min-h-[30vh] min-w-[50vw] justify-between">
            <GenderChart
              title={genderTitle}
              chartLabel={genderLabel}
              options={options}
              dataValue={genderDataValues}
              colors={colors}
            />
            <TuitionChart
              title={tuitionTitle}
              chartLabel={tuitionLabel}
              options={options}
              dataValue={tuitionDataValues}
              colors={colors}
            />
            <ApplicantChart
              title={applicantTitle}
              chartLabel={applicantLabel}
              options={options}
              dataValue={applicantDataValues}
              colors={colors}
            />
          </div>

          {/*Linechart*/}
          <div className="min-h-[45vh] w-[50vw]">
            <LineChart
              title={stdPerYearTitle}
              chartLabel={stdPerYearLabel}
              options={optionsBar}
              dataValue={stdPerYearDataValues}
              colors={colors}
            />
          </div>
        </div>
        {/*bar graph*/}
        <div className="flex h-screen w-[30vw] flex-col gap-y-5 p-5 pl-0">
          <ClassChart
            title={gradelevelTitle}
            chartLabel={gradelevelLabel}
            options={optionsBar}
            dataValue={gradelevelDataValues}
            colors={colors}
          />
          <ClassChart
            title={classSectionTitle}
            chartLabel={classSectionLabel}
            options={optionsBar}
            dataValue={classSectionDataValues}
            colors={colors}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
