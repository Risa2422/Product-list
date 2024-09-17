import React from "react";
import ItemInfo from "../ItemInfo/ItemInfo";
import ConfirmButton from "../ConfirmButton/ConfirmButton";

const Cart = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ItemInfo />
      <ConfirmButton />
      <div>
        count
      </div>
    </div>
  );
};

export default Cart;
