import React, { useContext } from "react";
import ItemInfo from "../ItemInfo/ItemInfo";
import ProductContext from "../../context/ProductContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { selectedItems } = useContext(ProductContext);
  let totalCount = 0;

  selectedItems.forEach((item) => {
    totalCount += item.count;
  });

  return (
    <div className="bg-custom-color">
      <h2 className="m-4 px-6 pt-5 pb-0 mb-0 text-custom-color6 font-bold text-xl bg-white">
        Your Cart({totalCount})
      </h2>
      <ItemInfo />
    </div>
  );
};

export default Cart;
