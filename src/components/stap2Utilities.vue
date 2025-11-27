<template>
    <div class="builder-sec__body">
        <div class="builder-sec__body-main-data body-main-data">

            <div class="body-main-data__stap-counter stap-counter">
                <div class="stap-counter__num">{{ store.utilitiesCounter }}</div>
                <p class="stap-counter__title" v-if="store.utilitiesCounter == 1">Electrical & Power</p>
                <p class="stap-counter__title" v-else-if="store.utilitiesCounter == 2">Propane Systems</p>
                <p class="stap-counter__title" v-else-if="store.utilitiesCounter == 3">Solar Power Options</p>
                <p class="stap-counter__title" v-else-if="store.utilitiesCounter == 4">Plumbing & Water</p>
            </div>

            <stap1 v-if="store.utilitiesCounter == 1"/>

            <stap2 v-if="store.utilitiesCounter == 2"/>

            <stap3 v-if="store.utilitiesCounter == 3"/>

            <stap4 v-if="store.utilitiesCounter == 4"/>

        </div>

        <asideComponent/>
        
    </div>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import asideComponent from '@/components/stap2-utilities/asideComponent.vue'

  import stap1 from '@/components/stap2-utilities/stap1.vue'

  import stap2 from '@/components/stap2-utilities/stap2.vue'

  import stap3 from '@/components/stap2-utilities/stap3.vue'

  import stap4 from '@/components/stap2-utilities/stap4.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

</script>