<template>
     <div v-for="car in cars" :key="car.id">
          <CarCard :car="car" />
     </div>
</template>

<script setup>
import CarCard from '~~/components/CarCard.vue';
import { getFirestore } from "firebase/firestore";
import { query, getDocs, collection, orderBy } from "firebase/firestore";

const db = getFirestore();

const cars = reactive([]);

async function getCars() {
     const q  = query(collection(db, "driverCar"), orderBy('brand'));
     const querySnap = await getDocs(q);
     querySnap.forEach((doc) => {
          let car = doc.data();
          car.id = doc.id;
          cars.push(car);
     })   
}

onMounted(()=> {
     getCars();
})
</script>

<style lang="scss" scoped>

</style>