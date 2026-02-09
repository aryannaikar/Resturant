import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPamtRWQc1LVBkdzjd_PzwSg9Jg3OAsUs",
  authDomain: "restaurant-demo-331b1.firebaseapp.com",
  projectId: "restaurant-demo-331b1",
  storageBucket: "restaurant-demo-331b1.firebasestorage.app",
  messagingSenderId: "595060722278",
  appId: "1:595060722278:web:464fe4fcc9122a526afba7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT FIRESTORE DATABASE
export const db = getFirestore(app);
