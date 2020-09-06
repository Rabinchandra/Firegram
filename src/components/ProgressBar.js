import React, { useEffect } from "react";
import useStorage from "../firebase/useStorage";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { progress, error, url } = useStorage(file);

  useEffect(() => {
    if (url !== null) {
      setFile(null);
    }
  }, [url]);

  return (
    <motion.div
      className="progress__bar"
      initial={{ width: "0%" }}
      animate={{ width: progress + "%" }}></motion.div>
  );
}

export default ProgressBar;
