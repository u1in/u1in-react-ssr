import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "@common/layout";
import Router from "@routes/router";

const ClientRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default ClientRouter;
