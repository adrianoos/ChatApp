<<<<<<< HEAD
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASURMENTID
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

=======
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATYJpEX7MFcCubmHiNbCmXB8I8vp6xxJo",
    authDomain: "chat-app-9fa6b.firebaseapp.com",
    databaseURL: "https://chat-app-9fa6b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-app-9fa6b",
    storageBucket: "chat-app-9fa6b.appspot.com",
    messagingSenderId: "268484953204",
    appId: "1:268484953204:web:7a71573c6bfe8a40233d21",
    measurementId: "G-6RGGRRRDTQ"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

>>>>>>> 973fa2255342cbb8a6f14570d4a0141fab4752a0
export default db;