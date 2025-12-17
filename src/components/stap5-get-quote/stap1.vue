<template>
   <div class="get-quote__container" v-if="store?.stapsMemory">
    <div class="get-quote__header">
        <div class="get-quote__header-icon">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.83995 11.7261L17.8013 0.400891C18.0599 0.133631 18.3617 0 18.7066 0C19.0515 0 19.3533 0.133631 19.612 0.400891C19.8707 0.668152 20 0.985746 20 1.35367C20 1.7216 19.8707 2.03875 19.612 2.30512L7.74531 14.5991C7.48663 14.8664 7.18484 15 6.83995 15C6.49505 15 6.19326 14.8664 5.93459 14.5991L0.373088 8.85301C0.114414 8.58575 -0.00975003 8.2686 0.00059694 7.90156C0.0109439 7.53452 0.145885 7.21693 0.405422 6.94877C0.664958 6.68062 0.97235 6.54699 1.3276 6.54788C1.68284 6.54877 1.9898 6.6824 2.24848 6.94877L6.83995 11.7261Z" fill="white"/>
            </svg>
        </div>
        <p class="get-quote__header-title">Configuration Complete!</p>
        <p class="get-quote__header-subtitle">Your custom trailer configuration is ready. Submit your details and we'll email you a detailed quote within 24 hours.</p>
    </div>

    <div class="get-quote__body">
        <div class="get-quote__selections selections">
            <p class="selections__title">Your Selections</p>
            <div class="selections__table-wrapper">
                <p class="selections__table-title">Trailer info:</p>
                <div class="selections__table">
                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap1.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap2.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_2[+store.stapsMemory.stap1_Foundation.stap2.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap3.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_3[+store.stapsMemory.stap1_Foundation.stap3.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap4.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_4[+store.stapsMemory.stap1_Foundation.stap4.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap5.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_5[+store.stapsMemory.stap1_Foundation.stap5.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap6.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_6[+store.stapsMemory.stap1_Foundation.stap6.currentIndex].title_value"></span>
                        </p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">
                            {{ store.stapsMemory.stap1_Foundation.stap7.title }}:
                        </p>
                        <p class="selections__table-value">
                            <span v-html="store.dataServer.foundation.stap_7[+store.stapsMemory.stap1_Foundation.stap7.currentIndex].title_value"></span>
                        </p>
                    </div>

                </div>
            </div>

            <div class="selections__table-wrapper eqyip-table" >
                <p class="selections__table-title">Equipment & Add-ons:</p>
                <div class="selections__table selections__table2">
                    
                    <template v-for="(value, index) in store.stapsMemory.stap2_Utilities" :key="index">
                        <div class="selections__table-row" v-for="item in value.selectedElements">
                            <p class="selections__table-value">- {{ item.title}}</p>
                        </div>
                    </template>

                    <template v-for="(value, index) in store.stapsMemory.stap3_Equipment" :key="index">
                        <div class="selections__table-row" v-for="item in value.selectedElements">
                            <p class="selections__table-value">- {{ item.title}}</p>
                        </div>
                    </template>

                    <template v-for="(value, index) in store.stapsMemory.stap4_AddOns" :key="index">
                        <div class="selections__table-row" v-for="item in value.selectedElements">
                            <p class="selections__table-value">- {{ item.title}}</p>
                        </div>
                    </template>

                </div>
            </div>

        </div>
        <div class="get-quote__order-form order-form">
            <p class="order-form__title">Get  Your Custom Quote</p>

            <div class="order-form__wrapper">

                <inputComponent :title="'First name *'" v-model="formFirstName"/>

                <inputComponent :title="'Last Name *'" v-model="formLastName"/>

                <inputComponent :title="'Email Address *'" v-model="formEmail"/>

                <inputComponent :title="'Phone Number *'" v-model="formPhone"/>

                <inputComponent :title="'Business Name (Optional)'" :longStatus="true" v-model="formBusinessName"/>

                <inputComponent :title="'Additional Requirements or Questions'" :longStatus="true" v-model="formText"/>

            </div>

            <div class="order-form__down-controll">
    
                <p class="order-form__down-controll-total-price">
                    <!-- Toral price: <span>{{ Math.floor(totalPriceClient) }}$</span> -->
                </p>
              

                <div class="order-form__down-controll-row">
                    <div class="body-staps-wrapper__btn body-staps-wrapper__btn--prev" @click="prevStap()" >

                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.799988 5.7998H12.8M0.799988 5.7998L5.94284 10.7998M0.799988 5.7998L5.94284 0.799805"
                                stroke="#6C757D" stroke-width="1.6" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>BACK</span>
                    </div>

                    <div class="order-form__send-offer" @click="sendForm">
                        Get My Custom Quote
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9362 5.17015L18.9062 19.3552C18.6802 20.3542 18.1002 20.5792 17.2622 20.1282L12.7172 16.7761L10.4922 18.9032C10.2672 19.1292 10.0412 19.3552 9.52516 19.3552L9.88016 14.6802L18.3582 6.97615C18.7122 6.62115 18.2612 6.49215 17.8102 6.78315L7.26916 13.4232L2.72316 12.0372C1.72416 11.7152 1.72416 11.0372 2.94916 10.5872L20.6142 3.72015C21.4842 3.46215 22.2262 3.91415 21.9362 5.17015Z" fill="white"/>
                        </svg>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
   </div>
</template>

<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'
  
  import inputComponent from '@/components/fields/inputComponent.vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

  const prevStap = ()=>{
    store.changeStapCounter(4)
  }

  const formFirstName = ref(null)

  const formLastName = ref(null)
  
  const formEmail = ref(null)

  const formPhone = ref(null)

  const formBusinessName = ref(null)

  const formText = ref(null)

  const trailerSize = ref(null)

  const materialCost = ref(0)

  const buildCost = ref(0)

  const totalPrice = ref(0)

  const totalPriceClient = ref(0)

  function getCurrentFoundationValue(index){
    return index
  }


  const calcGlobalCost = () =>{

    let optionsPrice = 0

    let bysinessMarginProcent = +store.dataServer.configuration.business_margin / 100

    let sizePriceValue = +store.stapsMemory.stap1_Foundation.stap1.priceValue
    
    let trailerStyleTitle = store.stapsMemory.stap1_Foundation.stap2.titleValue

    if(trailerStyleTitle == 'Airstream (Curved)'){
        console.log(trailerStyleTitle)
        sizePriceValue = +sizePriceValue * 1.2
    }

    let axleSuspensionPrice = +store.stapsMemory.stap1_Foundation.stap7.priceValue

    optionsPrice = optionsPrice + axleSuspensionPrice


    let UtilitiesPrice =  processUtilities()

    let EquipmentPrice = processEquipment()

    let AddOnPrice = processAddOns()

    trailerSize.value = store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].title_value

    materialCost.value = +store.stapsMemory.stap1_Foundation.stap1.materialCost
    buildCost.value = +store.stapsMemory.stap1_Foundation.stap1.buildCost

    optionsPrice = optionsPrice + UtilitiesPrice + EquipmentPrice + AddOnPrice

    totalPrice.value = +sizePriceValue + +optionsPrice
    totalPrice.value = Math.floor(totalPrice.value)

    totalPriceClient.value = totalPrice.value * (1 + bysinessMarginProcent)
    totalPriceClient.value = Math.floor(totalPriceClient.value)



  }


function processUtilities() {
    let optionsPrice = 0
    const equipment = store.stapsMemory.stap2_Utilities;

    Object.entries(equipment).forEach(([key, value]) => {
        console.log('Ключ объекта (аналог index):', key);

        value.selectedElements.forEach(item => {
        console.log('- priceValue ', item.priceValue);
        optionsPrice = +optionsPrice + +item.priceValue
        });
    });
    return optionsPrice
}


function processEquipment() {
    let optionsPrice = 0
    const equipment = store.stapsMemory.stap3_Equipment;

    Object.entries(equipment).forEach(([key, value]) => {
        console.log('Ключ объекта (аналог index):', key);

        value.selectedElements.forEach(item => {
         console.log('- priceValue ', item.priceValue);

            optionsPrice = +optionsPrice + +item.priceValue
        });
    });
    return optionsPrice
}

function processAddOns() {
    let optionsPrice = 0
    const equipment = store.stapsMemory.stap4_AddOns;

    Object.entries(equipment).forEach(([key, value]) => {
        console.log('Ключ объекта (аналог index):', key);

        value.selectedElements.forEach(item => {
         console.log('- priceValue ', item.priceValue);

            optionsPrice = +optionsPrice + +item.priceValue
        });
    });
    return optionsPrice
}



function sendForm() {
    let config1Text = `_
    
    _________________________________________________

    Trailer info:

    ${store.stapsMemory.stap1_Foundation.stap1.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap1.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap2.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap2.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap3.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap3.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap4.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap4.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap5.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap5.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap6.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap6.currentIndex].title_value}
    ${store.stapsMemory.stap1_Foundation.stap7.title}: ${store.dataServer.foundation.stap_1[+store.stapsMemory.stap1_Foundation.stap7.currentIndex].title_value}

    _________________________________________________

   Equipment & Add-ons:

    `
    // let config1 = document.querySelector('.selections .selections__table').innerText 

    let config2 = document.querySelector('.eqyip-table .selections__table').innerText 

    let rowX = `
    _________________________________________________
    `
    console.log(config1Text)
    console.log(config2)
    let formData = new FormData();

    // скрытые поля
    formData.append("_wpcf7", "319");
    // formData.append("_wpcf7_version", "6.1.4");
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f319-o2");
    // formData.append("_wpcf7_container_post", "0");
    // formData.append("_wpcf7_posted_data_hash", "");

    formData.append("trailer_size", trailerSize.value);
    formData.append("material_cost", materialCost.value);
    formData.append("build_cost", buildCost.value);
    formData.append("total_cost_owner", totalPrice.value);
    formData.append("total_cost_client", totalPriceClient.value);
    formData.append("first_name", formFirstName.value);
    formData.append("last_name", formLastName.value);
    formData.append("email_client", formEmail.value);
    formData.append("tel_client", formPhone.value);
    formData.append("business_name", formBusinessName.value);
    formData.append("text_description", formText.value);
    formData.append("config_field",  config1Text + config2 + rowX);

    
    

    fetch("https://stcroixtrailers.theprojectview.com/wp-json/contact-form-7/v1/contact-forms/319/feedback", {
        method: "POST",
   
        body: formData
    })
    .then(res => {
        res.json()
           console.log(res)
    })
    .then(data => {
        console.log(data)
        alert('request was sent')
    })
    .catch(err => {
        alert(err)
        console.error(err)
    });
}



  onMounted(()=>{
    console.log(store.dataServer)
    console.log(store.stapsMemory)

    calcGlobalCost()
  })

</script>