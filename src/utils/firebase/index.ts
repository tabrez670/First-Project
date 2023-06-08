// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSQcuyJ7g2LMDKHjAhFNb9fH3sAscqETs",
    authDomain: "ecomm-e9735.firebaseapp.com",
    projectId: "ecomm-e9735",
    storageBucket: "ecomm-e9735.appspot.com",
    messagingSenderId: "343006973160",
    appId: "1:343006973160:web:dce5b52827597a35c50d5d",
    measurementId: "G-TKNM7RBM8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// implement authentication with firebase signup, signin
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;

        const q = query(collection(db, "users"), where("uid", "==", user.uid));

        const docs = await getDocs(q);

        if (docs.docs.length > 0) {
            const userDoc = docs.docs[0].data();
            localStorage.setItem("user", JSON.stringify(userDoc));
            localStorage.setItem("token", userDoc.token);
        }
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (
    name,
    email: string,
    password,
    area
) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            area,
        });
        // console.log("resp", resp);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
};

// get collection by name
const getCollection = async (collectionName) => {
  // const q = query(collection(db, collectionName));
  // const docs = await getDocs(q);
  // return docs.docs.map((doc) => doc.data());
  // query(Document(db, collectionName), where("uid", "==", user.uid)
    const q = query(collection(db, collectionName));
  const docs = await getDocs(q);
  console.log(docs.docs.map((doc) => doc.data()));
    return docs.docs.map((doc) => doc.data());
};

// FIXME: after fixing this implement inside the homepage component

// get collection by name and where
// const getCollectionByWhere = async (collectionName, whereField, whereValue) => {
//   const q = query(collection(db, collectionName), where(whereField, "==", whereValue));
//   const docs = await getDocs(q);
//   return docs.docs.map((doc) => doc.data());
// };

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getCollection,
};
