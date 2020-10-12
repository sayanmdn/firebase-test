import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import * as firebase from 'firebase';

const App = () => {
  const [data, setData] = useState(32);
  const speedRef = useRef(null);

  useEffect(() => {
    speedRef.current = firebase.database().ref('speed')
    speedRef.current.on('value', snap => {
      setData(snap.val())
    });
  }, [])

  useEffect(() => {
    updateSpeedRef(data)
  }, [data])

  const handleEvent = () => {
    setData(prevData => prevData + 1)
  }

  const updateSpeedRef = value => {
    speedRef.current.set(value)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={handleEvent}>Chick here</button>
    </div>
  );

}
export default App;  