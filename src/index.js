import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Due to scrict mode app will render twice(this will happen only in development)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
