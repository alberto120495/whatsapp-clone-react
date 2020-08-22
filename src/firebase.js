import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRPxyEJliy8ePhm828ufM7P8pSXhJWPxU",
  authDomain: "whatsapp-clone-9161d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9161d.firebaseio.com",
  projectId: "whatsapp-clone-9161d",
  storageBucket: "whatsapp-clone-9161d.appspot.com",
  messagingSenderId: "540689388811",
  appId: "1:540689388811:web:e33356f2225164f8bd7e0e",
  measurementId: "G-PJ5KW45W3L",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
