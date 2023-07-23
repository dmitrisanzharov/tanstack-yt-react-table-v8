import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import dataJSON from "./data.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = () => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <>
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <TableRow key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <TableCell key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        <TableBody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <TableRow key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <TableCell key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
         </TableBody>
      </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
