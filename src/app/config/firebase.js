import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMRV8dwxEsA6Gi7vCiEPcIjw4kmp1l1OQ",
  authDomain: "revents-course-cd8ae.firebaseapp.com",
  projectId: "revents-course-cd8ae",
  storageBucket: "revents-course-cd8ae.appspot.com",
  messagingSenderId: "437398588460",
  appId: "1:437398588460:web:73f81b38381e547dcd9589",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
