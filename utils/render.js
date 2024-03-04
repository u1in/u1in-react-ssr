import React from "react";
import ServerRouter from "@routes/server";
import Layout from "@common/layout";
import { renderToString } from "react-dom/server";

const csrRenderToString = renderToString(<Layout data={{ mode: "CSR"}} />);

const render = (url) => {
  // Client Side Render
  if (process.env.CSR === "true") {
    return csrRenderToString;
  }

  // SSR Render
  if (process.env.CSR !== "true") {
    return renderToString(
      <Layout data={{ mode: "SSR"}}>
        <ServerRouter url={url}  />
      </Layout>
    );
  }
};

export default render;
