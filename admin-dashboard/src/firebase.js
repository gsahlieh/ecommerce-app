// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiZCS2HHHswpSyMHdjX987sDSds3Sic9M",
  authDomain: "ecommerce-app-65e35.firebaseapp.com",
  projectId: "ecommerce-app-65e35",
  storageBucket: "ecommerce-app-65e35.appspot.com",
  messagingSenderId: "1085489954966",
  appId: "1:1085489954966:web:c66c3d07d657cc723e02b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;