import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  let [foodItems, setFoodItems] = useState(["Dal", "Green Vegetables", "Roti"]);

  // let textStateArr = useState("Food item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  let [textToShow, setTextState] = useState();
  // console.log(`Current value of text State is ${textToShow}`);

  const onKeyDown = (event) => {
    // console.log(event);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
