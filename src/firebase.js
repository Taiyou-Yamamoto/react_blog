import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUGWk74fdAYGMwjXWU2P1Z-egwwnA9SZs",
  authDomain: "blog-with-react-and-fire-71461.firebaseapp.com",
  projectId: "blog-with-react-and-fire-71461",
  storageBucket: "blog-with-react-and-fire-71461.appspot.com",
  messagingSenderId: "630659291215",
  appId: "1:630659291215:web:26f664eccb93a7bae8723a",
  measurementId: "G-TQ1ZBQT1H0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
