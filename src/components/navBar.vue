<template>
  <div class="font1 shadow-md py-5">
    <div class="flex items-center text-orange-500 justify-between">
      <div class="font-bold text-[1.5rem] font-bold">
        <!-- <router-link :to="{ name: 'home' }"> Home</router-link> -->
      </div>
      <div class="flex font2 px-3 items-center font-bold">
        <div class="px-1" v-if="!isauthenticated">
          <router-link :to="{ name: 'login' }"> Login</router-link>
        </div>
        <div class="px-1" v-if="!isauthenticated">
          <router-link :to="{ name: 'signup' }"> Signup</router-link>
        </div>
        <div
          v-if="isauthenticated"
          class="pointer px-5 mx-3 text-orange-500 font-bold"
        >
          <a href="" @click.prevent="logout()"> <span>logout</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();
const isauthenticated = computed(() => store.getters.isAuthenticated);

function logout() {
  console.log("test");
  store.dispatch("logout");
  router.replace("/intro");
}
</script>

<style></style>
