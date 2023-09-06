<template>
  <div>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
        >
          <div><span>Home</span></div>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: 'login' }"
          class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
        >
          <div><span>Login</span></div>
        </router-link>
        <router-link
          :to="{ name: 'signup' }"
          class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
        >
          <div><span>Signup</span></div>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style></style>
