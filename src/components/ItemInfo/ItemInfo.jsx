import React, { useContext } from "react";
import { ProductContext } from "../../App";
import OrderLists from "../OrderLists/OrderLists";
import ConfirmButton from "../ConfirmButton/ConfirmButton";

const ItemInfo = () => {
  const { selectedItems, setSelectedItems } = useContext(ProductContext);

  return (
    <div>
      {selectedItems.length === 0 ? (
        <p>Your added items will appear here</p>
      ) : (
        <>
          <OrderLists isConfirm={false} />
          <div>
            This is a <strong>carbon-neutral</strong> delivery
          </div>
          <ConfirmButton />
        </>
      )}
    </div>
  );
};

export default ItemInfo;
