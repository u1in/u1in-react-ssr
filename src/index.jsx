import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import ClientRouter from "@routes/client";

const ele = document.getElementById("app");
if (window.SERVER_DATA?.mode === "SSR") {
  hydrateRoot(ele, <ClientRouter />);
}

if (window.SERVER_DATA?.mode === "CSR") {
  createRoot(ele).render(<ClientRouter />);
}
