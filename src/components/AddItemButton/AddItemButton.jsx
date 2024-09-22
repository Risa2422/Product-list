import React, { useContext } from "react";
import { ProductContext } from "../../App";

const AddItemButton = ({ index, data }) => {
  const { selectedItems, setSelectedItems, isInCart, setIsInCart } =
    useContext(ProductContext);

  const handleAddItem = (index) => {
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
        handleAddItem(index);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddItemButton;
