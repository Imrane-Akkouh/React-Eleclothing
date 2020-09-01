import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDxeYXYpBYPpEsrk5vX5WiPRkD1IOuXJ0",
    authDomain: "eleclothing.firebaseapp.com",
    databaseURL: "https://eleclothing.firebaseio.com",
    projectId: "eleclothing",
    storageBucket: "eleclothing.appspot.com",
    messagingSenderId: "287684056363",
    appId: "1:287684056363:web:1e6495d46a97759ee9616e"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
