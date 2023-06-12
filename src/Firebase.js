import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "testrun-a795c.firebaseapp.com",
  projectId: "testrun-a795c",
  storageBucket: "testrun-a795c.appspot.com",
  messagingSenderId: "1050059560888",
  appId: "1:1050059560888:web:95ede59019ac035384a14d",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
