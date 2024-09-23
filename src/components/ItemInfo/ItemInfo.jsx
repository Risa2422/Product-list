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
    <div className="bg-white">
      {selectedItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <div>
            <img
              src="../../assets/images/illustration-empty-cart.svg"
              alt=""
              className="w-full"
            />
          </div>
          <p className="pb-3 text-custom-color-beaver">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <OrderLists isConfirm={false} />
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center rounded-sm py-3  w-5/6 bg-custom-color-fantasy gap-1">
              <img src="../../assets/images/icon-carbon-neutral.svg" alt="" />
              This is a
              <span className="text-custom-color-graphite font-medium">
                carbon-neutral
              </span>
              delivery
            </div>
            <button
              onClick={handleClick}
              className=" bg-custom-color-tiaMaria text-white my-4 p-3 w-5/6 rounded-full"
            >
              Confirm Order
            </button>
          </div>
          {showOrderLists && (
            <ConfirmModal
              showOrderLists={showOrderLists}
              setShowOrderLists={setShowOrderLists}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ItemInfo;
