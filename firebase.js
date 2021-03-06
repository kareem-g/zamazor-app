import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxwLlLVmhWcaG6saYrHjInuybYUpWViw8",
  authDomain: "ecommerce-app-b32e2.firebaseapp.com",
  projectId: "ecommerce-app-b32e2",
  storageBucket: "ecommerce-app-b32e2.appspot.com",
  messagingSenderId: "450442792590",
  appId: "1:450442792590:web:f66c9791372ea033b203df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
