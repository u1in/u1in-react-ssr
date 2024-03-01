import React from "react";
import Routes from "./routes";
import { matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Layout from "./Layout";
import NotFound from "./NotFound";

const render = (url, data = {}) => {
  const CurrentRoute = Routes.find((route) => matchPath(route, url))?.component;
  return CurrentRoute
    ? renderToString(
        <Layout>
          <CurrentRoute __server_data__={data} />
        </Layout>
      )
    : renderToString(<NotFound />);
};

export default render;
