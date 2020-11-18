import React from "react";
const { useState } = require("react");

function Playhook(props) {
  const initialCount = { firstName: "", lastName: "" };
  const [count, setCount] = useState(initialCount);

  //   const change = () => {
  //     setCount(prevCount => prevCount +1 );
  //   };

  return (
    <div>
      <input
        type="text"
        value={count.firstName}
        onChange={(e) => setCount({ ...count, firstName: e.target.value })}
      />
      <input
        type="text"
        value={count.lastName}
        onChange={(e) => setCount({ ...count, lastName: e.target.value })}
      />
      <h2>Fist Name: {count.firstName}</h2>
      <h2>Fist Name: {count.lastName}</h2>
      <h2>{JSON.stringify(count)}</h2>
    </div>
  );
}
export default Playhook;
