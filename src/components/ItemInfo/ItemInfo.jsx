import React, { useContext } from "react";
import { MyContext } from "../../App";

const ItemInfo = () => {
  const [selectedItems, setSelectedItems] = useContext(MyContext);

  function deleteItem(id) {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
  }

  return (
    <div>
      {selectedItems.length === 0 ? (
        <p>Your added items will appear here</p>
      ) : (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.count}x</div>
              <div>@${item.price}</div>
              <div>{item.total()}</div>
              <button onClick={() => deleteItem(item.id)}>削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemInfo;
