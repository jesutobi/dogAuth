<template>
  <div class="bgIntro">
    <div class="flex items-center justify-center h-screen">
      <div>
        <div class="font2 text-center text-[3rem] text-white">
          <span> Dog App</span>
        </div>
        <div
          class="font2 text-[3rem] text-center max-[768px]:text-[1.5rem] text-white"
        >
          <span> Explore our collections of dogs</span>
        </div>
        <!-- auth -->
        <div class="flex items-center justify-center">
          <router-link :to="{ name: 'login' }">
            <button
              class="rounded-md bg-[#5d5398] m-1 w-40 hover:text-[#fbc72e] p-2 text-white font-bold"
            >
              Login
            </button></router-link
          >
          <router-link :to="{ name: 'signup' }">
            <button
              class="rounded-md bg-[#5d5398] m-1 w-40 hover:text-[#fbc72e] p-2 text-white font-bold"
            >
              Signup
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bgIntro {
  background-image: url(../assets/169074_adapted_landscape_2400x2400.jpg);
  background-size: cover;
  height: 100vh;
}
</style>
