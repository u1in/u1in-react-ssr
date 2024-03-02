import { Navigate } from "react-router-dom";
import Page1 from "../src/Page1.jsx";
import Page2 from "../src/Page2.jsx";

const routes = [
  // {
  //   key: "/",
  //   path: "/",
  //   component: () => <Navigate to="/page1" />,
  // },
  {
    key: "/page1",
    path: "/page1",
    component: Page1,
  },
  {
    key: "/page2",
    path: "/page2",
    component: Page2,
  },
];

export default routes;
