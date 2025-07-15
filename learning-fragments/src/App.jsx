import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the list of healthy foods for well being.</p>
      </Container> */}
    </>
  );
}

export default App;
