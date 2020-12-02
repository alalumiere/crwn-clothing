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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
