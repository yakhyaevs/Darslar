import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.js";
import Navbar from "./Navbar";
import fruit from "./pineapple.png";

const data = [
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
  { name: "pineapple", image: fruit },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      {data.map((value) => {
        return <Navbar title={value} />;
      })}
    </div>
  </React.StrictMode>
);
