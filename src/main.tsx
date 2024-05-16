import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import express from "express";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);