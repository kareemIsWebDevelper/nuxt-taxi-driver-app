<template>
     <div class="grid place-items-center">
          <div class="grid justify-start" v-if="car">
               <img 
                    :src="car.image" 
                    :alt="car.brand"
                    class="w-80 h-64 mb-3" 
               />
               <p>{{ car.brand }}</p>
          </div>
     </div>
</template>

<script setup>
const props = defineProps({
     car: Object
})
</script>