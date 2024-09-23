import React from "react";
import Card from "../Card/Card";
import myData from "../../../public/data.json";
import styles from "./CardLists.module.css";

const CardLists = () => {
  return (
    <div className="p-4 md:w-2/3">
      <h2 className="text-3xl ml-2 pb-4 font-medium">Desserts</h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myData.map((data, index) => {
          return <Card key={index} index={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardLists;
