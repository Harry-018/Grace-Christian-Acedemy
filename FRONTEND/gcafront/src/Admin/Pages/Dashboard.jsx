import Panel from "../Components/SidePanel.jsx";
import DCard from "../Components/DashboardCard.jsx";
import GenderChart from "../Components/Graphs/PieChart.jsx";
import TuitionChart from "../Components/Graphs/PieChart.jsx";
import ApplicantChart from "../Components/Graphs/PieChart.jsx";
import ClassChart from "../Components/Graphs/BarGraph.jsx";
import LineChart from "../Components/Graphs/LineChart.jsx";
import RecentAppTable from "../Components/Table.jsx";

import {
  GraduationCap,
  FileUser,
  UserCog,
  Activity,
  Mars,
  Venus,
  Accessibility,
} from "lucide-react";
import UserData from "../TableData/TeacherData.json";
import StudentData from "../TableData/StudentData.json";

import { getRecentApplicants } from "../../services/applicationService.jsx";

import { React, useEffect, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const RecentAppColumns = [
  columnHelper.accessor("application_id", {
    header: "Applicant ID ",
  }),
  columnHelper.accessor((row) => `${row.s_firstname} ${row.s_lastname}`, {
    id: "studentFullName",
    header: "Student Name",
  }),
  columnHelper.accessor(
    (row) =>
      new Date(row.submissiondate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    {
      id: "submissiondate",
      header: "Submission Date",
    },
  ),
];

function Dashboard() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadApplicants();
  }, []);

  // useEffect for refreshing data from database
  const loadApplicants = async () => {
    try {
      const data = await getRecentApplicants();
      setApplicants(data || []);
    } catch (error) {
      console.error("Error loading teachers:", error);
    }
  };

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
  const genderTitle = "Students per Gender";
  const genderLabel = Object.keys(genderCounts); // ['Male', 'Female']
  const genderDataValues = Object.values(genderCounts); // [5, 5]

  //tuition
  const tuitionTitle = "Tuition Status";
  const tuitionLabel = Object.keys(tuitionCounts); // ['Paid', 'Unpaid']
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
      datalabels: {
        color: "#f5f5f5",
        font: {
          weight: "normal",
          size: 12,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}`;
        },
        anchor: "center",
        align: "center",
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
      datalabels: {
        color: "#f5f5f5",
      },
    },
  };

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      {/* for mobile to tablet */}
      <div className="no-scrollbar flex h-screen w-full flex-col items-center gap-y-5 overflow-y-auto py-5 lg:hidden">
        <div className="flex h-[5vh] w-screen items-center px-5">
          <span className="w-full text-sm">Summary</span>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          {/* dashboard cards */}
          <div className="flex h-[30vh] w-auto gap-x-3 lg:hidden">
            <div className="flex flex-col gap-y-3">
              <DCard
                label={"Total Students this Year"}
                Icon={<GraduationCap className="min-h-8 min-w-8" />}
                value={120}
              />
              <DCard
                label={"Total Applicants this Year"}
                Icon={<FileUser className="h-8 w-8" />}
                value={38}
              />
            </div>

            <div className="flex flex-col gap-y-3">
              <DCard
                label={"Submissions to Evaluate"}
                Icon={<FileUser className="h-8 w-8" />}
                value={5}
              />
              <DCard
                label={"Total Applicants"}
                Icon={<FileUser className="h-8 w-8" />}
                value={244}
              />
            </div>
          </div>
        </div>

        {/* charts */}
        <div className="flex h-full w-full flex-col gap-y-5">
          <div className="flex h-[5vh] w-screen items-center px-5">
            <span className="w-full text-sm">Charts</span>
          </div>
          {/* piecharts */}

          <div className="no-scrollbar flex h-[21vh] w-full justify-center-safe gap-x-5 overflow-x-auto px-5">
            <GenderChart
              title={genderTitle}
              chartLabel={genderLabel}
              options={options}
              dataValue={genderDataValues}
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

          {/* barcharts */}
          <div className="no-scrollbar flex h-[31vh] w-full justify-center-safe gap-x-5 overflow-x-auto px-5">
            <ClassChart
              title={classSectionTitle}
              chartLabel={classSectionLabel}
              options={optionsBar}
              dataValue={classSectionDataValues}
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
        {/* recents applicants */}
        <div className="flex h-full w-full flex-col gap-y-5 px-5">
          <div className="flex h-[5%] items-center text-sm">
            Recent Applicants
          </div>
          <div className="h-[90%]">
            <RecentAppTable columns={RecentAppColumns} data={applicants} />
          </div>
        </div>
      </div>

      {/* for laptop and above */}
      <div className="hidden h-screen w-full flex-col items-center p-5 lg:flex">
        <div className="flex h-screen w-full flex-col gap-y-5">
          <div className="flex h-[8vh] items-center rounded-lg bg-neutral-100 px-5 text-sm inset-shadow-small">
            Dashboard
          </div>
          {/* summary */}
          <div className="flex h-[16vh] w-full gap-x-5">
            <DCard
              label={"Accepted Students"}
              Icon={<GraduationCap className="min-h-8 min-w-8" />}
              value={20}
            />
            <DCard
              label={"Pending Applications"}
              Icon={<FileUser className="h-8 w-8" />}
              value={40}
            />
            <DCard
              label={"Male Students"}
              Icon={<Mars className="h-8 w-8" />}
              value={10}
            />
            <DCard
              label={"Female Students"}
              Icon={<Venus className="h-8 w-8" />}
              value={8}
            />
            <DCard
              label={"Disabled Students"}
              Icon={<Accessibility className="h-8 w-8" />}
              value={2}
            />
          </div>
          <div className="flex h-[65vh] max-h-full w-full gap-x-5">
            {/* recents applicants */}
            <div className="h-full w-full">
              <div className="flex h-[10%] items-center text-sm">
                Recent Applicants
              </div>
              <div className="h-[90%]">
                <RecentAppTable columns={RecentAppColumns} data={applicants} />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
