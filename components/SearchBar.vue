<template>
     <div class="grid place-items-start">
            <h1 class="text-5xl font-extrabold">Need a ride ?</h1>
            <input
                 v-model="location"
                 :class="locationError ? 'border-red-500 border': ''"
                 type="text"
                 placeholder="Enter your location"
            />
            <input
                 v-model="destination"
                 :class="destinationError ? 'border-red-500 border': ''"
                 type="text"
                 placeholder="Enter your destination"
            />
               <button
                    @click="handleClick"
                    class="bg-black text-white font-bold text-lg p-3 mt-4"
                    :class="location.length===0|| destination.length===0 ? 'disabled' : ''"
               >
                    Continue
               </button>
      </div>
</template>

<script setup>
const location = ref("");
const destination = ref("");

// Error Itself]
const locationError = ref(false);
const destinationError = ref(false);

const handleClick = () => {
     if (location.value.length === 0 || destination.value.length === 0) {
          // Error Value
          locationError.value = true;
          destinationError.value = true;
     }
     else {
          navigateTo("/cars");
     }
};
</script>

<style scoped>

button {
     width: 150px;
}

@media screen and (min-width: 767px) {
     button {
      width: 250px;
}
}
button.disabled {
     opacity: 0.8;
     cursor: not-allowed;
}
/* 
.tooltip {
     width: 100px;
     padding: 10px;
     height: 40px;
     background-color: lightgrey;
     margin-top: 50px;
     display: none;
}

button:hover .tooltip {
     display: block;     
} */

/* #tooltip::before {
     content: " ";
     position: absolute;
     left: -13px;
     border-style: solid;
     border-width: 7px;
     border-color: transparent black transparent transparent;
} 
*/

</style>