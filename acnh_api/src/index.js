import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
//Importing React Router's Router to wrap entire app
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
