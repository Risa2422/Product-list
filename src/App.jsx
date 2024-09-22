import { useState, createContext } from "react";
import "./App.css";
import CardLists from "./components/CardLists/CardLists";
import Cart from "./components/Cart/Cart";
import ProductContextProvider from "./context/ProductContextProvider";
export const ProductContext = createContext();

function App() {
  return (
    <>
      <ProductContextProvider>
        <CardLists />
        <Cart />
      </ProductContextProvider>
    </>
  );
}

export default App;
