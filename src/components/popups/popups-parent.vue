<template>
    <div class="popups-wrapper" @click.self="closeAllPopup">
        <Transition name="bg-fade">
          <div v-if="show" class="popups-wrapper__bg" @click.self="closeAllPopup"></div>
        </Transition>

        <popupDone v-if="store.popupCurrent == 'popup-done'" />

    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch,   } from 'vue';

import popupDone from '@/components/popups/popupDone.vue'


//DATA
const show = ref(false)

const store = useCounterStore()

const parentClicked = ref(false)

//METHODS 
const closeAllPopup = ()=>{
    store.changePopupCloseAll()
}

//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  show.value = true

  
});

onBeforeUnmount(() => {
  show.value = false
});

 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })

</script>