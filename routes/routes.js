import React from "react";
import { Navigate } from "react-router-dom";
import Home from "@src/pages/home";

const routes = [
  {
    key: "/",
    path: "/",
    component: () => <Navigate to="/home" />,
  },
  {
    key: "/home",
    path: "/home",
    component: Home,
  },
];

export default routes;
