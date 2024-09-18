import React, { useState, useContext } from "react";
import { MyContext } from "../../App";
import styles from "./ItemCountButton.module.css";

const ItemCountButton = ({ index }) => {
  const { selectedItems, setSelectedItems, isInCart, setIsInCart } =
    useContext(MyContext);

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
    if (currentCount.count === 1) {
      setIsInCart((isInCart) => ({
        ...isInCart,
        [index]: false,
      }));
    }

    const updatedItems = selectedItems
      .map((item) =>
        item.id === index ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);

    setSelectedItems(updatedItems);
  };

  return (
    <>
      <button onClick={() => countDown(index)}>-</button>
      <span>{selectedItems.find((item) => item.id === index).count}</span>
      <button onClick={() => countUp(index)}>+</button>
    </>
  );
};

export default ItemCountButton;
