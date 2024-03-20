import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import IndeterminateCheckbox from "./IndeterminateCheckbox";


function myFn(row, columnId, filterValue){

  console.log('row', row);
  console.log('value', row.getValue(columnId));
  console.log('columnId', columnId);
  console.log('filterValue', filterValue);
  console.log('============================');

  

  // if(row.id === '1'){
  //   console.log('row', row);
  //   console.log('columnId', columnId);
  //   console.log('value', filterValue);

  //   return true
  // } 

  return false;


  // console.log('row', row);
  // console.log('columnId', columnId);
  // console.log('value', filterValue);
  // console.log('++++++++++++++++++++++++++++');

}

myFn.autoRemove = (val) => console.log('yayay', val);


function myFn2(row){
  console.log('row2', row)
  if(row.first_name === 'Tommy' || row.first_name === 'Delila'){
    row.first_name = 'Mah Man';
    return row.first_name;
    // return (<span style={{color: 'green'}}>{row.first_name}</span>);
  }
  return row.first_name;
}


function myFn3(cell){
  // console.log(cell);
  return (<span style={{color: 'red'}}>{cell.getValue() + ` ${Math.random()}`}</span>)
}


const columnHelper = createColumnHelper();

export const columnDef = [
  columnHelper.accessor(row => `${row.id}, ${row.gender}`, {
    id: 'id',
    header: "Id",
    enableHidding: true,
    cell: (info) => <div>hello</div>
  }),
  columnHelper.accessor((row) => row.first_name, { 
    id: 'first_name',
    header: "First Name",
  }),
  {
    accessorKey: "last_name",
    header: "Last Name",
  }
];

// cell merge example
const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: "Name",
  },
];

export const columnDefWithGrouping = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    header: "Name",
    columns: [
      {
        accessorFn: (row) => `${row.first_name}`,
        header: "First Name",
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
      },
    ],
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];

// columnDef with Filters

export const columnDefWithFilter = [
  columnHelper.accessor("id", {
    header: "Id",
    enableColumnFilter: false,
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter: false,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
];

export const columnDefWithCheckBox = [
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
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  },
];

