import React from "react";
import Card from "../Card/Card";
import myData from "../../../public/data.json";
import styles from "./CardLists.module.css";

const CardLists = () => {
  return (
    <div>
      <h2>Desserts</h2>
      <div className={styles.card_lists_container}>
        {myData.map((data, index) => {
          return <Card key={index} index={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardLists;
