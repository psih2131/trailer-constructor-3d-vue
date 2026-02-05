<template>
    <div class="body-main-data__wrapper" v-if="store.dataServer.equipment?.stap_2?.length >0">

        <modelViewer :urlModel="currentModel" />

        <div class="trailer-size">

            <template v-if="clasterList?.length > 0">

                <template v-for="(item,index) in clasterList">
                    <selectCluster  
                    :arrayData="item.claster" 
                    :titleClaster="item.title_value" 
                    :typeSelect="typeSelect(item.claster_title)"
                    @selectedArray="changeSelectedData($event,index)" />
                </template>
                
            </template>
          
        </div>
    </div>
</template>

<script setup >
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

import modelViewer from '@/components/model-view.vue'

import selectCluster from '@/components/sub-staps/select-cluster.vue'


//DATA
const store = useCounterStore()

const activeIndex = ref(null)

const sizeList = ref(null)

const clasterList = ref(null)

const currentModel = ref(null)

//METHODS

function typeSelect(data){

    console.log(data)
    let tupeSelectValue
    if(data == 'other ventilation options'){
        tupeSelectValue = 'many'
    }
    else{
        tupeSelectValue = 'one'
    }

    return tupeSelectValue
}


function changeSelectedData(data, index){
    console.log(changeSelectedData,data, index)

     store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[index] = data
     console.log(store.stapsMemory)
}


//HOOKS
onMounted(()=>{

    clasterList.value = store.dataServer.equipment.stap_2
    clasterList.value.forEach(item =>{
        item.claster.forEach(element =>{
            element.selected = false
        })
    })

    console.log('clasterList', clasterList.value)


    if(store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray.length > 0){
        //если это не первая загрузка шага и там уже есть масив с кластеров пустой или выбраными элементами
        let storeSelectedArrays = store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray


        //прогоняем через цыкл кластеры
        for(let i = 0; i < storeSelectedArrays.length; i++){

            let arraySelectedListStore = storeSelectedArrays[i]

            //каждый кластер прверяем на наличие элементов
            if(arraySelectedListStore.length > 0){
                //если он не пустой то тогда передаем в копоненты выбраные элементы
                for(let x = 0; x < arraySelectedListStore.length; x++){
                let indexCurrent = +arraySelectedListStore[x].currentIndex
                console.log(clasterList.value[i], indexCurrent)
                clasterList.value[i].claster[indexCurrent].selected = true
            }

            }
            else{
                clasterList.value[i]
                store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[i] = []
            }
        }

    }
    else{
        //если это первая загрузка этого шага и еще ничего не выбрано то мы 
        // создаем пустые масивы в сторе для этого шага в зависимости от количества кластеров заполненых в админке
        let arraysServerCluster = store.dataServer.equipment.stap_2
        let emptyArrayStore = []
        for(let i = 0; i < arraysServerCluster.length; i++){
            let newArrayCreate = []
            emptyArrayStore.push(newArrayCreate)
        }
        
        store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray = emptyArrayStore

       
    }
    console.log(store.stapsMemory.stap3_Equipment.stap2)

















    //current model
    
    let trailerStyleTitle = store.stapsMemory.stap1_Foundation.stap2.titleValue
    let trailerPorchLength = store.stapsMemory.stap1_Foundation.stap3.titleValue
    let trailerHitchType = store.stapsMemory.stap1_Foundation.stap4.titleValue

    console.log('trailerStyleTitle', trailerStyleTitle)
    console.log('trailerPorchLength', trailerPorchLength)

    if(trailerHitchType == 'Gooseneck Upgrade'){
        if(trailerStyleTitle == 'Airstream (Curved)'){
            currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_gooseneck_aerostream.url

            console.log('currentModel.value', currentModel.value)
        }
        else{
            currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_gooseneck_.url
        }
    }
    else{
        if(trailerStyleTitle == 'Airstream (Curved)'){
            if(trailerPorchLength != 'No Porch'){
                currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_aerostream_porch.url
            }
            else{
                currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_aerostream.url
            }
            
        }
        else{
            if(trailerPorchLength != 'No Porch'){
                currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model_porch.url
            }
            else{
                currentModel.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].model.url
            }
        
        } 
    }
    
})
</script>