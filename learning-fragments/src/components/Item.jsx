import styles from "./Item.module.css";
console.log(styles);
const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["item"]} list-group-item`}>
      <span className={styles["item-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
