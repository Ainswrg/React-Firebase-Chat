import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: "AIzaSyCw5wQLKFt6pdzBL0DehW_cEG5s0zEZLgk",
    authDomain: "chat-react-372c9.firebaseapp.com",
    projectId: "chat-react-372c9",
    storageBucket: "chat-react-372c9.appspot.com",
    messagingSenderId: "546849209916",
    appId: "1:546849209916:web:76c8b06ff47d73af208d39",
    measurementId: "G-0EYR8MDQKW"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);

