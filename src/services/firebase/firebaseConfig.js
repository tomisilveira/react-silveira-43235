// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtbJI2vHkATEpFzSmJt3xpvMKe1EtjPsE",
  authDomain: "react-43235-ecommers.firebaseapp.com",
  projectId: "react-43235-ecommers",
  storageBucket: "react-43235-ecommers.appspot.com",
  messagingSenderId: "180797185548",
  appId: "1:180797185548:web:ae0f66f9ce3274350e5829",
  measurementId: "G-B05CJPLKQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)