import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAZQnW4OLhHXvA0vxyq2AUhA61G-8TETzg",
  authDomain: "tik-tok-site.firebaseapp.com",
  projectId: "tik-tok-site",
  storageBucket: "tik-tok-site.appspot.com",
  messagingSenderId: "458653977448",
  appId: "1:458653977448:web:ed5adad2ccd5e00f3424dd",
  measurementId: "G-72P0NGYRM9",
});
const db = firebaseConfig.firestore();
export default db;
