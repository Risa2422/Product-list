import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import ItemCountButton from "../ItemCountButton/ItemCountButton";
import AddItemButton from "../AddItemButton/AddItemButton";
import ProductContext from "../../context/ProductContext";

const Card = ({ index, data }) => {
  const { selectedItems } = useContext(ProductContext);
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <div>
          {/* Elmer : images don't apply */}
          <img src="../assets/images/image-baklava-desktop.jpg" alt="" />
        </div>
        {selectedItems.some((item) => item.id === index) ? (
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
