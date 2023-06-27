<template>    
     <section class="grid place-items-center mt-5 lg:mt-28">
       <div id="flexbox" class="lg:flex md:justify-between lg:w-3/4">
          <SearchBar />
         <div class="home-car mr-36 lg:mr-0">
               <img src="../assets/icons/car.svg" alt="car"/>
         </div>
       </div>
     </section>

     <div class="mt-16">
          <Footer />
     </div>
</template>

<script setup>
definePageMeta({
     layout: "default"
});
</script>

<style scoped>
.home-car img {
     width: 300px;
     height: 300px;
     position: relative;
     border-bottom: 5px solid black;
     margin-top: -20px;
     animation-name: example;
     animation-duration: 4s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
}

@media screen and (max-width: 400px) {
     .home-car img {
          height: 150px;
          width: 150px;
          margin-bottom: 40px;
          margin-top: 15px;
     }

}

@keyframes example{
     0%   { left:0px }
     50%  { left: 110px }
     100% { left:0 } 
}

@media screen and (min-width: 1024px) {
     .home-car {
          width: 415px;
          height: 300px;
     }
}
@media screen and (max-width: 400px) {
     #flexbox {
          display: flex; 
          flex-flow: column-reverse;
          place-items: center;
     }
}

</style>



