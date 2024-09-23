import { createContext } from "react";
import CardLists from "./components/CardLists";
import Cart from "./components/Cart";
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
