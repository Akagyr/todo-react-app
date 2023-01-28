import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtO2nlqnu6UshW3rC710OdnMvRJp-XXzM",
  authDomain: "todo-react-app-53b11.firebaseapp.com",
  projectId: "todo-react-app-53b11",
  storageBucket: "todo-react-app-53b11.appspot.com",
  messagingSenderId: "111745418518",
  appId: "1:111745418518:web:ba70c1d654a376755a7c37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);