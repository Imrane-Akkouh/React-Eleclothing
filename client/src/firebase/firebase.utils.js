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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userDoc = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userDoc.get();

  if (!snapshot.exists) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDoc.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDoc;
}

export const addCollectionWithDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocObj = collectionRef.doc();
    batch.set(newDocObj, obj);
  })

  return await batch.commit();
}

export const convertCollectionsToMap = (collection) => {
  const collectionsMap = collection.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return collectionsMap.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const getCurrentUser = ()=>{
  return new Promise((resolve, reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
