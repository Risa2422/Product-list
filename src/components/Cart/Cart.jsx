import React, { useContext } from "react";
import ItemInfo from "../ItemInfo/ItemInfo";
import { MyContext } from "../../App";
import styles from "./Cart.module.css";

const Cart = () => {
  const { selectedItems } = useContext(MyContext);
  let totalCount = 0;

  selectedItems.forEach((item) => {
    totalCount += item.count;
  });

  return (
    <div className={styles.cart_container}>
      <h2>Your Cart({totalCount})</h2>
      <ItemInfo />
    </div>
  );
};

export default Cart;
