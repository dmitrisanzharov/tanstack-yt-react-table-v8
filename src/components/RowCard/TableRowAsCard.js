import React from 'react';
import { TableRow, TableCell, Typography, Box, Divider } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { tableRowAsPanelSx, cellSx, titleSx, detailsSx } from './styles';

const TableRowAsCard = ({ row, ...rest }) => {

    const rowStyle = 1;
    const cellStyle = 1;

    return (
        <TableRow sx={rowStyle == 1 ? tableRowAsPanelSx : {}}>
            { row.getVisibleCells().map((cell) => {
                if (!(cell.column.getIsVisible() || cell.column.getCanHide())) {
                    return null;
                }
                return (
                    <TableCell className='outerCell' key={cell.id} sx={cellStyle == 1 ? cellSx : {}} style={{borderBottom: '1px solid lightgray', marginLeft: '4px', marginRight: '4px'}}>
                        <Typography variant='body2' sx={titleSx}>
                            {cell.column.columnDef.header}:
                        </Typography>
                        <Box sx={detailsSx}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box> 
                    </TableCell>
                );
            })}
             
        </TableRow>
    );
};

export default TableRowAsCard;