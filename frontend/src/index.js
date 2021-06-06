import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("app")
);
