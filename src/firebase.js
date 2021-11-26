import firebase from "firebase";
import "firebase/storage";

// firebase config
const config = {
  // insert API information
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { storage, firebase as default };
