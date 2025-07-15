import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleOnClick = (event) => {
    console.log(event);
    console.log(`Item being bought: ${foodItem}`);
  };
  return (
    <li className={`${styles["item"]} list-group-item`}>
      <span className={styles["item-span"]}>{foodItem}</span>
      <button
        className={`${styles["button"]} btn btn-info`}
        onClick={(event) => handleOnClick(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
