import React, { useContext } from "react";
import { MyContext } from "../../App";

const AddItemButton = ({ index, data }) => {
  const { selectedItems, setSelectedItems, isInCart, setIsInCart } =
    useContext(MyContext);

  const addItem = (index) => { // Normally if we are doing a click event, we name the function as handleAdditem() or handleAdd()
    const obj = {
      id: index,
      name: data.name,
      count: 1,
      price: data.price,
      total: function () {
        return this.price * this.count;
      },
    };

    setSelectedItems([...selectedItems, obj]);
    setIsInCart((isInCart) => ({
      ...isInCart,
      [index]: true,
    }));
  };

  return (
    <button
      onClick={() => {
        addItem(index);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddItemButton;
