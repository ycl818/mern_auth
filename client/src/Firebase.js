// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yt-mern-auth-8e84b.firebaseapp.com",
  projectId: "yt-mern-auth-8e84b",
  storageBucket: "yt-mern-auth-8e84b.appspot.com",
  messagingSenderId: "23831598463",
  appId: "1:23831598463:web:a81000f51c233d3ed9364a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
