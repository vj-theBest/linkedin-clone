import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBo3gAEh2hb8HLK1pv_NLxSQ8ea1Zeo9Ts",
    authDomain: "linkedin-clone-b5ea7.firebaseapp.com",
    projectId: "linkedin-clone-b5ea7",
    storageBucket: "linkedin-clone-b5ea7.appspot.com",
    messagingSenderId: "1067324831926",
    appId: "1:1067324831926:web:7b1224fce0eb7e7642ce17"
  };
    //   initial app
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  // connect database
  const db = firebaseapp.firestore();
  // authentication
  const auth =firebase.auth();

  export {db,auth};