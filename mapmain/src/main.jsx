import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App.jsx";

const script = document.createElement("script");
script.src = "https://www.googletagmanager.com/gtag/js?id=G-LQZ1Q66D33";
script.async = true;
document.head.appendChild(script);

script.onload = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-LQZ1Q66D33");
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
