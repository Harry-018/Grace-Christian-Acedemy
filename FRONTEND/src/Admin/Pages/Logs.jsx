import Panel from "../Components/SidePanel.jsx";
import LogsTable from "../Components/Table.jsx";
import UserData from "../TableData/TeacherData.json";
import SearchBar from "../Components/Inputs/SearchBar.jsx";

import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const columnHelper = createColumnHelper();
function Logs() {
  const [data] = React.useState(() => [...UserData]);

  const columns = [
    columnHelper.accessor("userid", {
      header: "User Id",
    }),

    columnHelper.accessor((row) => `${row.name.first} ${row.name.last}`, {
      id: "teacherFullName",
      header: "Fullname",
    }),

    columnHelper.accessor("info.logged", {
      header: "Logs",
      cell: (info) => {
        const date = new Date(info.getValue());
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      },
    }),

    columnHelper.accessor("", {
      header: "Action",
    }),
  ];

  return (
    <div className="flex h-screen w-full flex-col gap-x-5 overflow-hidden bg-egg font-[Poppins] lg:flex-row">
      <Panel />
      <div className="flex h-full w-full pb-5">
        {/* for mobile to tablet */}
        <div className="flex h-full w-full flex-col gap-y-5 px-[5%] lg:hidden">
          <div className="flex min-h-15 w-full items-center justify-between">
            <span className="text-sm">Logs</span>
            <span className="flex w-50 items-center gap-x-2">
              <SearchBar
                InputType={"search"}
                InputId={"searchbar"}
                InputPlaceholder={"Search Email "}
              />
            </span>
          </div>

          <div className="flex h-full w-full flex-col">
            <span className="h-[80%] w-full">
              <LogsTable columns={columns} data={data} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logs;
