import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const dataServer = ref<any>(null)

  const stapCounter = ref<number>(1)

  const foundationCounter = ref<number>(1)

  const utilitiesCounter = ref<number>(1)

  const cookingCounter = ref<number>(1)

  const addOnsCounter = ref<number>(1)

  const getQuoteCounter = ref<number>(1)

  const popupCurrent = ref<any>(null)

  const popupCloseAll = ref<any>(true)

  const stapsMemory = ref<any>({
    'stap1_Foundation': {
      'stap1': {
        'title': 'Trailer Size',
        'currentIndex': null,
        'materialCost': null,
        'buildCost': null,
        'priceValue': null,

      },
      'stap2': {
        'title': 'Trailer Style',
        'currentIndex': null,
        'priceValue': null,
        'titleValue': null,
      },
      'stap3': {
        'title': 'Porch Length',
        'currentIndex': null,
        'priceValue': null,
      },
      'stap4': {
        'title': 'Hitch Type',
        'currentIndex': null,
        'priceValue': null,
      },
      'stap5': {
        'title': 'Interior Height',
        'currentIndex': null,
        'priceValue': null,
      },
      'stap6': {
        'title': 'Frame Material',
        'currentIndex': null,
        'priceValue': null,
      },
      'stap7': {
        'title': 'Axle & Suspension',
        'currentIndex': null,
        'priceValue': null,
      },
    },

    'stap2_Utilities': {
      'stap1': {
        'title': 'Electrical & Power',
        'selectedElements': []
      },
      'stap2': {
        'title': 'Propane Systems',
        'selectedElements': []
      },
      'stap3': {
        'title': 'Solar Power Options',
        'selectedElements': []
      },
      'stap4': {
        'title': 'Plumbing & Water',
        'selectedElements': []
      },
    },


    'stap3_Equipment': {
      'stap1': {
        'title': 'Cooking Equipment',
        'selectedElements': []
      },
      'stap2': {
        'title': 'Ventilation & Climate',
        'selectedElements': []
      },
      'stap3': {
        'title': 'Warming & Holding',
        'selectedElements': []
      },
      'stap4': {
        'title': 'Refrigeration',
        'selectedElements': []
      },
    },


    'stap4_AddOns': {
      'stap1': {
        'title': 'Safety & Fire Suppression',
        'selectedElements': []
      },
      'stap2': {
        'title': 'Prep & Shelving',
        'selectedElements': []
      },
      'stap3': {
        'title': 'Exterior Add-ons',
        'selectedElements': []
      },
      'stap4': {
        'title': 'Specialty & Marketing',
        'selectedElements': []
      },
    },
  })

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

  function changeDataServer(newValue: any) {
    dataServer.value = newValue
    console.log('dataServer', dataServer.value)
  }

  function changePopupCurrent(newValue: any) {
    popupCurrent.value = newValue

    console.log('popupCurrent', popupCurrent.value)
  }
  const changePopupCloseAll = () => {
    popupCloseAll.value = !popupCloseAll.value
    console.log('new value store', popupCloseAll.value)
  }



  return {
    stapCounter,
    foundationCounter,
    utilitiesCounter,
    cookingCounter,
    addOnsCounter,
    getQuoteCounter,
    dataServer,
    stapsMemory,
    popupCurrent,
    popupCloseAll,

    changeStapCounter,
    changeFoundationCounter,
    changeUtilitiesCounter,
    changeCookingCounter,
    changeAddOnsCounter,
    changeGetQuoteCounter,
    changeDataServer,
    changePopupCurrent,
    changePopupCloseAll,
  }
})
