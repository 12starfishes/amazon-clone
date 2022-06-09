import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKUr4Mmlr3QJnprwcvfh4w4kUKCWBERQ4",
    authDomain: "clone-501b1.firebaseapp.com",
    projectId: "clone-501b1",
    storageBucket: "clone-501b1.appspot.com",
    messagingSenderId: "203852329884",
    appId: "1:203852329884:web:ab949e9e70c4592c1a0e59"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };