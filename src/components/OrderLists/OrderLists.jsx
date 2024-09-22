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
    <>
      <ul>
        {selectedItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b py-3 items-center"
          >
            <div className="flex flex-col">
              <div className="text-custom-color5">{item.name}</div>
              <div className="flex space-x-3 my-1">
                <div className="text-custom-color6">{item.count}x</div>
                <div className="pl-1 text-custom-color2">@${item.price}</div>
                <div className="text-custom-color3">${item.total()}</div>
              </div>
            </div>
            {isConfirm ? (
              ""
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
      <div className="flex justify-between items-center my-6">
        <p className="text-custom-color4"> Order Total</p>
        <p className="text-2xl font-bold">${orderTotal}</p>
      </div>
    </>
  );
};

export default OrderLists;
