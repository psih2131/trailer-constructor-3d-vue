<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.foundation?.stap_2?.length >0">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__element trailer-size__element--33" 
                :class="{'active':index == activeIndex}"
                @click="selectCurrentSize(item,index)"
                data-model="@/assets/models-3d/7x12_Square_Trailer.glb">
                
                    {{ item.title_value }}

                </div>
            </template>

        </div>
    </div>
</template>

<script setup >
//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

import modelViewer from '@/components/model-view.vue'



//DATA
const store = useCounterStore()

const activeIndex = ref(null)

const sizeList = ref(null)

const currentModel = ref(null)


//METHODS
const selectCurrentSize = (item, index)=>{
    activeIndex.value = index
    // currentModel.value = item.model.url
    // console.log(currentModel.value)

    if(item.title_value == 'Airstream (Curved)'){
        currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_aerostream.url
    }
    else{
        currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model.url
    }

    store.stapsMemory.stap1_Foundation.stap2.currentIndex = index
    store.stapsMemory.stap1_Foundation.stap2.priceValue = item.price_value
    store.stapsMemory.stap1_Foundation.stap2.titleValue = item.title_value


    console.log(store.stapsMemory)

}


//HOOKS
onMounted(()=>{
    

    sizeList.value = store.dataServer.foundation.stap_2
     
    if(store.stapsMemory.stap1_Foundation.stap2.currentIndex){
        let currentIndexSelect = +store.stapsMemory.stap1_Foundation.stap2.currentIndex

        activeIndex.value =  currentIndexSelect

        // currentModel.value = sizeList.value[+currentIndexSelect].model.url

        let trailerStyleTitle = store.stapsMemory.stap1_Foundation.stap2.titleValue
        if(trailerStyleTitle == 'Airstream (Curved)'){
            currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_aerostream.url
        }
        else{
            currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model.url
        }
    }
    else{
        activeIndex.value = 0

        // currentModel.value = sizeList.value[0].model.url
        currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model.url

        store.stapsMemory.stap1_Foundation.stap2.currentIndex = 0
        
        store.stapsMemory.stap1_Foundation.stap2.priceValue = store.dataServer.foundation.stap_2[0].price_value
        store.stapsMemory.stap1_Foundation.stap2.titleValue = store.dataServer.foundation.stap_2[0].title_value

    }

   console.log(store.stapsMemory)
})

</script>