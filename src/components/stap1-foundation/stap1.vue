<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.foundation?.stap_1?.length >0">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in store.dataServer.foundation.stap_1">
                <div class="trailer-size__element" 
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

import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

import { useCounterStore } from '@/stores/counter'

import modelViewer from '@/components/model-view.vue'



//DATA
const store = useCounterStore()

const activeIndex = ref(null)

const sizeList = ref(null)

const currentModel = ref(null)

const selectCurrentSize = (item, index)=>{
activeIndex.value = index
currentModel.value = item.model.url
console.log(currentModel.value)

store.stapsMemory.stap1_Foundation.stap1.currentIndex = index
store.stapsMemory.stap1_Foundation.stap1.materialCost = item.material_cost
store.stapsMemory.stap1_Foundation.stap1.buildCost = item.build_cost
store.stapsMemory.stap1_Foundation.stap1.priceValue = item.price_value

console.log(store.stapsMemory)

}


//HOOKS
onMounted(()=>{

    sizeList.value = store.dataServer.foundation.stap_1
     
    if(store.stapsMemory.stap1_Foundation.stap1.currentIndex){
        let currentIndexSelect = +store.stapsMemory.stap1_Foundation.stap1.currentIndex

        activeIndex.value =  currentIndexSelect

        currentModel.value = sizeList.value[+currentIndexSelect].model.url
    }
    else{
        activeIndex.value = 0

        currentModel.value = sizeList.value[0].model.url

        store.stapsMemory.stap1_Foundation.stap1.currentIndex = 0
        
        store.stapsMemory.stap1_Foundation.stap1.materialCost = store.dataServer.foundation.stap_1[0].material_cost
        store.stapsMemory.stap1_Foundation.stap1.buildCost = store.dataServer.foundation.stap_1[0].build_cost
        store.stapsMemory.stap1_Foundation.stap1.priceValue = store.dataServer.foundation.stap_1[0].price_value
    }

   console.log(store.stapsMemory)
    
})

</script>