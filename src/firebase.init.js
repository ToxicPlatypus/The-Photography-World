// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC94hSLXohVMsQgoJ45UPGZpLWW_Tj4rJw",
  authDomain: "photography-assignment.firebaseapp.com",
  projectId: "photography-assignment",
  storageBucket: "photography-assignment.appspot.com",
  messagingSenderId: "860162633201",
  appId: "1:860162633201:web:5d1182f9cbd714aa4c6850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
