import React from "react";
import "./App.css";

// components
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";
import GlobalFiltering from "./components/GlobalFiltering";
import ColumnFiltering from "./components/ColumnFiltering";
import PaginationTable from "./components/PaginationTable";

function App() {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <GlobalFiltering /> */}
      {/* <ColumnFiltering /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
