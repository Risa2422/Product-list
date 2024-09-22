import React, { useContext, useState } from "react";
import ProductContext from "../../context/ProductContext";
import OrderLists from "../OrderLists/OrderLists";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const ItemInfo = () => {
  const { selectedItems } = useContext(ProductContext);
  const [showOrderLists, setShowOrderLists] = useState(false);

  const handleClick = () => {
    setShowOrderLists(true);
  };

  return (
    <div className="m-4 mt-0 py-4 px-6 bg-white">
      {selectedItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <div>
            <img
              src="../../assets/images/illustration-empty-cart.svg"
              alt=""
              className="w-full"
            />
          </div>
          <p className="text-custom-color4">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <OrderLists isConfirm={false} />
          <div className="flex items-center justify-center rounded-sm p-4 bg-custom-color gap-1">
            <img src="../../assets/images/icon-carbon-neutral.svg" alt="" />
            This is a{" "}
            <span className="text-custom-color5 font-medium">
              carbon-neutral
            </span>{" "}
            delivery
          </div>
          <button
            onClick={handleClick}
            className="bg-custom-color6 text-white my-5 p-3 w-full rounded-full"
          >
            Confirm Order
          </button>
          {showOrderLists && <ConfirmModal />}
        </>
      )}
    </div>
  );
};

export default ItemInfo;
