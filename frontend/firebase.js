// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByKB1OJfA18Z5SCMy4o6KbTWPajKTtGHQ",
  authDomain: "schools-ngo.firebaseapp.com",
  projectId: "schools-ngo",
  storageBucket: "schools-ngo.appspot.com",
  messagingSenderId: "382565393318",
  appId: "1:382565393318:web:611e51be5b62c1f7c1e567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
