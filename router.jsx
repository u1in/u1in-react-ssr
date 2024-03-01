import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {router.map((router) => (
        <Route
          key={router.key}
          path={router.path}
          Component={router.component}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
