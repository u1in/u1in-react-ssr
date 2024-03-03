import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import router from "@routes/routes";
import RouteContext from "@routes/utils/context";

const RouterWrap = ({ component }) => {
  const INIDATA = useContext(RouteContext);
  return React.createElement(component, { INIDATA });
};

const Router = () => (
  <Routes>
    {router.map((router) => (
      <Route
        key={router.key}
        path={router.path}
        element={<RouterWrap component={router.component} />}
      />
    ))}
  </Routes>
);

export default Router;
