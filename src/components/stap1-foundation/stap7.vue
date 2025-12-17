<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.foundation?.stap_7?.length >0">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__element trailer-size__element--33 trailer-size__element--subtitle" 
                :class="{'active':index == activeIndex}"
                @click="selectCurrentSize(item,index)"
                data-model="@/assets/models-3d/7x12_Square_Trailer.glb">
                
                    <p class="trailer-size__element-title">{{ item.title_value }}</p>
                    <p class="trailer-size__element-subtitle">{{ item.subtitle }}</p>
                    <p class="trailer-size__element-cost">{{ item.price }}</p>

                </div>

            </template>

            <div class="trailer-size__element-inform">
                <div class="trailer-size__element-inform-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8843 2.53152C12.5383 1.87752 11.4623 1.87752 11.1163 2.53152L2.11627 19.5315C2.03556 19.6839 1.99564 19.8546 2.00038 20.027C2.00512 20.1994 2.05437 20.3676 2.14333 20.5154C2.2323 20.6631 2.35796 20.7853 2.50812 20.8702C2.65827 20.955 2.82781 20.9996 3.00027 20.9995H21.0003C21.1727 20.9999 21.3423 20.9555 21.4925 20.8708C21.6428 20.7861 21.7685 20.6639 21.8574 20.5162C21.9463 20.3684 21.9955 20.2002 22 20.0278C22.0045 19.8554 21.9643 19.6847 21.8833 19.5325L12.8843 2.53152ZM13.0003 17.9995H11.0003V15.9995H13.0003V17.9995ZM11.0003 13.9995V8.99952H13.0003L13.0013 13.9995H11.0003Z" fill="#856404"/>
                    </svg>
                </div>
                <div class="trailer-size__element-inform-data">
                    <p class="trailer-size__element-inform-title">Engineering Note:</p>
                    <p class="trailer-size__element-inform-text">Final axle configuration may be upgraded based on our engineering analysis of your specific trailer size, weight distribution, and equipment layout. We'll contact you if changes are needed for safety and legal compliance.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup >

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

import modelViewer from '@/components/model-view.vue'

import trailerModel_7x12 from '@/assets/models/models-3d/7x12_Square_Trailer.glb?url';


//DATA
const store = useCounterStore()

const activeIndex = ref(null)

const sizeList = ref(null)

const currentModel = ref(null)

//METHODS
const selectCurrentSize = (item, index)=>{
activeIndex.value = index

// if(item.model?.url){
// currentModel.value = item.model.url
// }
// else{
// currentModel.value = trailerModel_7x12
// }

console.log(currentModel.value)

store.stapsMemory.stap1_Foundation.stap7.currentIndex = index
store.stapsMemory.stap1_Foundation.stap7.priceValue = item.price_value

console.log(store.stapsMemory)
}


//HOOKS
onMounted(()=>{

    sizeList.value = store.dataServer.foundation.stap_7

    activeIndex.value = 0
    
    // if(sizeList.value[0].model?.url){
    //     currentModel.value = sizeList.value[0].model.url
    // }
    // else{
    //     currentModel.value = trailerModel_7x12
    // }

    if(store.stapsMemory.stap1_Foundation.stap7.currentIndex){
        let currentIndexSelect = +store.stapsMemory.stap1_Foundation.stap7.currentIndex

        activeIndex.value =  currentIndexSelect

        // currentModel.value = sizeList.value[+currentIndexSelect].model.url
    }
    else{
        activeIndex.value = 0

        // currentModel.value = sizeList.value[0].model.url

        store.stapsMemory.stap1_Foundation.stap7.currentIndex = 0
        
        store.stapsMemory.stap1_Foundation.stap7.priceValue = store.dataServer.foundation.stap_7[0].price_value
    }

    //current model
    let trailerStyleTitle = store.stapsMemory.stap1_Foundation.stap2.titleValue
    
    if(trailerStyleTitle == 'Airstream (Curved)'){
        currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_aerostream.url
    }
    else{
        currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model.url
    }

   console.log(store.stapsMemory)
    
})

</script>