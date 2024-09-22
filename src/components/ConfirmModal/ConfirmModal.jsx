import React, { useContext } from "react";
import OrderLists from "../OrderLists/OrderLists";
import ProductContext from "../../context/ProductContext";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = () => {
  const { setSelectedItems } = useContext(ProductContext);
  const resetOrder = () => {
    setSelectedItems([]);
  };

  return (
    <div className={styles.confirmModal_container}>
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      <OrderLists isConfirm={true} />
      <button onClick={resetOrder}>Start New Order</button>
    </div>
  );
};

export default ConfirmModal;
