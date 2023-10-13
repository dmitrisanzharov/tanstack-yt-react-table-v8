

function firstNameFilterFn(row, columnId, filterValue){
    // console.log('row is being called', row);
    // console.log('columnId', columnId);
    // console.log('filterValue', filterValue);
    // console.log('original Object', row.original);
    // console.log('============================');

    if(columnId === 'first_name'){
        let test = row.original.first_name.includes(filterValue); // a
        return test ? true : false;
    }

    if(columnId === 'email'){
        let test = row.original.email.includes(filterValue); // .me
        return test ? true : false;
    }

    // return false;

}

firstNameFilterFn.autoRemove = (val) => !val;


function firstNameAccessorFn(row){
    // console.log('row', row);

    if(row.first_name === 'Tommy' || row.first_name === 'Delila'){
        row.first_name = 'ha_anyValue';
        return row.first_name;
    }

    return row.first_name;
}


function lastNameCellFn(cell){
    console.log('cell', cell);

    return (<span style={{color: 'red'}}>{cell.getValue()}</span>)
}



const columnDef = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'first_name',
        header: 'First Name',
        filterFn: firstNameFilterFn,
        accessorFn: firstNameAccessorFn,
    },
    {
        accessorKey: 'last_name',
        header: 'Last Name',
        cell: lastNameCellFn
    },
    {
        accessorKey: 'email',
        header: 'Email',
        filterFn: firstNameFilterFn
    },
    {
        accessorKey: 'date',
        header: 'Date',
        enableColumnFilter: false,
    },
];

export default columnDef;
