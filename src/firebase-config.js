import {initializeApp, getFirestore, getStorage} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3PUY6tg3pJD4M-RFpEuBDfYdSOXWteMQ",
  authDomain: "get-file-txt.firebaseapp.com",
  projectId: "get-file-txt",
  storageBucket: "get-file-txt.appspot.com",
  messagingSenderId: "673249211395",
  appId: "1:673249211395:web:fed182195369ea06b54a36"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();