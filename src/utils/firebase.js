// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGEv3IXYXApJTvitjGM3Ud1VFZgqraUY",
  authDomain: "netflixgpt-4ad93.firebaseapp.com",
  projectId: "netflixgpt-4ad93",
  storageBucket: "netflixgpt-4ad93.firebasestorage.app",
  messagingSenderId: "107905711405",
  appId: "1:107905711405:web:d100b420b972ed855ee7a4",
  measurementId: "G-PEZ8BT16FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();