import React, { useContext } from "react";
import OrderLists from "../OrderLists/OrderLists";
import { MyContext } from "../../App";

const ConfirmModal = () => {
  const { selectedItems, setSelectedItems, isInCart, setIsInCart } =
    useContext(MyContext);

  const resetOrder = () => {
    setSelectedItems([]);
    setIsInCart((isInCart) => {
      let newObj = {};
      for (const key in isInCart) {
        newObj[key] = false;
      }
      return newObj;
    });
  };

  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <OrderLists isConfirm={true} />
      <button onClick={resetOrder}>Start New Order</button>
    </div>
  );
};

export default ConfirmModal;
