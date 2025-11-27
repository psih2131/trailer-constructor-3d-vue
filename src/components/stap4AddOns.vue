<template>
    <div class="builder-sec__body">
        <div class="builder-sec__body-main-data body-main-data">

            <div class="body-main-data__stap-counter stap-counter">
                <div class="stap-counter__num">{{ store.addOnsCounter }}</div>
                <p class="stap-counter__title" v-if="store.addOnsCounter == 1">Safety & Fire Suppression</p>
                <p class="stap-counter__title" v-else-if="store.addOnsCounter == 2">Prep & Shelving</p>
                <p class="stap-counter__title" v-else-if="store.addOnsCounter == 3">Exterior Add-ons</p>
                <p class="stap-counter__title" v-else-if="store.addOnsCounter == 4">Specialty & Marketing</p>
            </div>

            <stap1 v-if="store.addOnsCounter == 1"/>

            <stap2 v-if="store.addOnsCounter == 2"/>

            <stap3 v-if="store.addOnsCounter == 3"/>

            <stap4 v-if="store.addOnsCounter == 4"/>

        </div>

        <asideComponent/>
        
    </div>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import asideComponent from '@/components/stap4-add-ons/asideComponent.vue'

  import stap1 from '@/components/stap4-add-ons/stap1.vue'

  import stap2 from '@/components/stap4-add-ons/stap2.vue'

  import stap3 from '@/components/stap4-add-ons/stap3.vue'

  import stap4 from '@/components/stap4-add-ons/stap4.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

</script>