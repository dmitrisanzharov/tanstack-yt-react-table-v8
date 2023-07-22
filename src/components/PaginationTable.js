import React from "react";
import "./table.css";
import { columnDef } from "./columns";
import dataJSON from "./data";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => dataJSON, []);
  const columnsFinal = React.useMemo(() => columnDef, []);

  const table = useReactTable({
    columns: columnsFinal,
    data: dataFinal,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  //   console.log(table.getRowModel());

  return (
    <>
      <button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<<"}
      </button>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        previous
      </button>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        next
      </button>
      <button
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {">>>"}
      </button>
      <hr />
      <ul>
        <li>Current page: {table.options.state.pagination.pageIndex}</li>
        <li>Total page count: {table.getPageCount() - 1}</li>
        <li>
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => table.setPageIndex(e.target.value)}
          />
        </li>
      </ul>
      <hr />
      <select
        value={table.options.state.pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
      >
        {[10, 25, 50].map((pageSizeEl) => {
          return (
            <option key={pageSizeEl} value={pageSizeEl}>
              Show: {pageSizeEl}
            </option>
          );
        })}
      </select>
      <hr />
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
