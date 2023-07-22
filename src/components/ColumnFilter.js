import React from "react";
import "./table.css";
import { columnDef, columnDefMerge, columnDefGroup } from "./columns";
import dataJSON from "./data";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Filter from "./Filter";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => dataJSON, []);
  const columnsFinal = React.useMemo(() => columnDef, []);

  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    columns: columnsFinal,
    data: dataFinal,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
  });

  //   console.log(table.getRowModel());

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {
                        <>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </>
                      }
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
