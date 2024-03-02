import React from "react";
import { Routes, Route } from "react-router-dom";
import router from "./routes";

const Router = () => (
  <Routes>
    {router.map((router) => (
      <Route key={router.key} path={router.path} Component={router.component} />
    ))}
  </Routes>
);

export default Router;
