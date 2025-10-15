// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW-wnlFTG9FJ5X8WIBppweKR0ujE1D4cc",
  authDomain: "flowmeet-be63b.firebaseapp.com",
  projectId: "flowmeet-be63b",
  storageBucket: "flowmeet-be63b.firebasestorage.app",
  messagingSenderId: "430455959663",
  appId: "1:430455959663:web:1441c585e8b83334565d9a",
  measurementId: "G-9VRBP9RBW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
export default app;
