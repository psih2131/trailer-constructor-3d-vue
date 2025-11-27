<template>
    <div class="body-main-data__wrapper">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__element trailer-size__element--33" 
                :class="{'active':index == activeIndex}"
                @click="selectCurrentSize(item,index)"
                data-model="@/assets/models-3d/7x12_Square_Trailer.glb">
                
                    {{ item.size }}

                </div>
            </template>

        </div>
    </div>
</template>

<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import modelViewer from '@/components/model-view.vue'

  import trailerModel_7x12 from '@/assets/models/models-3d/7x12_Square_Trailer.glb?url';

  import trailerModel_7x14 from '@/assets/models/models-3d/7x14_Square_Trailer.glb?url';

  import trailerModel_7x16 from '@/assets/models/models-3d/7x16_Square_Trailer.glb?url';

  import trailerModel_7x18 from '@/assets/models/models-3d/7x18_Square_Trailer.glb?url';

  import trailerModel_7x20 from '@/assets/models/models-3d/7x20_Square_Trailer.glb?url';

  import trailerModel_7x22 from '@/assets/models/models-3d/7x22_Square_Trailer.glb?url';



  const activeIndex = ref(0)

  const sizeList = ref([
    {
        "size":"Standart Bumper Pull",
        "model": trailerModel_7x12
    },
    {
        "size":"Gooseneck Upgrade",
        "model": trailerModel_7x14
    },    
  ])

  const currentModel = ref(sizeList.value[0].model)

  const selectCurrentSize = (item, index)=>{
    activeIndex.value = index
    currentModel.value = item.model
    console.log(currentModel.value)
  }

</script>