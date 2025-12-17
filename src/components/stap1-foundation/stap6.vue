<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.foundation?.stap_6?.length >0">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__element trailer-size__element--33 trailer-size__element--subtitle" 
                :class="{'active':index == activeIndex}"
                @click="selectCurrentSize(item,index)"
                data-model="@/assets/models-3d/7x12_Square_Trailer.glb">
                
                    <p class="trailer-size__element-title">{{ item.title_value }}</p>
                    <p class="trailer-size__element-subtitle">{{ item.subtitle }}</p>

                </div>
            </template>

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

store.stapsMemory.stap1_Foundation.stap6.currentIndex = index
store.stapsMemory.stap1_Foundation.stap6.priceValue = item.price_value

console.log(store.stapsMemory)
}


//HOOKS
onMounted(()=>{

    sizeList.value = store.dataServer.foundation.stap_6

    activeIndex.value = 0
    
    // if(sizeList.value[0].model?.url){
    //     currentModel.value = sizeList.value[0].model.url
    // }
    // else{
    //     currentModel.value = trailerModel_7x12
    // }

    if(store.stapsMemory.stap1_Foundation.stap6.currentIndex){
        let currentIndexSelect = +store.stapsMemory.stap1_Foundation.stap6.currentIndex

        activeIndex.value =  currentIndexSelect

        // currentModel.value = sizeList.value[+currentIndexSelect].model.url
    }
    else{
        activeIndex.value = 0

        // currentModel.value = sizeList.value[0].model.url

        store.stapsMemory.stap1_Foundation.stap6.currentIndex = 0
        
        store.stapsMemory.stap1_Foundation.stap6.priceValue = store.dataServer.foundation.stap_6[0].price_value
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