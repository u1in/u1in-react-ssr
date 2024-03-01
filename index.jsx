import React from "react";
import { hydrateRoot } from "react-dom/client";
import Router from "./router";

const App = () => <Router />;

hydrateRoot(document.getElementById("app"), <App />);
