<template>
  <div>
    <div class="text-center my-4 font-bold text-xl">
      <span>Login </span>
    </div>
    <div
      v-if="errorServer"
      class="bg-red-100 border border-red-400 text-red-700 w-[50%] m-auto my-3 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold"> {{ errorServer }}</strong>

      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <div class="w-[50%] m-auto">
      <!-- email -->
      <div class="mb-6">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
        </div>
        <div>
          <input
            v-model="email"
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <!-- validations -->
        <div>
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
      </div>

      <!-- password -->
      <div class="mb-6">
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <!-- validations -->
        <div>
          <span class="" v-if="errors.password">
            {{ errors.password }}
          </span>
        </div>
      </div>

      <button
        @click="onLogin"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import store from "../store";
import SignupValidations from "../services/SignupValidations";

// data
const email = ref("");
const password = ref("");
const errors = ref([]);
const store = useStore();
const errorServer = ref("");
const router = useRouter();

// computed property
// const name = computed(() => store.state.name);

// function
async function onLogin() {
  console.log("test");

  // check validations
  let validations = new SignupValidations(email.value, password.value);
  // do the signup
  // else show errors
  errors.value = validations.checkValidations();
  if ("email" in errors.value || "password" in errors.value) {
    return false;
  }

  try {
    await store.dispatch("Login", {
      email: email.value,
      password: password.value,
    });
    router.push("/post");
    // Handle successful signup
  } catch (error) {
    errorServer.value = error;
    // Handle signup error
    console.log("Signin error:", error);
  }
}

// actions
</script>

<style>
.colco {
  color: #474747;
}
</style>
