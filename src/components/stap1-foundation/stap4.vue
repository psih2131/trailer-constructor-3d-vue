<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.foundation?.stap_4?.length >0">

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

if(item.model?.url){
currentModel.value = item.model.url
}
else{
currentModel.value = trailerModel_7x12
}

console.log(currentModel.value)
}


//HOOKS
onMounted(()=>{

    sizeList.value = store.dataServer.foundation.stap_4

    activeIndex.value = 0
    
    if(sizeList.value[0].model?.url){
        currentModel.value = sizeList.value[0].model.url
    }
    else{
        currentModel.value = trailerModel_7x12
    }
    
})

</script>