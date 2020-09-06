import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/firebase-analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCE3YMgE5ft8pZLdTl-nKP3yguh9eUK1qA",
  authDomain: "firegram-7e290.firebaseapp.com",
  databaseURL: "https://firegram-7e290.firebaseio.com",
  projectId: "firegram-7e290",
  storageBucket: "firegram-7e290.appspot.com",
  messagingSenderId: "763088354463",
  appId: "1:763088354463:web:f5471e2f1c99132d4d76aa",
  measurementId: "G-9T930SBK8B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
