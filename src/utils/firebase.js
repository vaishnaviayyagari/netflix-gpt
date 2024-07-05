// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5O74NPxH--Ctwf_egfH-47xcPZ7wcknY",
  authDomain: "netflixgpt-55677.firebaseapp.com",
  projectId: "netflixgpt-55677",
  storageBucket: "netflixgpt-55677.appspot.com",
  messagingSenderId: "570867929697",
  appId: "1:570867929697:web:66ec0aa20d77f149805020",
  measurementId: "G-0LNY74R71C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();