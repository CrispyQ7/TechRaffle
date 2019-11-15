import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC5HZvEUjg_yQzxjnfDDUB-923EhUar_bM",
  authDomain: "rafflewave.firebaseapp.com",
  databaseURL: "https://rafflewave.firebaseio.com",
  projectId: "rafflewave",
  storageBucket: "rafflewave.appspot.com",
  messagingSenderId: "627639815497",
  appId: "1:627639815497:web:8404b48ddb380afdbdde98",
  measurementId: "G-YE5YRPH68C"
};

const app = firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore(app);

//const gertRef = db.collection("users").doc("gerturde");
//console.log(gertRef);

// export const getGert = gertRef
//   .get()
//   .then(gert => {
//     if (!gert.exists) {
//       console.log("Oh no! no gerturdes live here!");
//     } else {
//       //console.log("Document data:", gert.data());
//     }
//   })
//   .catch(err => {
//     console.log("Error getting gert", err);
//   });
