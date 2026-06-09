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
          timeStyle: "long",
        });
      },
    }),

    columnHelper.accessor("", {
      header: "Action",
    }),
  ];

  return (
    <div className="p- flex h-screen w-full bg-egg font-[Poppins]">
      <Panel />
      <div className="h-full w-screen space-y-5 p-5">
        <div className="flex min-h-15 w-full items-center justify-between rounded-lg bg-neutral-100 pr-2 pl-5 inset-shadow-small">
          <span className="flex min-h-15 items-center text-sm">Logs</span>
          <span className="flex w-50 items-center gap-x-2">
            <SearchBar
              InputType={"search"}
              InputId={"searchbar"}
              InputPlaceholder={"Search Email"}
            />
          </span>
        </div>
        <div className="h-[85vh] w-full">
          <LogsTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Logs;
