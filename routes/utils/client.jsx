import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "@routes/router";
import RouteContext from "@routes/utils/context";

const ClientRouter = () => (
  <RouteContext.Provider value={window.__SERVER_DATA__}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </RouteContext.Provider>
);

export default ClientRouter;
