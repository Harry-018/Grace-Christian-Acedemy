import Panel from "../Components/SidePanel.jsx";
import StudentData from "../TableData/StudentData.json";
import Applicants from "../Components/Table.jsx";
import SearchBar from "../Components/Inputs/SearchBar.jsx";
import SendBtn from "../Components/Buttons/GreenButton.jsx";
import StudentInfoForm from "../Components/Forms/StudentInfo.jsx";
import RedButton from "../Components/Buttons/RedButton.jsx";
import FilterButton from "../Components/Buttons/FilterButton.jsx";
import View from "../Components/Modals/ViewModal.jsx";
import React from "react";

import { Check, X, MoreHorizontal } from "lucide-react";

import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper();

function Applications() {
  const [data] = React.useState(() => [...StudentData]);

  const Applicantscolumns = [
    columnHelper.accessor("", {
      header: "Application Number ",
    }),

    columnHelper.accessor(
      (row) => `${row.studentfirstname} ${row.studentlastname}`,
      {
        id: "studentFullName",
        header: "Student",
      },
    ),

    columnHelper.accessor(
      (row) => `${row.guardianfirstname} ${row.guardianlastname}`,
      {
        id: "guardianFullName",
        header: "Guardian",
      },
    ),

    columnHelper.accessor("guardianemail", {
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

  return (
    <div className="flex h-screen w-screen gap-x-5 bg-egg font-[Poppins]">
      <Panel />
      <div className="flex h-full w-full">
        <div className="flex h-full max-w-full min-w-[82vw] flex-col gap-y-5 p-5">
          <div className="flex min-h-15 w-full items-center justify-between rounded-lg bg-neutral-100 px-5 inset-shadow-small">
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

          <div className="flex h-full min-h-[86vh] w-full flex-col gap-x-5">
            <span className="h-full min-w-150">
              <Applicants columns={Applicantscolumns} data={data} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
