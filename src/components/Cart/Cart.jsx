import React, { useContext } from "react";
import ItemInfo from "../ItemInfo/ItemInfo";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { MyContext } from "../../App";

const Cart = () => {
  const selectedItems = useContext(MyContext);
  let totalCount = 0;

  selectedItems[0].map((item) => {
    return (totalCount = totalCount + item.count);
  });

  return (
    <div>
      <h2>Your Cart({totalCount})</h2>
      <ItemInfo />
      <ConfirmButton />
      <div>count</div>
    </div>
  );
};

export default Cart;
