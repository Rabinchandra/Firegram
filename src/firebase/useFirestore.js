import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { projectFirestore } from "./config";

function useFirestore(collection) {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const documents = [];
        snap.docs.forEach((d) => {
          documents.push({
            ...d.data(),
            id: d.id,
          });
        });
        setDoc(documents);
      });

    return () => unsub();
  }, [collection]);

  return { doc };
}

useFirestore.propTypes = {
  collection: PropTypes.string.isRequired,
};

export default useFirestore;
