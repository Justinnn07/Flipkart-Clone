import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYd0PB8Jgm9jndFp4KcvsJSJ4ia-j-EQE",
  authDomain: "flipkart-clone1.firebaseapp.com",
  projectId: "flipkart-clone1",
  storageBucket: "flipkart-clone1.appspot.com",
  messagingSenderId: "834525107235",
  appId: "1:834525107235:web:2e51625097588757cfcd96",
  measurementId: "G-1GL4P564VH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { auth };

export default db;
