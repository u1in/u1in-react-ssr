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
    <div className="home-container">
      <HomeSVG height="200" width="300" />
      <div className="title">u1in-react-ssr</div>
      <div className="library">
        <span>React-SSR</span>
        <span>Webpack 5</span>
        <span>React 18</span>
        <span>React Router 6</span>
        <span>Babel 7</span>
      </div>
      <div>Render Mode: {renderMode}</div>
      <pre>Response Data: {helloText}</pre>
      <div
        className="link"
        onClick={() => {
          navigate("/page1");
        }}
      >
        Test Navigate To Page1
      </div>
    </div>
  );
};

export default Page;
