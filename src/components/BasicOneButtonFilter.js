import React from 'react';
import './table.css';
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

const BasicOneButtonFilter = () => {
    const finalData = React.useMemo(() => dataJSON, []);
    const finalColumnDef = React.useMemo(() => columnDef, []);

    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel()
    });



    function handleFilter(arg){
        let allColumns = tableInstance.getAllColumns(); 
        console.log("allColumns: ", allColumns);

        let fName = allColumns.filter(el=> el.id === "First Name")[0];
        console.log("fName: ", fName);

        fName.setFilterValue(arg)
    }




    //   console.log("test", tableInstance.getHeaderGroups());

    return (
        <>
            <button onClick={()=> handleFilter('Grady')}>Grady</button>
            <button onClick={()=> handleFilter('Tana')}>Tana</button>
            <button onClick={()=> handleFilter('')}>Reset</button>
            <hr />
            <table>
                <thead>
                    {tableInstance.getHeaderGroups().map((headerEl) => {
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
                    {tableInstance.getRowModel().rows.map((rowEl) => {
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

export default BasicOneButtonFilter;
