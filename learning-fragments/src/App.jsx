import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <>
      <div>Healthy Foods</div>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetables</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul>
    </>
  );
}

export default App;
