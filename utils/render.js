import React from "react";
import ServerRouter from "@routes/utils/server";
import { matchPath } from "react-router-dom";
import Layout from "@common/layout";
import { renderToString } from "react-dom/server";
import on from "await-handler";
import routes from "@routes/routes";

const render = async (url) => {
  const CurrentRoute = routes.find((route) => matchPath(route, url))?.component;
  const [_err, data] =
    CurrentRoute?.initData && CurrentRoute.initData instanceof Function
      ? await on(CurrentRoute.initData())
      : [undefined, undefined];
  return renderToString(
    <Layout serverData={data}>
      <ServerRouter url={url} serverData={data} />
    </Layout>
  );
};

export default render;
