import React from "react";

function Pick() {
    const handleClick = () => {
        console.log("pickme");
    }
  return (
    <div>
      <button onClick={handleClick}>Pick</button>
    </div>
  );
}

export default Pick;
