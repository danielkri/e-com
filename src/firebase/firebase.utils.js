import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyD301l0Y43ZiX_TeKUj-xTjYqr0kEDlqDY",
    authDomain: "e-com-d-b.firebaseapp.com",
    databaseURL: "https://e-com-d-b.firebaseio.com",
    projectId: "e-com-d-b",
    storageBucket: "e-com-d-b.appspot.com",
    messagingSenderId: "3276674859",
    appId: "1:3276674859:web:2afb5b30de86133770d76e",
    measurementId: "G-4TS36Q5QJF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;