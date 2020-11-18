import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import * as firebase from "firebase";

const App2 = () => {
  const [data, setData] = useState(32);
  const speedRef = useRef(null);

  useEffect(() => {
    speedRef.current = firebase.database().ref("speed");
    speedRef.current.on("value", (snap) => {
      setData(snap.val());
    });
    console.log("flag 14")
  }, []);

  useEffect(() => {
    updateSpeedRef(data);
  }, [data]);

  const updateSpeedRef = (value) => {
    speedRef.current.set(value);
  };
  
  const handleEvent = () => {
    setData((prevData) => prevData + 1);
  };
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={handleEvent}>Chick here</button>
    </div>
  );
};
export default App2;
