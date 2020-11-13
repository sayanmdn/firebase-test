import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAVEQNVvdEigNTnu01mDJmr3ThVBBPpsH8",
  authDomain: "fir-test-3a27d.firebaseapp.com",
  databaseURL: "https://fir-test-3a27d.firebaseio.com",
  projectId: "fir-test-3a27d",
  storageBucket: "fir-test-3a27d.appspot.com",
  messagingSenderId: "693630689099",
  appId: "1:693630689099:web:a90795c2c2b8761ebf52ce",
  measurementId: "G-9WMXB8CJCK"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
