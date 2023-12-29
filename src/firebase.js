import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7_Nf64aQHlzFkdvaLPfMf0EKHk4dHtrI",
    authDomain: "raptor-e11b0.firebaseapp.com",
    projectId: "raptor-e11b0",
    storageBucket: "raptor-e11b0.appspot.com",
    messagingSenderId: "341415440285",
    appId: "1:341415440285:web:f2231080af46910529c974",
    measurementId: "G-R9FMY68NRD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;