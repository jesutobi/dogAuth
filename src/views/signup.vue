<template>
  <div>
    <!-- alert -->

    <div class="relative bodydivide font1">
      <div class="md:grid grid-cols-12">
        <div class="col-span-6 max-[768px]:hidden">
          <div class="relative">
            <div class="">
              <img
                src="../assets/169074_adapted_1080x2340.jpg"
                class="h-screen blur-md w-full"
                alt=""
              />
            </div>
            <div class="absolute inset-x-16 inset-y-16 z-[50]">
              <img
                src="../assets/169074_adapted_1080x2340.jpg"
                class="h-[40rem] object-contain w-6/6"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-span-6 py-20">
          <div class="">
            <div class="w-full sm:w-8/12 sm:mx-auto py-7 rounded-lg">
              <div class="">
                <div class="text-center">
                  <!-- title -->
                  <div class="pt-3">
                    <span class="font-bold text-base"
                      >Regsiter your account</span
                    >
                  </div>
                  <div class="text-sm">
                    <span>Its free and easy</span>
                  </div>
                </div>
                <!-- forms -->
                <div class="px-4 sm:px-10 py-5">
                  <!-- <form > -->
                  <!--first name -->
                  <div class="py-3">
                    <div class="text-sm font-bold py-2">
                      <label for="">Enter your email address</label>
                    </div>
                    <div class="w-full">
                      <input
                        placeholder="Email address"
                        v-model.trim="email"
                        type="email"
                        id="email"
                        required
                        class="w-full outline-1 outline-[#5d5398] text-sm p-3 rounded-md border"
                      />
                    </div>
                    <!--email  error -->
                    <div class="text-xs sm:text-sm text-red-500 py-2">
                      <!-- validations -->
                      <span v-if="errors.email">{{ errors.email }}</span>
                    </div>
                  </div>

                  <!--password -->
                  <div class="py-3">
                    <div class="text-sm font-bold py-2">
                      <label for="">Enter your passsword</label>
                    </div>
                    <div>
                      <input
                        v-model.trim="password"
                        type="password"
                        id="password"
                        class="w-full outline-1 outline-[#5d5398] text-sm p-3 rounded-md border"
                        placeholder="password"
                      />
                    </div>
                    <!--password  error -->
                    <div class="text-xs sm:text-sm text-red-500 py-2">
                      <span class="" v-if="errors.password">
                        {{ errors.password }}
                      </span>
                    </div>
                  </div>

                  <!-- register button -->
                  <div class="flex justify-center items-center my-3">
                    <button
                      @click="onSignup()"
                      type="submit"
                      class="rounded-md bg-[#5d5398] w-40 hover:text-[#fbc72e] p-2 text-white font-bold"
                    >
                      Register
                    </button>
                    <div class="px-1" v-if="loadspinner">
                      <Spinner />
                    </div>
                  </div>
                  <!-- login -->
                  <div class="flex align-center text-xs justify-center">
                    <div>
                      <span>If you already have an account</span>
                    </div>
                    <div class="px-1">
                      <router-link
                        :to="{ name: 'login' }"
                        class="text-[#5d5398] font-semibold"
                        ><span> Login</span></router-link
                      >
                    </div>
                  </div>
                  <!-- </form> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alert :errorServer="errorServer" @update:errorServer="updateErrorServer" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import store from "../store";
import SignupValidations from "../services/SignupValidations";
import Alert from "../components/erroralert.vue";

import Spinner from "../components/spinner.vue";
// data
const email = ref("");
const password = ref("");
const errors = ref([]);
const store = useStore();
const errorServer = ref("");
const loadspinner = ref(false);
const router = useRouter();
// const user = stores.state.auth

// computed property
// const signUpData = computed(() => store.state.auth);

// function
function updateErrorServer(newValue) {
  errorServer.value = newValue;
}

async function onSignup() {
  loadspinner.value = true;
  console.log("test");

  let validations = new SignupValidations(email.value, password.value);

  errors.value = validations.checkValidations();
  if ("email" in errors.value || "password" in errors.value) {
    return false;
  }

  try {
    await store.dispatch("Signup", {
      email: email.value,
      password: password.value,
    });
    router.push("/login");
    console.log("success");
    // Handle successful signup
  } catch (error) {
    loadspinner.value = false;
    errorServer.value = error;
    // Handle signup error
    console.log("Signup error:", error);
  }
}
// export default {

// }
</script>

<style></style>
