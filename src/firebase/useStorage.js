import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "./config";

function useStorage(file) {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        setUrl(url);
        collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, error, url };
}

export default useStorage;
