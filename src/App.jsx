import { useState, createContext } from "react";
import "./App.css";
import CardLists from "./components/CardLists/CardLists";
import Cart from "./components/Cart/Cart";
export const ProductContext = createContext();

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ selectedItems, setSelectedItems }}>
        <CardLists />
        <Cart />
      </ProductContext.Provider>
    </>
  );
}

export default App;
