import React from "react";
import manifest from "@root/build/client/manifest.json";

const getExt = (filename) => {
  if (typeof filename === "string") {
    const fileNameArr = filename.split(".");
    return fileNameArr[fileNameArr.length - 1].toLocaleLowerCase();
  }
  return "";
};

const manifestObj = {};
Object.keys(manifest).map((filename) => {
  const ext = getExt(filename);
  if (manifestObj[ext] === undefined) {
    manifestObj[ext] = [];
  }
  manifestObj[ext].push(manifest[filename]);
});

const Layout = ({ children, serverData }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <title>u1in-react-isomorphic-render</title>
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
        {manifestObj.css.map((link) => (
          <link key={"preload" + link} rel="preload" href={link} as="style" />
        ))}
        {manifestObj.js.map((link) => (
          <link key={"preload" + link} rel="preload" href={link} as="script" />
        ))}
        {manifestObj.css.map((link) => (
          <link key={link} rel="stylesheet" href={link} />
        ))}
      </head>

      <body>
        <div id="app">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__SERVER_DATA__ = ${JSON.stringify(serverData)}`,
          }}
        ></script>
        {manifestObj.js.map((link) => (
          <script key={link} src={link}></script>
        ))}
      </body>
    </html>
  );
};

export default Layout;
