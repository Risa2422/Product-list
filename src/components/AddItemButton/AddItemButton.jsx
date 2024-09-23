import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const AddItemButton = ({ index, data }) => {
  const { selectedItems, setSelectedItems } = useContext(ProductContext);

  const handleAddItem = (index) => {
    const obj = {
      id: index,
      name: data.name,
      count: 1,
      price: data.price,
      image: data.image.mobile,
      total: function () {
        return this.price * this.count;
      },
    };

    setSelectedItems([...selectedItems, obj]);
  };

  return (
    <button
      className="absolute -bottom-5 left-1/2 translate-x-[-50%] rounded-full  bg-white p-2 border border-custom-color3 text-custom-color5 w-2/3 flex items-center justify-center"
      onClick={() => {
        handleAddItem(index);
      }}
    >
      <img
        src="../../assets/images/icon-add-to-cart.svg"
        alt=""
        className="mr-2"
      />
      Add to Cart
    </button>
  );
};

export default AddItemButton;
