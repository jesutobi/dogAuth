<template>
  <div class="font1">
    <!-- <pre>{{ dogbreed }}</pre> -->
    <div class="mt-[4rem] text-center">
      <div>
        <h2 class="font-bold text-[1.5rem] md:text-[3rem] text-[#5d5398]">
          RANDOM DOG BREEDS AROUND THE WORLD
        </h2>
      </div>
      <div>
        <h3 class="text-grey text-[1rem] font-bold md:text-[2rem ]">
          click an image to see more
        </h3>
      </div>
    </div>
    <!-- search -->
    <div class="flex justify-center my-[3rem]">
      <div class="w-[50%]">
        <select
          @change="selectedBreed"
          v-model="keyword"
          name=""
          id=""
          class="rounded-lg bg-white p-[1rem] border w-full"
        >
          <option value="">Filter By breeds</option>
          <option
            v-for="(breeds, index) of breedKeys"
            :key="index"
            :value="breeds"
          >
            {{ breeds }}
          </option>
        </select>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8"
    >
      <!--  -->
      <div
        v-for="(img, index) of dogsBybreed.slice(0, 20)"
        :key="index"
        class="bg-white shadow rounded-xl hover:scale-105 transition-all"
      >
        <router-link :to="{ name: 'dogDetails', params: { name: img } }">
          <img :src="img" class="rounded-t-xl w-full h-[20rem] object-cover" />
          <div class="text-center p-3">
            <span class="text-[#5d5398]">See more</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
import store from "../store";

const keyword = ref("");
// console.log(keyword);
const allDogBreed = computed(() => store.state.dogBreed);

// selecting only the keys in an array
const breedKeys = computed(() => Object.keys(allDogBreed.value));

// fectched dogs by breed
const dogsBybreed = computed(() => store.state.dogs);

// function
function selectedBreed() {
  // console.log(keyword.value);
  // sending keyword to the store
  store.dispatch("filterByBreeds", keyword.value);
}

// onMounted
onMounted(() => {
  store.dispatch("getRandomDogs");
  store.dispatch("getAllDogBreed");
});
</script>

<style></style>
