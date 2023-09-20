import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF7iqt7Al8uNVsM0GyjtpOaZFwftON64I",
  authDomain: "linkedin-clone-a38aa.firebaseapp.com",
  projectId: "linkedin-clone-a38aa",
  storageBucket: "linkedin-clone-a38aa.appspot.com",
  messagingSenderId: "343829413928",
  appId: "1:343829413928:web:f291e94d5e29552786f51d",
};

// This line connects to our database
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
