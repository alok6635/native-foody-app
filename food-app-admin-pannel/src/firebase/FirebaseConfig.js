import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDdtxH7D6LtOoLxVzwse3pdO-ae3Rmug18",
  authDomain: "foodapp-5c5e3.firebaseapp.com",
  projectId: "foodapp-5c5e3",
  storageBucket: "foodapp-5c5e3.appspot.com",
  messagingSenderId: "308977413614",
  appId: "1:308977413614:web:e1913b8eedcd5ecb5572ff",
  measurementId: "G-HSTX58DDJ0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db,storage};
