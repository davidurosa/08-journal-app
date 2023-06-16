// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALA8i1_yshte3ktQyqHeUolpkMMB-T3Ps",
    authDomain: "react-proyect-e1083.firebaseapp.com",
    projectId: "react-proyect-e1083",
    storageBucket: "react-proyect-e1083.appspot.com",
    messagingSenderId: "376315885527",
    appId: "1:376315885527:web:f055b0fafd30136a8bfd92"
  };

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebaseAuth = getAuth(FirebaseApp);
 export const FirebaseDB = getFirestore(FirebaseApp);