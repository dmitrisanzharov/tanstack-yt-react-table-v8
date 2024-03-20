import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import dataJSON from "./data.json";


const BasicTableMessingAround = () => {

    const initialColumnVisibility = {
        id: true
    }

    const [vis, setVis] = React.useState(initialColumnVisibility)


  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:   getFilteredRowModel(),
    state: {
        columnVisibility: vis
    },
    onColumnVisibilityChange: setVis,
  });

    // console.log("headers", tableInstance.getHeaderGroups());
    // console.log("rows");



  return (
    <>
        <button onClick={()=> setVis({...vis, id: false})}>change</button>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {

            // console.log('header', headerEl);

            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {

                  // console.log('column', columnEl);

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

            console.log('row', rowEl);


            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {

                  // console.log('cell', cellEl);


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

export default BasicTableMessingAround;
