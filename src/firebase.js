// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnwrpVKaWpmzcBp1QDzuvuYiSWTi1r7V4",
  authDomain: "linkedin-clone-7cbb9.firebaseapp.com",
  projectId: "linkedin-clone-7cbb9",
  storageBucket: "linkedin-clone-7cbb9.firebasestorage.app",
  messagingSenderId: "1036358788965",
  appId: "1:1036358788965:web:0b11c54d55e76882aa638c",
  measurementId: "G-1KCVGF8LB1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage();
export const provider = new GoogleAuthProvider()
