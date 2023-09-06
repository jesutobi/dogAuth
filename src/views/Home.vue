<template>
  <div>
    <!-- <pre>{{ dogbreed }}</pre> -->
    <div class="my-4">
      <div>
        <h2 class="font-bold text-[3rem]">Amazing breeds of dogs i love</h2>
      </div>
      <div>
        <span class="text-grey"
          >click on them to know more about their origin</span
        >
      </div>
    </div>
    <!-- search -->
    <div class="px-8 pb-3 flex items-center w-full">
      <div class="w-full">
        <!-- <input
          type="text"
          v-model="keyword"
          class="rounded border-2 bg-white p-[0.5rem] border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
          placeholder="Search by dog breeds"
          @change="searchByBreeds"
        /> -->
        <select
          @change="selectedBreed"
          v-model="keyword"
          name=""
          id=""
          class="rounded border-2 bg-white p-[0.5rem] border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
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
        v-for="(img, index) of dogsBybreed"
        :key="index"
        class="bg-white shadow rounded-xl hover:scale-105 transition-all"
      >
        <router-link :to="{ name: 'dogDetails', params: { name: img } }">
          <img :src="img" class="rounded-t-xl w-full h-[20rem] object-cover" />
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
