import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import React from "react";

function Table({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="no-scrollbar h-full w-full overflow-x-auto overflow-y-auto rounded-xl border border-neutral-200 bg-neutral-100 font-[Poppins] inset-shadow-med">
      <table className="w-full">
        <thead className="sticky top-0 z-10 bg-swamp-green inset-shadow-small">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-4 text-left text-xs font-medium text-neutral-50"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-neutral-200/60 transition-colors"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="overflow-hidden px-6 py-4 text-xs text-neutral-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
