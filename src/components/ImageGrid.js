import React from "react";
import useFirestore from "../firebase/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { doc } = useFirestore("images");

  return (
    <div className="image__grid">
      {doc.map((item) => (
        <motion.div
          className="image"
          key={item.id}
          onClick={() => setSelectedImg(item.url)}
          layout
          whileHover={{ opacity: 1 }}>
          <motion.img
            src={item.url}
            alt="Uploaded Image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
