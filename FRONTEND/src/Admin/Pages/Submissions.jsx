import Panel from "../Components/SidePanel.jsx";
import Calendar from "../Components/TemplateCalendar.jsx";
import CheckList from "../Components/Table.jsx";
import StudentData from "../TableData/StudentData.json";
import React from "react";

import { Check, X, MoreHorizontal } from "lucide-react";

import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper();

function Submissions() {
  const [data] = React.useState(() => [...StudentData]);

  const CheckListcolumns = [
    columnHelper.accessor("subnumber", {
      header: "Applications Number ",
    }),

    columnHelper.accessor("subdate", {
      header: "Submission Date ",
    }),
    columnHelper.accessor(
      (row) => `${row.studentfirstname} ${row.studentlastname}`,
      {
        id: "studentFullName",
        header: "Student",
      },
    ),

    columnHelper.display({
      header: "Action ",
      cell: (props) => {
        const userId = props.row.original.id;

        return (
          <div className="flex items-center justify-start gap-3">
            <button
              onClick={() => Accept(userId)}
              className="flex h-5 w-5 items-center justify-center gap-x-1 rounded-sm text-sm text-lime-green outline outline-neutral-400 duration-150 hover:cursor-pointer focus:bg-lime-green focus:text-white active:scale-90"
            >
              <Check className="h-3" />
            </button>
            <button
              onClick={() => Reject(userId)}
              className="flex h-5 w-5 items-center justify-center gap-x-1 rounded-sm text-sm text-reject outline outline-neutral-400 duration-150 hover:cursor-pointer focus:bg-reject focus:text-white focus:outline-0 active:scale-90"
            >
              <X className="h-3" />
            </button>
          </div>
        );
      },
    }),
  ];

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />

      {/* for mobile to  tablet */}
      <div className="no-scrollbar flex h-full w-screen overflow-y-auto px-[5%] lg:hidden">
        <div className="flex h-full w-full flex-col gap-y-5">
          <span className="flex min-h-15 w-full items-center justify-between text-sm">
            Submissions
          </span>
          {/* student requirements */}
          <div className="flex h-auto max-h-[40vh] flex-col gap-y-5 rounded-lg bg-neutral-100 p-5 text-sm inset-shadow-med">
            Student Document Requirements
            <div className="flex flex-col gap-y-3 text-xs text-neutral-700">
              <span className="border-b border-neutral-600/40 py-3">
                Birth Certificate
              </span>
              <span className="border-b border-neutral-600/40 py-3">
                Completed Form
              </span>
              <span className="border-b border-neutral-600/40 py-3">
                Tuition Fee
              </span>
            </div>
          </div>
          <div className="flex h-screen w-full flex-col gap-y-5 lg:hidden">
            <div className="flex w-full flex-col gap-y-5">
              <div className="custom-tailwind-calendar z-20 flex flex-col">
                <Calendar />
              </div>
            </div>

            <div className="flex h-full w-full flex-col">
              <span className="h-[95%] w-full">
                <CheckList columns={CheckListcolumns} data={data} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* for laptop and above */}
      <div className="hidden h-screen w-full p-5 lg:block">
        <div className="flex h-full w-full flex-col gap-y-5">
          <span className="flex min-h-[8vh] w-full items-center rounded-lg bg-neutral-100 pl-5 text-sm inset-shadow-small">
            Submissions
          </span>

          <div className="hidden h-full w-full gap-x-5 pb-5 lg:flex">
            <div className="flex w-[25vw] flex-col gap-y-5">
              <div className="custom-tailwind-calendar flex min-w-[25%] flex-col">
                <Calendar />
              </div>

              {/* student requirements */}
              <div className="flex h-auto max-h-[40vh] flex-col gap-y-5 rounded-lg bg-neutral-100 p-5 text-sm inset-shadow-med">
                Student Document Requirements
                <div className="flex flex-col gap-y-3 text-xs text-neutral-700">
                  <span className="border-b border-neutral-600/40 py-3">
                    Birth Certificate
                  </span>
                  <span className="border-b border-neutral-600/40 py-3">
                    Completed Form
                  </span>
                  <span className="border-b border-neutral-600/40 py-3">
                    Tuition Fee
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[90%] w-full rounded-xl bg-neutral-100">
              <CheckList columns={CheckListcolumns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submissions;
