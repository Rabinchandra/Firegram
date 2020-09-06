import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const clickHandler = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="modal" onClick={clickHandler}>
      <motion.img
        src={selectedImg}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </div>
  );
}

export default Modal;
