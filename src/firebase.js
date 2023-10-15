import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTo3-QDkfpvczcDdRzRMPr2wJCi-6sEj4",
  authDomain: "todo-list-a7ea8.firebaseapp.com",
  databaseURL: "https://todo-list-a7ea8-default-rtdb.firebaseio.com",
  projectId: "todo-list-a7ea8",
  storageBucket: "todo-list-a7ea8.appspot.com",
  messagingSenderId: "742693281096",
  appId: "1:742693281096:web:1143d40a343b66f548677d"
};

const app = initializeApp(firebaseConfig); 
export const db = getDatabase(app);
export const auth = getAuth();