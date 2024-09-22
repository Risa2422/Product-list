import React, { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";
import styles from "./ItemCountButton.module.css";

const ItemCountButton = ({ index }) => {
  const { selectedItems, setSelectedItems } = useContext(ProductContext);

  // count up the item
  const countUp = (index) => {
    const updatedItems = selectedItems.map((item) => {
      return item.id === index ? { ...item, count: item.count + 1 } : item;
    });

    setSelectedItems(updatedItems);
  };

  // count down the item
  const countDown = (index) => {
    // if the count goes zero, the text of the button will change.
    const currentCount = selectedItems.find((item) => item.id === index);
    const updatedItems = selectedItems
      .map((item) =>
        item.id === index ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);

    setSelectedItems(updatedItems);
  };

  return (
    <button className="flex justify-between items-center absolute -bottom-5 left-1/2 translate-x-[-50%] rounded-full px-6 p-2 border border-custom-color3 text-custom-color5 w-1/2 bg-custom-color6">
      <button onClick={() => countDown(index)} className="text-white">
        <img
          src="../../assets/images/icon-decrement-quantity.svg"
          alt=""
          className="mr-2"
        />
      </button>
      <span className="text-white">
        {selectedItems.find((item) => item.id === index).count}
      </span>
      <button onClick={() => countUp(index)}>
        <img
          src="../../assets/images/icon-increment-quantity.svg"
          alt=""
          className="mr-2"
        />
      </button>
    </button>
  );
};

export default ItemCountButton;
