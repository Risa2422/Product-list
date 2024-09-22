import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const OrderLists = ({ isConfirm }) => {
  const { selectedItems, setSelectedItems } = useContext(ProductContext);
  const orderTotal = selectedItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  function deleteItem(id) {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
  }

  return (
    <div className={`mt-3 p-4 ${isConfirm ? "bg-custom-color" : "bg-white"}`}>
      <ul className={`rounded-sm ${isConfirm ? "bg-custom-color" : ""}`}>
        {selectedItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b pt-2 pb-2 items-center"
          >
            <div className="flex flex-col">
              {isConfirm ? (
                <div>
                  <img src="" alt="" />
                </div>
              ) : (
                ""
              )}
              <div className="text-custom-color5">{item.name}</div>
              <div className="flex space-x-3 my-1">
                <div className="text-custom-color6">{item.count}x</div>
                <div className="pl-1 text-custom-color2">@${item.price}</div>
                {isConfirm ? (
                  ""
                ) : (
                  <div className="text-custom-color3">${item.total()}</div>
                )}
              </div>
            </div>
            {isConfirm ? (
              <div className="text-custom-color5 font-medium">
                ${item.total()}
              </div>
            ) : (
              <button
                onClick={() => deleteItem(item.id)}
                className="flex justify-center items-center border border-custom-color2 rounded-full flex-custom h-5"
              >
                <img src="../../assets/images/icon-remove-item.svg" alt="" />
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center my-3">
        <p className=" text-custom-color4 ">Order Total</p>
        <p className="text-2xl font-bold">${orderTotal}</p>
      </div>
    </div>
  );
};

export default OrderLists;
