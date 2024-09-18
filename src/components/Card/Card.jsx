import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import ItemCountButton from "../ItemCountButton/ItemCountButton";
import AddItemButton from "../AddItemButton/AddItemButton";

const Card = ({ index, data }) => {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <div>
          {/* images doesn't apply */}
          <img src="../assets/images/image-baklava-desktop.jpg" alt="" />
        </div>
        {isInCart ? (
          <ItemCountButton
            index={index}
            isInCart={isInCart}
            setIsInCart={setIsInCart}
          />
        ) : (
          <AddItemButton
            index={index}
            data={data}
            isInCart={isInCart}
            setIsInCart={setIsInCart}
          />
        )}
      </div>
      <div>
        <div>{data.category}</div>
        <div>{data.name}</div>
        <div>${data.price}</div>
      </div>
    </div>
  );
};

export default Card;
