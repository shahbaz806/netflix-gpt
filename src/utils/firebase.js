// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcoq0SxE2qZnPFhQUuc-xXpeYm3ThBh-U",
  authDomain: "netflix-gpt-290cf.firebaseapp.com",
  projectId: "netflix-gpt-290cf",
  storageBucket: "netflix-gpt-290cf.firebasestorage.app",
  messagingSenderId: "741736795633",
  appId: "1:741736795633:web:aec878724718175876c850",
  measurementId: "G-S6YB1B1C67"
};

// Initiali`ze Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


// const auth = getAuth();

// export default auth;