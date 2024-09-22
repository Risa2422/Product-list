import React, { useContext, useState } from "react";
import ProductContext from "../../context/ProductContext";
import OrderLists from "../OrderLists/OrderLists";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const ItemInfo = () => {
  const { selectedItems, setSelectedItems } = useContext(ProductContext);
  const [showOrderLists, setShowOrderLists] = useState(false);

  const handleClick = () => {
    setShowOrderLists(true);
  };

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
          <button onClick={handleClick}>Confirm</button>
          {showOrderLists && <ConfirmModal />}
        </>
      )}
    </div>
  );
};

export default ItemInfo;
