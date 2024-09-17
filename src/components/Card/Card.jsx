import React, { useContext } from "react";
import styles from "./Card.module.css";
import { MyContext } from "../../App";
import ItemCountButton from "../ItemCountButton/ItemCountButton";

const Card = ({ index, data }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <div>
          <img src="../assets/images/image-baklava-desktop.jpg" alt="" />
        </div>
        {/* <button
          className={styles.card_add_button}
          onClick={() => addCount(index)}
        >
          Add to Cart
        </button> */}

        <ItemCountButton index={index} data={data} />
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
