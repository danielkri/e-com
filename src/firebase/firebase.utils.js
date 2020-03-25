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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`/users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      
      if(!snapShot.exists) {
          const {displayName,email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData,
            });
          }catch(error){
            console.log('error creating user', error.message);
          }
      }

      return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;