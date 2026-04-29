<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="page-submit-preloader"
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <div class="page-submit-preloader__backdrop" aria-hidden="true" />
      <div class="page-submit-preloader__wrap">
        <div class="page-submit-preloader__ring" />
        <p class="page-submit-preloader__label">Sending your quote…</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>
