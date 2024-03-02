import React from "react";
import { hydrateRoot } from "react-dom/client";
import ClientRouter from "@routes/client";

const App = () => <ClientRouter />;

hydrateRoot(document.getElementById("app"), <App />);
