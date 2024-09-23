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
    <div
      className={`p-4 ${isConfirm ? "bg-custom-color-fantasy" : "bg-white"}`}
    >
      <ul className={`rounded-sm ${isConfirm ? "bg-custom-color" : ""}`}>
        {selectedItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b pt-2 pb-2 items-center"
          >
            <div className="flex gap-2">
              {isConfirm ? (
                <div className="flex-custom-30 h-12">
                  <img
                    src={`../../public/${item.image}`}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col">
                <div className="text-custom-color-graphite">{item.name}</div>
                <div className="flex space-x-3 my-1">
                  <div className="text-custom-color-tiaMaria font-bold">
                    {item.count}x
                  </div>
                  <div className="pl-1 text-custom-color-clamShell">
                    @${item.price}
                  </div>
                  {isConfirm ? (
                    ""
                  ) : (
                    <div className="text-custom-color-pharlap">
                      ${item.total()}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isConfirm ? (
              <div className="text-custom-color-graphite font-bold">
                ${item.total()}
              </div>
            ) : (
              <button
                onClick={() => deleteItem(item.id)}
                className="flex justify-center items-center border border-custom-color-clamShell rounded-full flex-custom-20 h-5"
              >
                <img src="../../assets/images/icon-remove-item.svg" alt="" />
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className=" text-custom-color-beaver ">Order Total</p>
        <p className="text-2xl font-bold">${orderTotal}</p>
      </div>
    </div>
  );
};

export default OrderLists;
