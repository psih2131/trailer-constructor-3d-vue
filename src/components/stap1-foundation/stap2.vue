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
currentModel.value = item.model.url
console.log(currentModel.value)
}


//HOOKS
onMounted(()=>{

    sizeList.value = store.dataServer.foundation.stap_2

    activeIndex.value = 0

    currentModel.value = sizeList.value[0].model.url
})

</script>