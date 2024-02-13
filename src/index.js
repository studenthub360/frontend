import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeedInsights>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SpeedInsights>
);
