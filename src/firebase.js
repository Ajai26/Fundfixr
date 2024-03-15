import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDxyPP9Jv494f7qOsAEaAdy9ygP1p0VznE",
    authDomain: "react-blogs-app-fd7fc.firebaseapp.com",
    projectId: "react-blogs-app-fd7fc",
    storageBucket: "react-blogs-app-fd7fc.appspot.com",
    messagingSenderId: "80073677134",
    appId: "1:80073677134:web:d81b505958a2935e07a61f"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };