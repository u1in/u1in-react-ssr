import React from "react";
import ServerRouter from "@routes/utils/server";
import { matchPath } from "react-router-dom";
import Layout from "@common/layout";
import { renderToString } from "react-dom/server";
import routes from "@routes/routes";

const render = async (url) => {
  const CurrentRoute = routes.find((route) => matchPath(route, url))?.component;
  const data = await CurrentRoute?.initData?.();
  return renderToString(
    <Layout serverData={data}>
      <ServerRouter url={url} serverData={data} />
    </Layout>
  );
};

export default render;
