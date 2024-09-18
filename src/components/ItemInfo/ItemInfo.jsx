import React, { useContext } from "react";
import { MyContext } from "../../App";
import OrderLists from "../OrderLists/OrderLists";

const ItemInfo = () => {
  const { selectedItems, setSelectedItems } = useContext(MyContext);

  function deleteItem(id) {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
  }

  return (
    <div>
      {selectedItems.length === 0 ? (
        <p>Your added items will appear here</p>
      ) : (
        <OrderLists isConfirm={true} />
      )}
    </div>
  );
};

export default ItemInfo;
