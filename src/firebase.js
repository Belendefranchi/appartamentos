import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVbiHLCurYIaVyYT86IakOjyqV6ijpTBc",
  authDomain: "appartamento-39474.firebaseapp.com",
  projectId: "appartamento-39474",
  storageBucket: "appartamento-39474.appspot.com",
  messagingSenderId: "333108171704",
  appId: "1:333108171704:web:a58d860ff115b05052354d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
