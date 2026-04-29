<template>
  <headerV2 />

  <main>
    <main class="main">
      <section class="builder-sec">
        <div class="container-builder">
          <topStapCounter />

          <div class="builder-sec__staps-wrapper" v-if="store.dataServer">
            <stap1Foundation v-if="store.stapCounter == 1" />

            <stap2Utilities v-if="store.stapCounter == 2" />

            <stap3Cooking v-if="store.stapCounter == 3" />

            <stap4AddOns v-if="store.stapCounter == 4" />

            <stap5GetQuote v-if="store.stapCounter == 5" />
          </div>
        </div>
      </section>
    </main>
  </main>
</template>

<script setup>
//IMPORT

import {
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  defineEmits,
} from "vue";

import headerV2 from "@/components/header-v2.vue";

import topStapCounter from "@/components/topStapCounter.vue";

import stap1Foundation from "@/components/stap1Foundation.vue";

import stap2Utilities from "@/components/stap2Utilities.vue";

import stap3Cooking from "@/components/stap3Cooking.vue";

import stap4AddOns from "@/components/stap4AddOns.vue";

import stap5GetQuote from "@/components/stap5GetQuote.vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

//METHODS
async function getServerData() {
  // let stapData = await fetch(`https://stcroixtrailers.theprojectview.com/wp-json/wp/v2/pages?slug=trailer-builder`)
  let stapData = await fetch(
    `https://stcroixtrailers.com/wp-json/wp/v2/pages?slug=builder`,
  );

  let response = await stapData.json();

  console.log(response);

  if (response[0]?.acf) store.changeDataServer(response[0].acf);
}

onMounted(() => {
  getServerData();
});
</script>
