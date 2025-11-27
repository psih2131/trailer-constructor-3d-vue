<template>
    <div class="builder-sec__body">
        <div class="builder-sec__body-main-data body-main-data">

            <div class="body-main-data__stap-counter stap-counter">
                <div class="stap-counter__num">{{ store.foundationCounter }}</div>
                <p class="stap-counter__title" v-if="store.foundationCounter == 1">Select size</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 2">Trailer Style</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 3">Porch Length</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 4">Hitch Type</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 5">Interior Height</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 6">Frame Material</p>
                <p class="stap-counter__title" v-else-if="store.foundationCounter == 7">Axle & Suspension</p>
            </div>

            <stap1 v-if="store.foundationCounter == 1"/>

            <stap2 v-if="store.foundationCounter == 2"/>
            
            <stap3 v-if="store.foundationCounter == 3"/>

            <stap4 v-if="store.foundationCounter == 4"/>

            <stap5 v-if="store.foundationCounter == 5"/>

            <stap6 v-if="store.foundationCounter == 6"/>

            <stap7 v-if="store.foundationCounter == 7"/>

        </div>

        <asideComponent/>
        
    </div>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import asideComponent from '@/components/stap1-foundation/asideComponent.vue'

  import stap1 from '@/components/stap1-foundation/stap1.vue'

  import stap2 from '@/components/stap1-foundation/stap2.vue'

  import stap3 from '@/components/stap1-foundation/stap3.vue'

  import stap4 from '@/components/stap1-foundation/stap4.vue'

  import stap5 from '@/components/stap1-foundation/stap5.vue'

  import stap6 from '@/components/stap1-foundation/stap6.vue'

  import stap7 from '@/components/stap1-foundation/stap7.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

</script>