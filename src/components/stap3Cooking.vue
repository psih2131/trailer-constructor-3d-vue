<template>
    <div class="builder-sec__body">
        <div class="builder-sec__body-main-data body-main-data">

            <div class="body-main-data__stap-counter stap-counter">
                <div class="stap-counter__num">{{ store.cookingCounter }}</div>
                <p class="stap-counter__title" v-if="store.cookingCounter == 1">Cooking Equipment</p>
                <p class="stap-counter__title" v-else-if="store.cookingCounter == 2">Ventilation & Climate</p>
                <p class="stap-counter__title" v-else-if="store.cookingCounter == 3">Warming & Holding</p>
                <p class="stap-counter__title" v-else-if="store.cookingCounter == 4">Refrigeration</p>
            </div>

            <stap1 v-if="store.cookingCounter == 1"/>

            <stap2 v-if="store.cookingCounter == 2"/>

            <stap3 v-if="store.cookingCounter == 3"/>

            <stap4 v-if="store.cookingCounter == 4"/>

        </div>

        <asideComponent/>
        
    </div>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import asideComponent from '@/components/stap3-cooking/asideComponent.vue'

  import stap1 from '@/components/stap3-cooking/stap1.vue'

  import stap2 from '@/components/stap3-cooking/stap2.vue'

  import stap3 from '@/components/stap3-cooking/stap3.vue'

  import stap4 from '@/components/stap3-cooking/stap4.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

</script>