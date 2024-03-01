import React from "react";
import Manifest from "@root/dist/client/manifest.json";

const Layout = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <title>React MSR</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `body,
          html,
          #app {
            margin: 0;
            padding: 0;
            width: 100%;
          }`,
          }}
        ></style>
      </head>

      <body>
        <div id="app">{props?.children}</div>
        {Object.keys(Manifest).map((resource) => (
          <script src={Manifest[resource]}></script>
        ))}
      </body>
    </html>
  );
};

export default Layout;
