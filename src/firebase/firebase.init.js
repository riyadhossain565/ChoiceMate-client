// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNqJnKykqyszAQ1OR7rByADExZj3cel-8",
  authDomain: "choice-mate.firebaseapp.com",
  projectId: "choice-mate",
  storageBucket: "choice-mate.firebasestorage.app",
  messagingSenderId: "932351559349",
  appId: "1:932351559349:web:f18612110df434015d60fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);