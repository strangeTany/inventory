// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLB1a77Hwl47m6CPKzosV_WqkQGWGfRcY",
  authDomain: "inventory-frontproject.firebaseapp.com",
  projectId: "inventory-frontproject",
  storageBucket: "inventory-frontproject.appspot.com",
  messagingSenderId: "935010528239",
  appId: "1:935010528239:web:5411d1c8313c4f9ea3a41a",
  measurementId: "G-VJES73Q0NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};