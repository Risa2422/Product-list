import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import styles from "./ConfirmButton.module.css";

const ConfirmButton = () => {
  const [showOrderLists, setShowOrderLists] = useState(false);

  const handleClick = () => {
    setShowOrderLists(true);
  };

  return (
    <>
      <button onClick={handleClick}>Confirm</button>
      {showOrderLists && <ConfirmModal />}
    </>
  );
};

export default ConfirmButton;
