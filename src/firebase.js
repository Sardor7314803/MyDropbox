import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDRpDhwm8BLbMctGncabsF6X2le_BSPE5A",
  authDomain: "dropbox-95024.firebaseapp.com",
  databaseURL: "https://dropbox-95024-default-rtdb.firebaseio.com",
  projectId: "dropbox-95024",
  storageBucket: "dropbox-95024.appspot.com",
  messagingSenderId: "907944195527",
  appId: "1:907944195527:web:ad02b3005b156b5da615e2"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
