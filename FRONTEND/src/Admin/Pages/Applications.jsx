import Panel from "../Components/SidePanel.jsx";
import StudentData from "../TableData/StudentData.json";
import Applicants from "../Components/Table.jsx";
import SearchBar from "../Components/Inputs/SearchBar.jsx";
import SendBtn from "../Components/Buttons/GreenButton.jsx";
import StudentInfoForm from "../Components/Forms/StudentInfo.jsx";
import RedButton from "../Components/Buttons/RedButton.jsx";
import FilterButton from "../Components/Buttons/FilterButton.jsx";
import View from "../Components/Modals/ViewModal.jsx";

import { Check, X, MoreHorizontal } from "lucide-react";

import { createColumnHelper } from "@tanstack/react-table";
import { React, useEffect, useState } from "react";

import { getAllApplicants } from "../../services/applicationService.jsx";

const columnHelper = createColumnHelper();

const Applicantscolumns = [
  columnHelper.accessor("application_id", {
    header: "Application Number ",
  }),

  columnHelper.accessor((row) => `${row.s_firstname} ${row.s_lastname}`, {
    id: "studentFullName",
    header: "Student",
  }),

  columnHelper.accessor("s_guardian", {
    header: "Guardian ",
  }),

  columnHelper.accessor("s_guardianemail", {
    header: "Email ",
  }),

  columnHelper.accessor("applicationstatus", {
    header: "Status ",
  }),

  columnHelper.display({
    header: "Action ",
    cell: (props) => {
      const userId = props.row.original.id;

      return (
        <div className="flex items-center justify-start gap-2">
          <button className="cursor-pointer rounded-md p-2 text-xs text-neutral-800 transition-all duration-100 hover:text-neutral-400 active:scale-90">
            View
          </button>
          <button className="cursor-pointer rounded-md bg-swamp-green p-2 text-xs text-neutral-50 transition-all duration-100 hover:bg-swamp-green/80 active:scale-90">
            Confirm
          </button>
          <button className="cursor-pointer rounded-md bg-reject p-2 text-xs text-neutral-50 transition-all duration-100 hover:bg-reject/80 active:scale-90">
            Reject
          </button>
        </div>
      );
    },
  }),

  // columnHelper.display({
  //   header: "Select ",
  //   cell: (props) => {
  //     return (
  //       <div className="flex items-center">
  //         <input
  //           id="checkbox"
  //           type="checkbox"
  //           value=""
  //           className="h-5 w-5 cursor-pointer appearance-none rounded-sm bg-neutral-50 ring-0 checked:bg-swamp-green"
  //         />
  //       </div>
  //     );
  //   },
  // }),
];
function Applications() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadApplicants();
  }, []);

  // useEffect for refreshing data from database
  const loadApplicants = async () => {
    try {
      const data = await getAllApplicants();
      setApplicants(data || []);
    } catch (error) {
      console.error("Error loading teachers:", error);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      <div className="flex h-full w-full pb-5">
        {/* for mobile to tablet */}
        <div className="flex h-full w-screen max-w-full flex-col gap-y-5 px-[5%] lg:hidden">
          <span className="flex min-h-15 w-full items-center justify-between text-sm">
            Applicants
            <span className="flex w-50 items-center gap-x-2">
              <SearchBar
                InputType={"search"}
                InputId={"searchbar"}
                InputPlaceholder={"Search Email"}
              />
            </span>
          </span>
          <span className="flex gap-x-5">
            <span className="flex items-center gap-x-3">
              <FilterButton label={"All"} />
              <FilterButton label={"Pending"} />
              <FilterButton label={"Confirmed"} />
              <FilterButton label={"Rejected"} />
            </span>
          </span>
          <div className="flex h-[70vh] flex-col gap-x-5">
            <span className="h-full w-full">
              <Applicants columns={Applicantscolumns} data={applicants} />
            </span>
          </div>
        </div>

        {/* for laptop and above */}
        <div className="hidden h-full max-w-full min-w-[82vw] flex-col gap-y-5 p-5 lg:flex">
          <div className="flex min-h-[8vh] w-full items-center justify-between rounded-lg bg-neutral-100 px-5 inset-shadow-small">
            <span className="flex min-h-15 items-center text-sm">
              Applicants
            </span>

            <span className="flex gap-x-5">
              <span className="flex items-center gap-x-3">
                <FilterButton label={"All"} />
                <FilterButton label={"Pending"} />
                <FilterButton label={"Confirmed"} />
                <FilterButton label={"Rejected"} />
              </span>
              <span className="flex w-50 items-center gap-x-2">
                <SearchBar
                  InputType={"search"}
                  InputId={"searchbar"}
                  InputPlaceholder={"Search Email"}
                />
              </span>
            </span>
          </div>
          <div className="h-full w-full rounded-xl bg-neutral-100">
            <Applicants columns={Applicantscolumns} data={applicants} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
