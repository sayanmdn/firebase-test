import React from "react";
const { useState } = require("react");

function Playhook(props) {
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={change}>Click Here {count}</button>
    </div>
  );
}
export default Playhook;
