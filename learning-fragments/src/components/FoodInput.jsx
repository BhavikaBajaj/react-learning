import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles["food-input"]}
      onChange={handleOnChange}
    />
  );
};
export default FoodInput;
