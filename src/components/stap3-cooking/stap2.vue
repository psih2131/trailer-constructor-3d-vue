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
                    :noEmptyValue="true"
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

const totalFtSize = ref(0)

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
     console.log('store.stapsMemory',store.stapsMemory)
}


const defineSizeElement = () =>{
    let cookingStap1SelectedValues = store.stapsMemory.stap3_Equipment.stap1.selectedElementsArray

    if (!cookingStap1SelectedValues?.length) return

    for(let i = 0; i < cookingStap1SelectedValues.length; i++){

        const currentArray = cookingStap1SelectedValues[i]
        if(currentArray?.length < 1) continue

        for(let x = 0; x < currentArray.length; x++){
            let sizeFt = +(currentArray[x].size_ft ?? 0)
            let sizeIn = +(currentArray[x].size_in ?? 0)

            totalFtSize.value = +totalFtSize.value + inchesToFeet(+sizeIn + feetToInches(+sizeFt))

        }

        
        
    }
    console.log('totalFtSize.value', totalFtSize.value)

}

function feetToInches(feet) {
  const value = Number(feet)
  if (Number.isNaN(value) || value === 0) return 0
  return Number(feet) * 12
}

function inchesToFeet(inches) {
    const value = Number(inches)
    if (Number.isNaN(value) || value === 0) return 0
    return value / 12
}

//HOOKS
onMounted(()=>{

    defineSizeElement()

    clasterList.value = store.dataServer.equipment.stap_2

    let selectedElementFirstLoad 

    for (let i = 0; i < clasterList.value.length; i++) {
    const item = clasterList.value[i]

    // ⚠️ работаем ТОЛЬКО с нужным кластером
    if (item.claster_title !== "Type ventilation system") continue

    let minElementIndex = -1

    for (let j = 0; j < item.claster.length; j++) {
        const element = item.claster[j]

        // сбрасываем selected
        element.selected = false

        // считаем disable
        element.disable = +element.size_ft < +totalFtSize.value

        // ищем минимальный доступный
        if (!element.disable) {
        if (
            minElementIndex === -1 ||
            +element.size_ft < +item.claster[minElementIndex].size_ft
        ) {
            minElementIndex = j
        }
        }
    }

    // выбираем ТОЛЬКО один элемент
    if (minElementIndex !== -1) {
        const selectedElement = item.claster[minElementIndex]
        selectedElement.selected = true

        const object = {
        currentIndex: minElementIndex,
        priceValue: selectedElement.price_value,
        title: selectedElement.title_value,
        quantity: 1
        }
        selectedElementFirstLoad = object

        console.log('object', object)
        
    }
    }



    console.log('clasterList', clasterList.value)


    if(store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray.length > 0){
        //если это не первая загрузка шага и там уже есть масив с кластеров пустой или выбраными элементами
        let storeSelectedArrays = store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray

        //прогоняем через цыкл кластеры
        for(let i = 0; i < storeSelectedArrays.length; i++){

            let arraySelectedListStore = storeSelectedArrays[i]

            // сбрасываем selected для ВСЕХ элементов текущего кластера,
            // чтобы не осталось автозаданного выбора + выбора из стора одновременно
            const currentCluster = clasterList.value[i]?.claster || []
            for (let c = 0; c < currentCluster.length; c++) {
                currentCluster[c].selected = false
            }

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
                const clusterMeta = clasterList.value[i]

                // если для кластера "Type ventilation system" нет выбранных элементов,
                // автоматически выбираем первый доступный, подходящий под проверку
                if (
                    clusterMeta?.claster_title === "Type ventilation system" &&
                    selectedElementFirstLoad
                ) {
                    const indexCurrent = +selectedElementFirstLoad.currentIndex

                    if (clusterMeta.claster?.[indexCurrent]) {
                        clusterMeta.claster[indexCurrent].selected = true
                        store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[i] = [selectedElementFirstLoad]
                    } else {
                        store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[i] = []
                    }
                } else {
                    store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[i] = []
                }
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
        

        changeSelectedData(selectedElementFirstLoad, 0)
    
       
    }
    console.log(store.stapsMemory.stap3_Equipment.stap2)
    





    // if(store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray.length > 0){

    //     const arr = store.stapsMemory.stap3_Equipment.stap2.selectedElementsArray[0]

    //     console.log('arr', arr)

    //     console.log('store.stapsMemory', store.stapsMemory)

    //     let arClasterServerDara = clasterList.value[0].claster



    //     for(let x = 0; x < arClasterServerDara.length; x++){
    //         clasterList.value[0].claster[x].selected = false
    //     }

    //      for(let x = 0; x < arr.length; x++){

    //         let indexCurrent = +arr[x].currentIndex

    //         clasterList.value[0].claster[+indexCurrent].selected = true
    //     }

    // }
    // else{

    // }














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