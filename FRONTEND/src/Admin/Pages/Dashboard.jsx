import Panel from "../Components/SidePanel.jsx";
import DCard from "../Components/DashboardCard.jsx";

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

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      {/* for mobile to tablet */}
      <div className="no-scrollbar flex h-screen w-full flex-col items-center gap-y-5 overflow-y-auto py-5 lg:hidden">
        <div className="flex h-[5vh] w-screen items-center px-5">
          <span className="w-full text-sm">Summary</span>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          {/* summary */}
          <div className="flex h-auto w-full justify-center">
            <div className="grid h-auto w-[95%] grid-cols-2 grid-rows-3 content-center gap-3">
              <DCard
                className="col-span-1 row-span-1"
                label={"Accepted Students"}
                Icon={<GraduationCap className="min-h-8 min-w-8" />}
                value={20}
              />
              <DCard
                className="col-span-1 row-span-1"
                label={"Pending Applications"}
                Icon={<FileUser className="h-8 w-8" />}
                value={40}
              />
              <DCard
                className="col-span-1 row-span-1"
                label={"Male Students"}
                Icon={<Mars className="h-8 w-8" />}
                value={10}
              />
              <DCard
                className="col-span-1 row-span-1"
                label={"Female Students"}
                Icon={<Venus className="h-8 w-8" />}
                value={8}
              />
              <DCard
                className="col-span-1 row-span-1"
                label={"Disabled Students"}
                Icon={<Accessibility className="h-8 w-8" />}
                value={2}
              />
            </div>
          </div>
        </div>
        {/* recents applicants */}
        <div className="flex h-[5vh] w-screen items-center px-5">
          <span className="w-full text-sm">Recent Applications</span>
        </div>
        <div className="flex h-full min-h-[60%] w-full flex-col gap-y-5 px-[2%]">
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
