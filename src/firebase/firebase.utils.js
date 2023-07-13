import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1qFABGxbZuu17AU-f9U2-qH9NeMJUSIQ",
    authDomain: "crwn-clothing-3c4a3.firebaseapp.com",
    projectId: "crwn-clothing-3c4a3",
    storageBucket: "crwn-clothing-3c4a3.appspot.com",
    messagingSenderId: "1078447982973",
    appId: "1:1078447982973:web:c1fcbc51c01ea9efbda414",
    measurementId: "G-TKCD36P3GH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user', err.message)
        }
    }
    return userRef
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

