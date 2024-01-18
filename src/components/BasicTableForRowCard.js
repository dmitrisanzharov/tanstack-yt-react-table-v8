import React from 'react';
import './table.css';
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { columnDef, columnDefWithFilter } from './columns';
import dataJSON from './data.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// components
import TableRowAsCard from '../components/RowCard/TableRowAsCard';


const BasicTableForRowCard = () => {
    const finalData = React.useMemo(() => [dataJSON[0]], []);
    const finalColumnDef = React.useMemo(() => columnDefWithFilter, []);

    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
    });

    //   console.log("test", tableInstance.getHeaderGroups());

    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                {/* <TableHead>
                    {tableInstance.getHeaderGroups().map((headerEl) => {
                        return (
                            <TableRow key={headerEl.id}>
                                {headerEl.headers.map((columnEl) => {
                                    return (
                                        <TableCell key={columnEl.id} colSpan={columnEl.colSpan}>
                                            {columnEl.isPlaceholder ? null : flexRender(columnEl.column.columnDef.header, columnEl.getContext())}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableHead> */}
                <TableBody>
                    {tableInstance.getRowModel().rows.map((rowEl) => {
                        return (
                           <TableRowAsCard row={rowEl} key={rowEl.id}/>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTableForRowCard;
