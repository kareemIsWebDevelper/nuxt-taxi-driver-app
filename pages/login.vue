<template>
     <div class="grid place-items-center mt-24">
          <div class="grid place-items-start">
               <input type="email" v-model="username" placeholder="Username" />
               <input type="email" v-model="email" placeholder="Email" />
               <input type="password" v-model="password" placeholder="Password" />
               <button
                    class="bg-black text-white mt-4"
                    @click="registerUser"
               >
                    Login
               </button>
               <div class="flex gap-3 mt-4">
                    <p class="text-slate-400 ">No account ?</p>
                    <NuxtLink to="/signup" class="underline">
                         SignUp
                    </NuxtLink> 
               </div>
          </div>
     </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref("");
const password = ref("");


const registerUser = () => {
     createUserWithEmailAndPassword(
     getAuth(), email.value, password.value)
          .then((data)=> { console.log("Successfully Registered!") })
          .catch((error)=> {
               console.log(error.code);
               alert(error.message);
          }
          ) 
}
useHead({
     title: "Login Page"
})

definePageMeta({
     layout: "default"
})
</script>

<style scoped>
     button {
          width: 100px;
          height: 40px;
     }

     input {
          width: 320px;
          height: 50px;
     }
</style>
