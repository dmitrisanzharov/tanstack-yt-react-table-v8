import React from "react";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

export const columnDef = [
  {
    accessorKey: "id",
  },
  {
    accessorKey: "first_name",
  },
  {
    accessorKey: "last_name",
  },
  {
    accessorKey: "date",
    // cell: ({ getValue }) => `${getValue()} mah man`,
  },
];

export const columnDefMerge = [
  {
    accessorKey: "id",
  },
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: "name",
  },
  {
    accessorKey: "date",
  },
];

export const columnDefGroup = [
  {
    accessorKey: "id",
  },
  {
    header: "name",
    columns: [
      {
        accessorKey: "first_name",
      },
      {
        accessorKey: "last_name",
      },
    ],
  },
  {
    accessorKey: "date",
  },
];

export const columnDefWithSelect = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    accessorKey: "id",
  },
  {
    accessorKey: "first_name",
  },
  {
    accessorKey: "last_name",
  },
  {
    accessorKey: "date",
    // cell: ({ getValue }) => `${getValue()} mah man`,
  },
];
