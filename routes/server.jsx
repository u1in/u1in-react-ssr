import React from "react";
import { StaticRouter } from "react-router-dom/server";
import Router from "@routes/router";

const ServerRouter = ({ url }) => {
  return (
    <StaticRouter location={url}>
      <Router />
    </StaticRouter>
  );
};

export default ServerRouter;
