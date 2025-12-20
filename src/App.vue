<template>

  <RouterView />
  
  <popupsPlagin v-if="store.popupCurrent != null" />

</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

import { RouterLink, RouterView } from 'vue-router'

import popupsPlagin from '@/components/popups/popups-parent.vue'

const store = useCounterStore()

</script>

