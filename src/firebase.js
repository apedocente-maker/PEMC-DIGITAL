import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXdxecrCgI9Iyl2fd-Qn4h99WClSc19Ro",
  authDomain: "pemc-digital.firebaseapp.com",
  projectId: "pemc-digital",
  storageBucket: "pemc-digital.firebasestorage.app",
  messagingSenderId: "299665263201",
  appId: "1:299665263201:web:709f33c559d990d530b820",
  measurementId: "G-FDKNZX1XD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
