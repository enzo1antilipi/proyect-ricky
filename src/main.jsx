import React from "react";
import ReactDOM from "react-dom/client";
import { RickyApp } from "./RickyApp";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css"; //

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RickyApp />
  </React.StrictMode>
);
