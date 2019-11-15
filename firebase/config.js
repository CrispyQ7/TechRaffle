import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_AMAZON_FIREBASE_API_KEY,
  authDomain: "techraffle.firebaseapp.com",
  databaseURL: "https://techraffle.firebaseio.com",
  projectId: "techraffle",
  storageBucket: "techraffle.appspot.com",
  messagingSenderId: "649573189210",
  appId: "1:649573189210:web:d258ca0819675d25037a63"
};

const app = firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore(app);
