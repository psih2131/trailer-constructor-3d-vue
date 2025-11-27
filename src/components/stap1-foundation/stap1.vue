<template>
    <div class="body-main-data__wrapper">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__element" 
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

  import trailerModel_7x22_porch from '@/assets/models/models-3d/7x22_Square_Trailer_7ft_porch.glb?url';

  import trailerModel_8_5x12 from '@/assets/models/models-3d/8.5x12_Square_Trailer.glb?url';

  import trailerModel_8_5x14 from '@/assets/models/models-3d/8.5x14_Square_Trailer.glb?url';
  
  import trailerModel_8_5x16 from '@/assets/models/models-3d/8.5x16_Square_Trailer.glb?url';

  import trailerModel_8_5x18 from '@/assets/models/models-3d/8.5x18_Square_Trailer.glb?url';

  import trailerModel_8_5x20 from '@/assets/models/models-3d/8.5x20_Square_Trailer.glb?url';

  import trailerModel_8_5x22 from '@/assets/models/models-3d/8.5x22_Square_Trailer.glb?url';

  import trailerModel_8_5x22_porch from '@/assets/models/models-3d/8.5x22_Square_Trailer_7ft_porch.glb?url';

  import trailerModel_8_5x24 from '@/assets/models/models-3d/8.5x24_Square_Trailer.glb?url';

  import trailerModel_8_5x24_porch from '@/assets/models/models-3d/8.5x24_Square_Trailer_7ft_porch.glb?url';

  import trailerModel_8_5x32_porch from '@/assets/models/models-3d/8.5x32_Square_Trailer_7ft_porch.glb?url';

  import trailerModel_8_5x36_porch from '@/assets/models/models-3d/8.5x36_Square_Trailer_7ft_porch.glb?url';

  import trailerModel_8_5x40_porch_gooseneck from '@/assets/models/models-3d/8.5x40_Square_Trailer_porch_Gooseneck.glb?url';

  const activeIndex = ref(0)

  const sizeList = ref([
    {
        "size":"7’ x 12’",
        "model": trailerModel_7x12
    },
    {
        "size":"7’ x 14’",
        "model": trailerModel_7x14
    },
    {
        "size":"7’ x 16’",
        "model": trailerModel_7x16
    },
    {
        "size":"7’ x 18’",
        "model": trailerModel_7x18
    },
    {
        "size":"7’ x 20’",
        "model": trailerModel_7x20
    },
    {
        "size":"7’ x 22’",
        "model": trailerModel_7x22
    },
    {
        "size":"7’ x 22’ porch",
        "model": trailerModel_7x22_porch
    },

    {
        "size":"8.5’ x 12’",
        "model": trailerModel_8_5x12
    },
    {
        "size":"8.5’ x 14’",
        "model": trailerModel_8_5x14
    },
    {
        "size":"8.5’ x 16’",
        "model": trailerModel_8_5x16
    },
    {
        "size":"8.5’ x 18’",
        "model": trailerModel_8_5x18
    },
    {
        "size":"8.5’ x 20’",
        "model": trailerModel_8_5x20
    },
    {
        "size":"8.5’ x 22’",
        "model": trailerModel_8_5x22
    },
    {
        "size":"8.5’ x 22’ porch",
        "model": trailerModel_8_5x22_porch
    },
    {
        "size":"8.5’ x 24’",
        "model": trailerModel_8_5x24
    },
    {
        "size":"8.5’ x 24’ porch",
        "model": trailerModel_8_5x24_porch
    },
    {
        "size":"8.5’ x 32’ porch",
        "model": trailerModel_8_5x32_porch
    },
    {
        "size":"8.5’ x 36’ porch",
        "model": trailerModel_8_5x36_porch
    },
    {
        "size":"8.5’ x 36’ porch gooseneck",
        "model": trailerModel_8_5x40_porch_gooseneck
    },

    
  ])

  const currentModel = ref(sizeList.value[0].model)

  const selectCurrentSize = (item, index)=>{
    activeIndex.value = index
    currentModel.value = item.model
    console.log(currentModel.value)
  }

</script>