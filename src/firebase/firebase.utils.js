import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

//When we signin we get a user object, we can see that object in console. The function below allows to take that user auth object that we get from authentication library and stores that in firebase database 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get() //We get the snapshotObject from the referenceObject using the .get() method 
    // console.log(snapShot) //snapShot represents the data
    if (!snapShot.exists) { //The documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean.
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ //set() is the create method
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//setCustomParameters() --> https://developers.google.com/identity/openid-connect/openid-connect#authenticationuriparameters
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then((result) => {
        console.log("Logged In", result);
    })
    .catch((error) => {
        console.log("Caught error Popup closed");
    });

export default firebase;

