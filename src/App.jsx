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
        <div className="flex flex-col md:flex-row p-3 md:p-10 bg-custom-color-fantasy">
          <CardLists />
          <Cart />
        </div>
      </ProductContextProvider>
    </>
  );
}

export default App;
