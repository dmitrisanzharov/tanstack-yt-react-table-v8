import React from "react";
import "./table.css";
import {
  columnDef,
  columnDefMerge,
  columnDefGroup,
  columnDefWithSelect,
} from "./columns";
import dataJSON from "./data";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

const BasicTable = () => {
  const dataFinal = React.useMemo(() => dataJSON, []);
  const columnsFinal = React.useMemo(() => columnDefWithSelect, []);

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    columns: columnsFinal,
    data: dataFinal,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection: rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  //   console.log(table.getRowModel());

  return (
    <>
      <ul>
        {table.getSelectedRowModel().flatRows.map((el) => {
          console.log("elTest", el);
          return (
            <li key={el.id}>
              {Number(el.id) + 1} - {JSON.stringify(el.original)}
            </li>
          );
        })}
      </ul>
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
