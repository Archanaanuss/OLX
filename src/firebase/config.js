import firebase from "firebase";
import'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxRN5KU2Ari5MAnrsaJAmNjy1iAfx3OLg",
    authDomain: "olx-clone-3bd95.firebaseapp.com",
    projectId: "olx-clone-3bd95",
    storageBucket: "olx-clone-3bd95.appspot.com",
    messagingSenderId: "287541827174",
    appId: "1:287541827174:web:9837b0edc0d78956c63fa7",
    measurementId: "G-R2SSM5DSNM"
  };

  export default firebase.initializeApp(firebaseConfig)