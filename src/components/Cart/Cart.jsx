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
    <div className="w-full md:w-1/3 bg-custom-colo">
      <h2 className="mt-4 p-4 text-custom-color6 font-bold text-xl bg-white">
        Your Cart ({totalCount})
      </h2>
      <ItemInfo />
    </div>
  );
};

export default Cart;
