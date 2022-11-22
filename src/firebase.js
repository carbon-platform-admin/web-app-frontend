// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd6BG7mUKBNTCY-1c4Yx4f79v7tGgYTvI",
  authDomain: "the-carbon-platform.firebaseapp.com",
  projectId: "the-carbon-platform",
  storageBucket: "the-carbon-platform.appspot.com",
  messagingSenderId: "298725515488",
  appId: "1:298725515488:web:985d8d5b83e86c6aa57085",
  measurementId: "G-R7NQW50CHS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




