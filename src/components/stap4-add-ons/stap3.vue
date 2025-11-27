<template>
    <div class="body-main-data__wrapper">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-for="(item,index) in sizeList">
                <div class="trailer-size__choice-element choice-element choice-element--33" 
                :class="{'active':item.selected == true}"
                @click="selectCurrentSize(item,index)"
                data-model="@/assets/models-3d/7x12_Square_Trailer.glb">
                
                    <div class="choice-element__input-wrapper">
                        <div class="hoice-element__input">

                            <svg v-if="item.selected == true" width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2ZM13.95 6.796C14.1376 6.60849 14.2431 6.35412 14.2432 6.08885C14.2433 5.82358 14.138 5.56914 13.9505 5.3815C13.763 5.19386 13.5086 5.08839 13.2434 5.0883C12.9781 5.0882 12.7236 5.19349 12.536 5.381L7.586 10.331L5.465 8.21C5.37216 8.11709 5.26192 8.04338 5.14059 7.99307C5.01926 7.94276 4.8892 7.91684 4.75785 7.9168C4.49258 7.9167 4.23814 8.02199 4.0505 8.2095C3.86286 8.39701 3.75739 8.65138 3.7573 8.91665C3.7572 9.18192 3.86249 9.43636 4.05 9.624L6.808 12.382C6.91015 12.4842 7.03144 12.5653 7.16493 12.6206C7.29842 12.6759 7.4415 12.7044 7.586 12.7044C7.7305 12.7044 7.87358 12.6759 8.00707 12.6206C8.14056 12.5653 8.26185 12.4842 8.364 12.382L13.95 6.796Z" fill="#5D3FD3"/>
                            </svg>

                            <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="16" height="16" rx="2" stroke="#5D3FD3" stroke-width="2"/>
                            </svg>

                        </div>
                    </div>
                    
                    <div class="choice-element__data">
                        <p class="trailer-size__element-title">{{ item.title }}</p>
                        <p class="trailer-size__element-subtitle">{{ item.subtitle }}</p>
                        <p class="trailer-size__element-cost">{{ item.cost }}</p>
                    </div>

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


  const activeIndex = ref(0)

  const sizeList = ref([
    {
        "title":"Electric Awning - 8 ft",
        "subtitle":"Motorized retractable awning with remote",
        "cost":"+$1,400",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Electric Awning - 10 ft",
        "subtitle":"Motorized retractable awning with remote",
        "cost":"+$1,600",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Electric Awning - 12 ft",
        "subtitle":"Motorized retractable awning with remote",
        "cost":"+$1,800",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Add Second Serving Window",
        "subtitle":"For separate order/pickup lines",
        "cost":"+$850",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Electric Stabilizer Jacks (Set of 4)",
        "subtitle":"One-touch automatic leveling system",
        "cost":"+$1,900",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Electric Front Jack",
        "subtitle":"Heavy-duty electric tongue jack with remote control",
        "cost":"+$850",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Exterior LED Lights - Set of 2",
        "subtitle":"Weatherproof, bright lighting for service areas",
        "cost":"+$199",
        "model": trailerModel_7x12,
        "selected": false,
    },
    {
        "title":"Exterior LED Lights - Set of 4",
        "subtitle":"Complete lighting solution for all sides",
        "cost":"+$299",
        "model": trailerModel_7x12,
        "selected": false,
    },





    
  ])

  const currentModel = ref(sizeList.value[0].model)

  const selectCurrentSize = (item, index)=>{
    activeIndex.value = index
    // currentModel.value = item.model
    // console.log(currentModel.value)

    sizeList.value[index].selected = !sizeList.value[index].selected
  }

</script>