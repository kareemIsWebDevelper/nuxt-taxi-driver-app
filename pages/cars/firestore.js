import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDLD0KLtqkWAib6y2OyLk7ZqC9CglJgRSU",
     authDomain: "vue-app-32aa5.firebaseapp.com",
     projectId: "vue-app-32aa5",
     storageBucket: "vue-app-32aa5.appspot.com",
     messagingSenderId: "180324720052",
     appId: "1:180324720052:web:702ee863cc110fc11b26e1"
};
        
app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
