import React from "react";
import { StaticRouter } from "react-router-dom/server";
import Router from "@routes/router";

const ServerRouter = (props) => (
  <StaticRouter location={props?.url}>
    <Router />
  </StaticRouter>
);

export default ServerRouter;
