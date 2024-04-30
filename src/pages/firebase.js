import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhzLD-oKmZbsUmjMRdTjw9HCePIh9tSeo",
  authDomain: "exercise7-313be.firebaseapp.com",
  projectId: "exercise7-313be",
  storageBucket: "exercise7-313be.appspot.com",
  messagingSenderId: "887663676146",
  appId: "1:887663676146:web:1ebbaae3e6e30c6e349e6b",
  measurementId: "G-37MLVPYHPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
