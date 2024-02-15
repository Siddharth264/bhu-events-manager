// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "event-sync-a22bf.firebaseapp.com",
  projectId: "event-sync-a22bf",
  storageBucket: "event-sync-a22bf.appspot.com",
  messagingSenderId: "482116952039",
  appId: "1:482116952039:web:6283d1dbbda215d8c6a742",
  measurementId: "G-P4W0QYRZ6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
