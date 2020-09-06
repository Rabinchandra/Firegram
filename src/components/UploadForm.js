import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const types = ["image/jpeg", "image/png"];

    if (types.includes(file.type)) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
      setError("Please choose an image file!");
    }
  };

  return (
    <div className="upload__form">
      <input
        type="file"
        className="file__input"
        id="file__input"
        onChange={changeHandler}
      />
      <label htmlFor="file__input" className="file__input__label">
        +
      </label>
      <div className="output">
        {error && <div>{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
}

export default UploadForm;
