<template>
  <div>my post page </div>
</template>

<script setup>
import axios from "axios";
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
import store from "../store";

// data
const data = ref([]);

// computed data
const Token = computed(() => store.getters.getToken);
console.log(Token)

// fetch data
const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://auth-5ccbf-default-rtdb.firebaseio.com/posts.json`
    ); // Replace with your API endpoint
    console.log(response)
    data.value = response
  } catch (error) {
    // error.value = "An error occurred while fetching data.";
  }
};

// onMounted
onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
