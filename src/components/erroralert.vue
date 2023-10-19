<template>
  <div
    v-if="errorServer"
    id="toast-default toast-bottom-right"
    class="fixed flex items-center justify-between w-full max-w-xs p-4 space-x-4 text-black bg-white divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 space-x bg-red-200"
    role="alert"
  >
    <div class="text-sm font-normal">{{ errorServer }}</div>
    <button
      @click="removeServerAlert"
      type="button"
      class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white bg-red-200 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-default"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    errorServer: String, // Assuming errorServer is a string. Adjust the type as needed.
  },
  methods: {
    removeServerAlert() {
      // Set errorServer to null or an empty string to hide the alert.
      this.$emit("update:errorServer", null); // Emits an event to update the prop value in the parent component.
    },
  },
};
</script>

<style></style>
