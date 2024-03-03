import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import router from "@routes/routes";

const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to={router[0].path} />}></Route>
    {router.map((router) => (
      <Route key={router.key} path={router.path} Component={router.component} />
    ))}
  </Routes>
);

export default Router;
