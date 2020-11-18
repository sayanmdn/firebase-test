import React from "react";
const { useState } = require("react");

function Playhook(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const change = () => {
    setCount(prevCount => prevCount +1 );
  };

  return (
    <div>
      <button onClick={change}>Click Here {count}</button>
    </div>
  );
}
export default Playhook;
