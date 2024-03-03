import React from "react";
import axios from "axios";
import "./index.less";
import HomeSVG from "@images/home.svg";

const Page = (props) => {
  return (
    <div className="page-container">
      <HomeSVG height="200" width="300" />
      <div className="title">Page1</div>
      <pre>PreLoad Data: {JSON.stringify(props?.INITDATA)}</pre>
    </div>
  );
};

Page.initData = () => {
  return axios({
    baseURL: `http://127.0.0.1:${CONFIG.PORT}`,
    method: "GET",
    url: "/hello",
  })
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default Page;
