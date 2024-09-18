import { useState, createContext } from "react";
import "./App.css";
import CardLists from "./components/CardLists/CardLists";
import Cart from "./components/Cart/Cart";
export const MyContext = createContext();

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isInCart, setIsInCart] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  return (
    <>
      <MyContext.Provider
        value={{ selectedItems, setSelectedItems, isInCart, setIsInCart }}
      >
        <CardLists />
        <Cart />
      </MyContext.Provider>
    </>
  );
}

export default App;
