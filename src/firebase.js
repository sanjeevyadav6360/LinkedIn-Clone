import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeXX80w7kKDhJo6LA6OJzZB40BbfnM5-A",
    authDomain: "dummy-linkedin-clone-80681.firebaseapp.com",
    projectId: "dummy-linkedin-clone-80681",
    storageBucket: "dummy-linkedin-clone-80681.appspot.com",
    messagingSenderId: "363774083043",
    appId: "1:363774083043:web:173e484ced8b422a846ad6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider,storage };
  export default db;
