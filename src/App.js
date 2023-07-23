import React from "react";
import "./App.css";

// components
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";
import GlobalFiltering from "./components/GlobalFiltering";
import ColumnFiltering from "./components/ColumnFiltering";
import PaginationTable from "./components/PaginationTable";
import SelectingRow from "./components/SelectingRow";
import ColumnOrdering from "./components/ColumnOrdering";
import ColumnHiding from "./components/ColumnHiding";
import MuiTable from './components/MuiTable';

function App() {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <GlobalFiltering /> */}
      {/* <ColumnFiltering /> */}
      {/* <PaginationTable /> */}
      {/* <SelectingRow /> */}
      {/* <ColumnOrdering /> */}
      {/* <ColumnHiding /> */}
      <MuiTable />
    </div>
  );
}

export default App;
