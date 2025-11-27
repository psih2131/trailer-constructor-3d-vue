<template>
   
    <div class="model-3d">
  
        <model-viewer 
        v-if="currentUrl"

        @load="onModelLoaded"
        id="trailerViewer" 
        :key="currentUrl"
        :src="currentUrl"
        alt="Trailer 3D model" 
        camera-controls 
        disable-zoom 
        auto-rotate 
        shadow-intensity="1"
        exposure="1" 
        ar 
        ar-modes="webxr scene-viewer quick-look">
        </model-viewer>
        
        <div class="preloader-conteiner" :class="{'hidePreloader': preloaderStatus == false}">
            <div class="preloader ">
                <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup >

import '@google/model-viewer';

import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

// import trailerModel from '@/assets/models/models-3d/7x12_Square_Trailer.glb?url';

const currentUrl = ref(null)

const preloaderStatus = ref(false)

const props = defineProps({
    urlModel: String,
})

const changeUrl = ()=>{
    preloaderStatus.value = true
    currentUrl.value = props.urlModel
    console.log(currentUrl.value)  
}

const onModelLoaded = ()=>{
    console.log('Модель подгрузилась!');
    setTimeout(()=>{
        preloaderStatus.value = false
    },500)
}



watch(
  () => props.urlModel,
  (newVal, oldVal) => {
    changeUrl()
  }
)

onMounted(()=>{
    changeUrl()
})

</script>