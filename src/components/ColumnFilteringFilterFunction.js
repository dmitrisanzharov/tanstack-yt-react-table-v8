import React from 'react';
import './table.css';
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

const BasicTable = () => {
    const finalData = React.useMemo(() => dataJSON, []);
    const finalColumnDef = React.useMemo(() => columnDef, []);

    const [count, setCount] = React.useState(0);

    const table = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    //   console.log("test", table.getHeaderGroups());

    React.useEffect(() => {

      if(count === 10){
        return;
      }


        let a = table.getState().columnFilters;
        // console.log(a);

        table.getHeaderGroups().map((header) => {
            // console.log(headers);
            header.headers.map((column) => {
                // console.log(column);
                if (column.id === 'last_name') {
                    // console.log(column.column);
                    column.column.setFilterValue('a');
                }
                if (column.id === 'email') {
                  // console.log(column.column);
                  column.column.setFilterValue('m');
              }
              if (column.id === 'id') {
                // console.log(column.column);
                column.column.setFilterValue('1');
            }
            });
        });
        // setCount(count+1)
        // console.log('count', count);
        // console.log('============================');
    }, [count, table]);

    return (
        <>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerEl) => {
                        return (
                            <tr key={headerEl.id}>
                                {headerEl.headers.map((columnEl) => {
                                    return (
                                        <th
                                            key={columnEl.id}
                                            colSpan={columnEl.colSpan}
                                        >
                                            {columnEl.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      columnEl.column.columnDef
                                                          .header,
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
