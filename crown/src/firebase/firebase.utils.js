import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBBNBjoFX3UYosyJW04OUmLPR04rPCwFvg",
    authDomain: "e-commerce2-dc1ae.firebaseapp.com",
    projectId: "e-commerce2-dc1ae",
    storageBucket: "e-commerce2-dc1ae.appspot.com",
    messagingSenderId: "14586483594",
    appId: "1:14586483594:web:ae07cecf0d7fcf58606e73",
    measurementId: "G-2N92YWDMQP"
  };


export const createUserProfileDocument =async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (snapShot.exists===false){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log(error.message);
    }
  }
  return userRef
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
