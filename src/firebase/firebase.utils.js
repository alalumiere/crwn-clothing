import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCD2kMWp2kkpyIxN6Kzktr07y1tDBVpWFw",
  authDomain: "crwn-db-d5e8c.firebaseapp.com",
  databaseURL: "https://crwn-db-d5e8c.firebaseio.com",
  projectId: "crwn-db-d5e8c",
  storageBucket: "crwn-db-d5e8c.appspot.com",
  messagingSenderId: "1970750518",
  appId: "1:1970750518:web:13a1a004da45aab61ec497",
  measurementId: "G-JBMVFQKPLX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
