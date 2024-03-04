import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.less";
import HomeSVG from "@images/home.svg";

const Page = () => {
  const navigate = useNavigate();
  const [helloText, setHelloText] = useState("");
  const [renderMode, setRenderMode] = useState("");

  useEffect(() => {
    axios({
      baseURL: `http://127.0.0.1:${CONFIG.PORT}`,
      method: "GET",
      url: "/hello",
    })
      .then(({ data }) => {
        setHelloText(data.hello);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setRenderMode(window.SERVER_DATA?.mode);
  }, []);

  return (
    <div className="page-container">
      <HomeSVG height="200" width="300" />
      <div className="title">Page1</div>
      <div>Render Mode: {renderMode}</div>
      <pre>Response Data: {helloText}</pre>
      <div
        className="link"
        onClick={() => {
          navigate("/");
        }}
      >
        Test Navigate To /
      </div>
    </div>
  );
};

export default Page;
