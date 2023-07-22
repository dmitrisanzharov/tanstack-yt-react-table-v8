import React from "react";
import "./App.css";

// components
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";
import GlobalFilter from "./components/GlobalFilter";
import ColumnFilter from "./components/ColumnFilter";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import ColumnOrdering from "./components/ColumnOrdering";
import ColumnHidding from "./components/ColumnHidding";

function App() {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <GlobalFilter /> */}
      {/* <ColumnFilter /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrdering /> */}
      <ColumnHidding />
    </div>
  );
}

export default App;
