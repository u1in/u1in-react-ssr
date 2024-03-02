import React from "react";
import ServerRouter from "@routes/server";
import Layout from "@common/layout";
import { renderToString } from "react-dom/server";

const render = (url, data = {}) => {
  return renderToString(
    <Layout>
      <ServerRouter url={url} />
    </Layout>
  );
};

export default render;
