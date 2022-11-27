import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "You api key",
  authDomain: "You authDomain",
  databaseURL: "You databaseURL",
  projectId: "You projectId",
  storageBucket: "You storageBucket",
  messagingSenderId: "You messagingSenderId",
  appId: "You appId"
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
