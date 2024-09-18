import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import ItemCountButton from "../ItemCountButton/ItemCountButton";
import AddItemButton from "../AddItemButton/AddItemButton";
import { MyContext } from "../../App";

const Card = ({ index, data }) => {
  const { isInCart } = useContext(MyContext);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <div>
          {/* images doesn't apply */}
          <img src="../assets/images/image-baklava-desktop.jpg" alt="" />
        </div>
        {isInCart[index] ? (
          <ItemCountButton index={index} />
        ) : (
          <AddItemButton index={index} data={data} />
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
