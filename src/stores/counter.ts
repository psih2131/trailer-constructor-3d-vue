import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const stapCounter = ref<number>(1)

  const foundationCounter = ref<number>(1)

  const utilitiesCounter = ref<number>(1)

  const cookingCounter = ref<number>(1)

  const addOnsCounter = ref<number>(1)

  const getQuoteCounter = ref<number>(1)

  function changeStapCounter(newValue: number) {
    stapCounter.value = newValue
    console.log('stapCounter.value', stapCounter.value)
  }

  function changeFoundationCounter(newValue: number) {
    foundationCounter.value = newValue
  }

  function changeUtilitiesCounter(newValue: number) {
    utilitiesCounter.value = newValue
  }

  function changeCookingCounter(newValue: number) {
    cookingCounter.value = newValue
  }

  function changeAddOnsCounter(newValue: number) {
    addOnsCounter.value = newValue
  }

  function changeGetQuoteCounter(newValue: number) {
    getQuoteCounter.value = newValue
  }


  return {
    stapCounter,
    foundationCounter,
    utilitiesCounter,
    cookingCounter,
    addOnsCounter,
    getQuoteCounter,

    changeStapCounter,
    changeFoundationCounter,
    changeUtilitiesCounter,
    changeCookingCounter,
    changeAddOnsCounter,
    changeGetQuoteCounter,
  }
})
