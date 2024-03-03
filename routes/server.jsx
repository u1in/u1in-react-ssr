import React from "react";
import { StaticRouter } from "react-router-dom/server";
import Router from "@routes/router";
import RouteContext from "@routes/context";

const ServerRouter = ({ url, serverData }) => (
  <RouteContext.Provider value={serverData}>
    <StaticRouter location={url}>
      <Router />
    </StaticRouter>
  </RouteContext.Provider>
);

export default ServerRouter;
