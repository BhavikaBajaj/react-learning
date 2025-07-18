import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles["item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["item-span"]}>{foodItem}</span>
      <button
        className={`${styles["button"]} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
