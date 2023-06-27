<template>
     <div>
          <DetailsCard :car="state.car" />
     </div>
 </template>
 
<script setup> 
import { getFirestore, doc, getDoc } from "firebase/firestore";

const { id } = useRoute().params;

const state = reactive({ car: null });

async function getCar(documentId) {
     const db = getFirestore();
     const docRef = doc(db, "driverCar", documentId);
     const docSnap = await getDoc(docRef);

    if(!docSnap.exists()) {
          throw Error("No Document!");
    } else {
          state.car = docSnap.data();
          state.car.id = docSnap.id;
    }
}

onMounted(()=> {
     getCar(id);
})
 </script>
 
 <style lang="scss" scoped>
 
 </style>