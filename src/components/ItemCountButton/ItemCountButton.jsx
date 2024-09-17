import React, { useState, useContext } from "react";
import styles from "./ItemCountButton.module.css";
import { MyContext } from "../../App";

const ItemCountButton = ({ index, data }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [selectedItems, setSelectedItems] = useContext(MyContext);

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

  const countUp = (index) => {
    const updateItem = selectedItems.map((item) => {
      return item.id === index ? { ...item, count: item.count + 1 } : item;
    });

    setSelectedItems(updateItem);
  };

  const countDown = (index) => {
    const updatedItems = selectedItems
      .map((item) =>
        item.id === index ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0);
    setSelectedItems(updatedItems);

    const test = selectedItems.filter((item) => {
      return item.id === index;
    });
    if (test.count < 0) {
      setIsInCart((isInCart) => !isInCart);
    }
  };

  return (
    <div>
      {isInCart ? (
        <>
          <button onClick={() => countDown(index)}>-</button>
          <span>{selectedItems.find((item) => item.id === index).count}</span>
          <button onClick={() => countUp(index)}>+</button>
        </>
      ) : (
        <button onClick={() => addItem(index)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ItemCountButton;
