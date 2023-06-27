<template>
    <div id="car-card" class="grid place-items-center">
          <div class="grid justify-start">
               <img 
               :src="car.image" 
               :alt="car.brand"
               class="h-64 mb-3" 
               />
               <NuxtLink
                    :to="`/cars/${car.id}`" 
                    class="bg-black grid place-items-center w-1/2 p-2 text-white"
                >
                    Ride {{ car.brand }}
               </NuxtLink>
          </div>
    </div>
</template>

<script setup>
     

     const location = ref("location");

     const props = defineProps({
          car: Object
     })
</script>

<style scoped>
     #car-card {
          width: 400px;
          height: 400px;
     }
     #car-card img {
          width: 350px;
          height: 300px;
     }

@media screen and (max-width: 400px) {
     .car-card {
          width: 350px;
          height: 350px;
     }
}
</style>