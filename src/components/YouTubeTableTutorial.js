import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import  columnDef  from "./columnDef";
import dataJSON from "./data.json";

const BasicTable = () => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const table = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });


  const [count, setCount] = React.useState(0)


//   React.useEffect(() => {

//     if(count === 5){
//         return
//     }

//     let a = table.getState().columnFilters;
//     // console.log('tableState', a);

//     table.getHeaderGroups().map(headersArr => {
        
//         // console.log('headersArr', headersArr);
//         headersArr.headers.map(columnObject => {
//             // console.log('columnObject', columnObject);
//             // console.log('singleColumn', columnObject.column);
//             // console.log('name', columnObject.column.id);
//             // console.log('can be fitlered?', columnObject.column.getCanFilter());

//             if(columnObject.column.id === 'first_name'){
//                 columnObject.column.setFilterValue('ha');
//                 // console.log('filter value is: ', columnObject.column.getFilterValue());
                
//             }

//             if(columnObject.column.id === 'email'){
//                 columnObject.column.setFilterValue(null);
//                 // console.log('filter value is: ', columnObject.column.getFilterValue());
                
//             }
//         })

//     })
//     setCount(count+1);
//     console.log('============================');
//   }, [count,  table]);

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerEl) => {
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
          {table.getRowModel().rows.map((rowEl) => {
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