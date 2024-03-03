import React from "react";
import ServerRouter from "@routes/server";
import Layout from "@common/layout";
import { renderToString } from "react-dom/server";

const csrRenderToString = renderToString(<Layout />);

const render = (url) => {
  // Client Side Render
  if (process.env.CSR === "true") {
    return csrRenderToString;
  }

  // Isomorphic Render
  if (process.env.CSR !== "true") {
    return renderToString(
      <Layout>
        <ServerRouter url={url} />
      </Layout>
    );
  }
};

export default render;
