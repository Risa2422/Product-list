import React, { useContext } from "react";
import { MyContext } from "../../App";

const AddItemButton = ({ index, data, isInCart, setIsInCart }) => {
  const { selectedItems, setSelectedItems } = useContext(MyContext);

  const addItem = (index) => {
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
    setIsInCart((isInCart) => !isInCart);
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
