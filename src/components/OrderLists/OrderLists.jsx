import React, { useContext } from "react";
import { MyContext } from "../../App";

const OrderLists = ({ isConfirm }) => {
  const { selectedItems, setSelectedItems, isInCart, setIsInCart } =
    useContext(MyContext);
  const orderTotal = selectedItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  function deleteItem(id) {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);

    setIsInCart((isInCart) => ({
      ...isInCart,
      [id]: false,
    }));
  }

  return (
    <>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.count}x</div>
            <div>@${item.price}</div>
            <div>${item.total()}</div>
            {isConfirm ? (
              ""
            ) : (
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <p>Order Total</p>
        <p>${orderTotal}</p>
      </div>
    </>
  );
};

export default OrderLists;
