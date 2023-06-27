<template>
     
     <nav class="w-full p-3" style="background: beige;">
          <div class="flex justify-between items-center">
               <NuxtLink class="font-bold text-3xl" to="/">{{ business }}</NuxtLink>
               <NuxtLink
                    to="/rideOrDrive"
                    class="bg-black text-white w-20 h-10 grid place-items-center"
               >
                    SignIn
               </NuxtLink>
          </div>
     </nav>
</template>

<script setup>
const business = ref("Driver");

useHead({
     title: business.value + " Home"
});
</script>

<style scroped>
img {
     width: 4rem;
     height: 4rem;
     color: blue;
}
</style>