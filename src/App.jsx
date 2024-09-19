import { useState, createContext } from "react";
import "./App.css";
import CardLists from "./components/CardLists/CardLists";
import Cart from "./components/Cart/Cart";
export const MyContext = createContext(); // It's better to give you context a specific name such as ProductContext or ItemContext
// It will be cleaner if you store you contexts in a folder so that you can keep them organize

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
  }); // No need to create another state just to check if an item exist in cart. You can use HOF methods such as find, filter, or some

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
