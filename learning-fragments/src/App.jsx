import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
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
