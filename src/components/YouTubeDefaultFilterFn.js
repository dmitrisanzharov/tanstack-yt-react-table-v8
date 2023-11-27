import React from 'react';
import './table.css';
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { columnDefDefaultFn } from './columnDef';
import dataJSON from './data.json';

const BasicTable = () => {
    const finalData = React.useMemo(() => dataJSON, []);
    const finalColumnDef = React.useMemo(() => columnDefDefaultFn, []);

    const table = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const [filterValue, setFilterValue] = React.useState(['a']);

    React.useEffect(() => {
        table.getHeaderGroups().map((headersArr) => {
            headersArr.headers.map((columnObject) => {
                if (columnObject.column.id === 'first_name') {
                    console.log('column', columnObject)
                    let a = columnObject.column.getFacetedUniqueValues(); // Open up ROW OR flatRows OR RowsById _catchValue
                    console.log(a);
                    console.log('============================');
                    columnObject.column.setFilterValue(filterValue);
                }
            });
        });
    }, [table, filterValue]);

    return (
        <>
            <input type='text' value={filterValue} onChange={(e) => setFilterValue(e.target.value)} placeholder='firstName filter' />
            <hr />
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerEl) => {
                        return (
                            <tr key={headerEl.id}>
                                {headerEl.headers.map((columnEl) => {
                                    return (
                                        <th key={columnEl.id} colSpan={columnEl.colSpan}>
                                            {columnEl.isPlaceholder ? null : flexRender(columnEl.column.columnDef.header, columnEl.getContext())}
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
                                    return <td key={cellEl.id}>{flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}</td>;
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
