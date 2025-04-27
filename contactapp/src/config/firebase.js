// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIpiNC8wJ6E-fJOXehW76vQ0B10Cq48qg",
  authDomain: "vite-contact-ccf0b.firebaseapp.com",
  projectId: "vite-contact-ccf0b",
  storageBucket: "vite-contact-ccf0b.firebasestorage.app",
  messagingSenderId: "849081733160",
  appId: "1:849081733160:web:279f251e5630efc75c251d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);