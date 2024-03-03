import React from "react";
import { hydrateRoot } from "react-dom/client";
import ClientRouter from "@routes/client";

hydrateRoot(document.getElementById("app"), <ClientRouter />);
