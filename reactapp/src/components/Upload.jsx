import React from "react";

function Upload() {
    const handleClick = () => {
        console.log("clickme");
    }
  return (
    <div>
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}

export default Upload;
