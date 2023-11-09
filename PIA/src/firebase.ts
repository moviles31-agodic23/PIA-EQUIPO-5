import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaIdx-p_IR1HXeyEVFPCsN1uSrbGWndtA",
  authDomain: "piaappsmov.firebaseapp.com",
  projectId: "piaappsmov",
  storageBucket: "piaappsmov.appspot.com",
  messagingSenderId: "219853494235",
  appId: "1:219853494235:web:97fcec9d0ae3cc55b7b9fe"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);