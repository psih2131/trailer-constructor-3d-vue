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
            
<!-- 
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x14_Square_Trailer.glb">7’ x 14’</div>   
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x16_Square_Trailer.glb">7’ x 16’</div>
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x18_Square_Trailer.glb">7’ x 18’</div>
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x20_Square_Trailer.glb">7’ x 20’</div>
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x22_Square_Trailer.glb">7’ x 22’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/7x22_Square_Trailer_7ft_porch.glb">7’ x 22’ porch</div>


            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x12_Square_Trailer.glb">8.5’ x 12’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x14_Square_Trailer.glb">8.5’ x 14’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x16_Square_Trailer.glb">8.5’ x 16’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x18_Square_Trailer.glb">8.5’ x 18’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x20_Square_Trailer.glb">8.5’ x 20’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x22_Square_Trailer.glb">8.5’ x 22’</div>
            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x22_Square_Trailer_7ft_porch.glb">8.5’ x 22’ porch
            </div>


            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x24_Square_Trailer.glb">8.5’ x 24’</div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x24_Square_Trailer_7ft_porch.glb">8.5’ x 24’ porch
            </div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x32_Square_Trailer_7ft_porch.glb">8.5’ x 32’ porch
            </div>

            <div class="trailer-size__element"
                data-model="@/assets/models-3d/8.5x36_Square_Trailer_7ft_porch.glb">8.5’ x 36’ porch
            </div>

            <div class="trailer-size__element trailer-size__element--big"
                data-model="@/assets/models-3d/8.5x40_Square_Trailer_porch_Gooseneck.glb">8.5’ x 36’
                porch gooseneck
            </div> -->


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
        "size":"Square (standart)",
        "model": trailerModel_7x12
    },
    {
        "size":"Airstream (Curved)",
        "model": trailerModel_7x14
    },
    {
        "size":" Fully Custom (Quoted Separately)",
        "model": trailerModel_7x16
    },    
  ])

  const currentModel = ref(sizeList.value[0].model)

  const selectCurrentSize = (item, index)=>{
    activeIndex.value = index
    currentModel.value = item.model
    console.log(currentModel.value)
  }

</script>