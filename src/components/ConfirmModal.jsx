import React, { useContext } from "react";
import OrderLists from "./OrderLists";
import ProductContext from "../context/ProductContext";

const ConfirmModal = ({ showOrderLists, setShowOrderLists }) => {
  const { setSelectedItems } = useContext(ProductContext);
  const resetOrder = () => {
    setSelectedItems([]);
    setShowOrderLists((showOrderLists) => !showOrderLists);
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-custom-color-martini overflow-hidden">
      <div className="absolute left-0 top-20 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] bg-white w-full h-[90vh] md:h-[70vh] md:w-2/6 rounded-lg p-5 overflow-auto">
        <div className="my-2">
          <img src="../../assets/images/icon-order-confirmed.svg" alt="icon confirmed" />
        </div>
        <h2 className="text-4xl py-3 font-bold w-1/2">Order Confirmed</h2>
        <p className="mb-5 text-custom-color-pharlap">
          We hope you enjoy your food!
        </p>
        <OrderLists isConfirm={true} />
        <button
          onClick={resetOrder}
          className="bg-custom-color-tiaMaria text-white my-5 p-3 w-full rounded-full"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
