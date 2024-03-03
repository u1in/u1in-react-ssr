import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Page1 = (props) => {
  useEffect(() => {
    console.log(props.INIDATA);
  });

  return (
    <div onClick={() => console.log(11)}>
      <div>Page1</div>
      <Link to="/page2">/page2</Link>
    </div>
  );
};

Page1.initData = () => {
  return axios({
    baseURL: `http://127.0.0.1:${CONFIG.PORT}`,
    method: "GET",
    url: "/test",
  })
    .then((resp) => {
      return Promise.resolve(resp.data);
    })
    .catch((err) => console.log(err));
};

export default Page1;
