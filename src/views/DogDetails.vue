<template>
  <div class="max-w-[800px] font1 mx-auto p-8">
    <div>
      <h1 class="text-4xl font-bold mb-5 text-orange-500">
        <!-- {{ meal.strMeal }} -->
      </h1>
    </div>

    <div class="flex justify-center">
      <div>
        <div class="flex justify-center">
          <img
            :src="dogDetail"
            class="max-w-[100%]"
            :class="{
              cartoonFilter: isCartoonifyActive,
              grayscale: isGrayscaleActive,
              sepia: isSepiaActive,
            }"
          />
        </div>
        <!-- filter -->
        <div class="flex items-center justify-around my-2">
          <!-- /carttonify -->
          <div @click="changeFilter('cartoon')">
            <div>
              <img
                :src="dogDetail"
                style="width: 100px; height: 100px"
                class="object-cover cartoonFilter rounded-[1rem] border-black border-4"
                alt=""
              />
            </div>
            <!-- text -->
            <div class="py-2 text-sm font-semibold text-center">
              <span>Cartoonify</span>
            </div>
          </div>
          <!-- grayscale -->
          <div @click="changeFilter('grayscale')">
            <div>
              <img
                :src="dogDetail"
                style="width: 100px; height: 100px"
                class="object-cover rounded-[1rem] grayscale border-black border-4"
                alt=""
              />
            </div>
            <!-- text -->
            <div class="py-2 text-sm font-semibold text-center">
              <span>Grayscale</span>
            </div>
          </div>
          <!-- sepia -->
          <div @click="changeFilter('sepia')">
            <div>
              <img
                :src="dogDetail"
                style="width: 100px; height: 100px"
                class="object-cover rounded-[1rem] sepia border-black border-4"
                alt=""
              />
            </div>
            <!-- text -->
            <div class="py-2 text-sm font-semibold text-center">
              <span>Sepia</span>
            </div>
          </div>
        </div>
        <!-- image source -->
        <div>
          <span class="font-bold">{{ dogDetail }}</span>
        </div>
        <!-- dog details -->
        <div class="my-3">
          <!-- name -->
          <div class="flex">
            <!-- title -->
            <div>
              <span class="font-bold text-base">Title :</span>
            </div>
            <div>
              <span>Lorem, ipsum.</span>
            </div>
          </div>
          <!-- description-->
          <div>
            <!-- title -->
            <div>
              <span class="font-bold text-base">Description :</span>
            </div>
            <div>
              <span
                >Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Deleniti, molestias..</span
              >
            </div>
          </div>
          <!-- behaviour -->
          <div>
            <!-- title -->
            <div>
              <span class="font-bold text-base">Behaviour :</span>
            </div>
            <div>
              <span
                >Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Deleniti, molestias..</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const dogDetail = ref("");

// filter change state
const isCartoonifyActive = ref(false);
const isGrayscaleActive = ref(false);
const isSepiaActive = ref(false);

function changeFilter(data) {
  if (data == "cartoon") {
    isCartoonifyActive.value = true;
    isGrayscaleActive.value = false;
    isSepiaActive.value = false;
  } else if (data == "grayscale") {
    isGrayscaleActive.value = true;
    isCartoonifyActive.value = false;
    isSepiaActive.value = false;
  } else if (data == "sepia") {
    isSepiaActive.value = true;
    isGrayscaleActive.value = false;
    isCartoonifyActive.value = false;
  }
}

onMounted(() => {
  console.log(dogDetail.value);

  dogDetail.value = route.params.name;
});
</script>

<style>
.cartoonFilter {
  filter: brightness(1.2) contrast(1.2) sepia(0.3) blur(1px);
}
</style>
