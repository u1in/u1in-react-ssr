import React from "react";
import { hydrateRoot } from "react-dom/client";
import ClientRouter from "@routes/utils/client";

hydrateRoot(document.getElementById("app"), <ClientRouter />);
