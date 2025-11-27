<template>
   <div class="get-quote__container">
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
                        <p class="selections__table-name">Size:</p>
                        <p class="selections__table-value">7x20 (Square)</p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">Hitch:</p>
                        <p class="selections__table-value">Standard Bumper Pull</p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">Height:</p>
                        <p class="selections__table-value">7 feet (Standard)</p>
                    </div>

                    <div class="selections__table-row">
                        <p class="selections__table-name">Frame:</p>
                        <p class="selections__table-value">Steel Frame</p>
                    </div>

                </div>
            </div>

            <div class="selections__table-wrapper">
                <p class="selections__table-title">Trailer info:</p>
                <div class="selections__table selections__table2">
                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>
                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                    <div class="selections__table-row">

                        <p class="selections__table-value">- Range with Convection Oven</p>
                    </div>

                </div>
            </div>

        </div>
        <div class="get-quote__order-form order-form">
            <p class="order-form__title">Get  Your Custom Quote</p>

            <div class="order-form__wrapper">
                <div class="order-form__input">
                    <p class="order-form__input-title">First Name *</p>
                    <div class="order-form__input-wrapper">
                        <input type="text" placeholder="John">
                    </div>
                </div>

                <div class="order-form__input">
                    <p class="order-form__input-title">Last Name *</p>
                    <div class="order-form__input-wrapper">
                        <input type="text" placeholder="Smith">
                    </div>
                </div>

                <div class="order-form__input">
                    <p class="order-form__input-title">Email Address *</p>
                    <div class="order-form__input-wrapper">
                        <input type="text" placeholder="email@gmail.com">
                    </div>
                </div>

                <div class="order-form__input">
                    <p class="order-form__input-title">Phone Number *</p>
                    <div class="order-form__input-wrapper">
                        <input type="text" placeholder="+493750282957884">
                    </div>
                </div>

                <div class="order-form__input order-form__input--long">
                    <p class="order-form__input-title">Business Name (Optional)</p>
                    <div class="order-form__input-wrapper">
                        <input type="text" placeholder="Business Name">
                    </div>
                </div>

                <div class="order-form__input order-form__input--long">
                    <p class="order-form__input-title">Additional Requirements or Questions</p>
                    <div class="order-form__input-wrapper">
                        <textarea placeholder="Tell us about your specific needs, timeline, or any special requirements..."></textarea>
                    </div>
                </div>
            </div>

            <div class="order-form__down-controll">
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

                <div class="order-form__send-offer">
                    Get My Custom Quote
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9362 5.17015L18.9062 19.3552C18.6802 20.3542 18.1002 20.5792 17.2622 20.1282L12.7172 16.7761L10.4922 18.9032C10.2672 19.1292 10.0412 19.3552 9.52516 19.3552L9.88016 14.6802L18.3582 6.97615C18.7122 6.62115 18.2612 6.49215 17.8102 6.78315L7.26916 13.4232L2.72316 12.0372C1.72416 11.7152 1.72416 11.0372 2.94916 10.5872L20.6142 3.72015C21.4842 3.46215 22.2262 3.91415 21.9362 5.17015Z" fill="white"/>
                    </svg>

                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

//   const nextStap = ()=>{
//     let counter = null
//     if(store.addOnsCounter >= 4){
//         store.changeStapCounter(5)
//         console.log(store.addOnsCounter)
//     }
//     else{
//         counter = store.addOnsCounter + 1
//         store.changeAddOnsCounter(counter)
//     }

    
//   }

  const prevStap = ()=>{
    store.changeStapCounter(4)
    // let counter = null
    // if(store.addOnsCounter <= 1){
    //     store.changeStapCounter(4)
    //     store.changeAddOnsCounter(1)
 
        
    // }
    // else{
    //     counter = store.addOnsCounter - 1
    //     store.changeAddOnsCounter(counter)
    // }

    
  }

</script>