import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWxfw-PkFsw5nsBbkT82cWL7kIcnamAVk",
  authDomain: "redux-b28de.firebaseapp.com",
  projectId: "redux-b28de",
  storageBucket: "redux-b28de.appspot.com",
  messagingSenderId: "999367568051",
  appId: "1:999367568051:web:012a3c8cf5ad911f30dec6",
  measurementId: "G-SQSRBGKG1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);