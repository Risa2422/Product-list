import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ selectedItems, setSelectedItems }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContextProvider;
