import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
