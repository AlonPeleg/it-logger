import React, { useEffect, Fragment } from "react";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import Addbtn from "./components/layout/Addbtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Addbtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
