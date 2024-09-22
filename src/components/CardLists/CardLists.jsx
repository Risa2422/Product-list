import React from "react";
import Card from "../Card/Card";
import myData from "../../../public/data.json";
import styles from "./CardLists.module.css";

const CardLists = () => {
  return (
    <div className="container bg-custom-color mx-auto p-4">
      <h2 className="text-3xl py-4 font-medium">Desserts</h2>
      <div className={styles.card_lists_container}>
        {myData.map((data, index) => {
          return <Card key={index} index={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardLists;
