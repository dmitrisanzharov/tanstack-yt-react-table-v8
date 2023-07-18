import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import dataJSON from "./data.json";

const BasicTable = () => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const [columnVisibility, setColumnVisibility] = React.useState({});

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <>
      <div>
        <label>
          <input
            {...{
              type: "checkbox",
              checked: tableInstance.getIsAllColumnsVisible(),
              onChange: tableInstance.getToggleAllColumnsVisibilityHandler(),
            }}
          />{" "}
          Toggle All
        </label>
        <hr />
        {tableInstance.getAllLeafColumns().map((column) => {
          return (
            <div key={column.id}>
              <label>
                <input
                  {...{
                    type: "checkbox",
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{" "}
                {column.id}
              </label>
            </div>
          );
        })}
      </div>
      <hr />
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
