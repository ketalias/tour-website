// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj9MnFhTmb14DLi5TyJnML-Q0j_YrY--8",
  authDomain: "tourwebsite-2219d.firebaseapp.com",
  projectId: "tourwebsite-2219d",
  storageBucket: "tourwebsite-2219d.firebasestorage.app",
  messagingSenderId: "582265062728",
  appId: "1:582265062728:web:b65335f8e18f92d2ab1f7d",
  measurementId: "G-QCR4JDQPD0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
