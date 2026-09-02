import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2ziEUnCRu0s1S_JZzlJjKHulX6bC-9eA",
  authDomain: "pemc-digital.firebaseapp.com",
  projectId: "pemc-digital",
  storageBucket: "pemc-digital.firebasestorage.app",
  messagingSenderId: "299665263201",
  appId: "1:299665263201:web:709f33c559d990d530b820",
  measurementId: "G-FDKNZX1XD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
