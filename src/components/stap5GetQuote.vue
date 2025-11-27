<template>
    <div class="builder-sec__body">

        <div class="get-quote">
        
        <stap1 v-if="store.getQuoteCounter == 1"/>

        </div>
        
    </div>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import stap1 from '@/components/stap5-get-quote/stap1.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

</script>