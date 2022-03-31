import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCfTt0u38YXuwp6_BO6okL-Jhw--knwdPM",
    authDomain: "todo-fd2f3.firebaseapp.com",
    projectId: "todo-fd2f3",
    storageBucket: "todo-fd2f3.appspot.com",
    messagingSenderId: "401340728108",
    appId: "1:401340728108:web:d3eb990405e627c359e289"
};


const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);

export default firebase;