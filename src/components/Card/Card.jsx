import React, { useContext, useState } from "react";
import styles from "./Card.module.css";
import ItemCountButton from "../ItemCountButton/ItemCountButton";
import AddItemButton from "../AddItemButton/AddItemButton";
import ProductContext from "../../context/ProductContext";

const Card = ({ index, data }) => {
  const { selectedItems } = useContext(ProductContext);
  return (
    <div className="m-2">
      <div className="flex">
        <div className="relative">
          <img
            src={`../../public/${data.image.mobile}`}
            alt=""
            className="rounded-md"
          />
          {selectedItems.some((item) => item.id === index) ? (
            <ItemCountButton index={index} />
          ) : (
            <AddItemButton index={index} data={data} />
          )}
        </div>
      </div>
      <div className="mt-7">
        <div className="text-custom-color2 text-sm">{data.category}</div>
        <div className="text-custom-color5 font-semibold">{data.name}</div>
        <div className="text-custom-color6 font-bold">${data.price}</div>
      </div>
    </div>
  );
};

export default Card;
