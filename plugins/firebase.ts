import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
     const config = useRuntimeConfig();

     const firebaseConfig = {
          apiKey: "AIzaSyDLD0KLtqkWAib6y2OyLk7ZqC9CglJgRSU",
          authDomain: "vue-app-32aa5.firebaseapp.com",
          projectId: "vue-app-32aa5",
          storageBucket: "vue-app-32aa5.appspot.com",
          messagingSenderId: "180324720052",
          appId: "1:180324720052:web:702ee863cc110fc11b26e1"
     };
        
     const app = initializeApp(firebaseConfig);
     
     // const analytics = getAnalytics(app);
     const auth = getAuth(app);
     const firestore = getFirestore(app);

     nuxtApp.vueApp.provide('auth', auth);
     nuxtApp.provide('auth', auth);

     nuxtApp.vueApp.provide('firestore', firestore)
     nuxtApp.provide('firestore', firestore)
})
