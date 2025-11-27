<template>
    <aside class="builder-sec__body-aside body-staps-wrapper">

        <div class="body-staps-wrapper__staps-col">
            <div class="body-stap" :class="{'active': store.foundationCounter >= 1}">
                <div class="body-stap__row">
                    <div class="body-stap__num">1</div>
                    <p class="body-stap__text">Trailer Size</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>


            <div class="body-stap" :class="{'active': store.foundationCounter >= 2}">
                <div class="body-stap__row">
                    <div class="body-stap__num">2</div>
                    <p class="body-stap__text">Trailer Style</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>

            <div class="body-stap" :class="{'active': store.foundationCounter >= 3}">
                <div class="body-stap__row">
                    <div class="body-stap__num">3</div>
                    <p class="body-stap__text">Porch Length</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>

            <div class="body-stap" :class="{'active': store.foundationCounter >= 4}">
                <div class="body-stap__row">
                    <div class="body-stap__num">4</div>
                    <p class="body-stap__text">Hitch Type</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>

            <div class="body-stap" :class="{'active': store.foundationCounter >= 5}">
                <div class="body-stap__row">
                    <div class="body-stap__num">5</div>
                    <p class="body-stap__text">Interior Height</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>

            <div class="body-stap" :class="{'active': store.foundationCounter >= 6}">
                <div class="body-stap__row">
                    <div class="body-stap__num">6</div>
                    <p class="body-stap__text">Frame Material</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>

            <div class="body-stap" :class="{'active': store.foundationCounter >= 7}">
                <div class="body-stap__row">
                    <div class="body-stap__num">7</div>
                    <p class="body-stap__text">Axle & Suspension</p>
                </div>
                <div class="body-stap__down-line"></div>
            </div>


        </div>
        <div class="body-staps-wrapper__btn-wrapper" >
            <div class="body-staps-wrapper__btn body-staps-wrapper__btn--next" @click="nextStap()">
                <span>NEXT</span>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.8 5.7998H0.800003M12.8 5.7998L7.65715 10.7998M12.8 5.7998L7.65715 0.799805"
                        stroke="white" stroke-width="1.6" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <div class="body-staps-wrapper__btn body-staps-wrapper__btn--prev" v-if="store.foundationCounter > 1" @click="prevStap()">

                <svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.799988 5.7998H12.8M0.799988 5.7998L5.94284 10.7998M0.799988 5.7998L5.94284 0.799805"
                        stroke="#6C757D" stroke-width="1.6" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>BACK</span>
            </div>
        </div>
    </aside>
</template>


<script setup >

  import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()

  const nextStap = ()=>{
    let counter = null
    if(store.foundationCounter >= 7){
        store.changeStapCounter(2)
        console.log(store.foundationCounter)
    }
    else{
        counter = store.foundationCounter + 1
        store.changeFoundationCounter(counter)
    }

    
  }

  const prevStap = ()=>{
    let counter = null
    if(store.foundationCounter <= 1){
        counter = 1
    }
    else{
        counter = store.foundationCounter - 1
    }

    store.changeFoundationCounter(counter)
  }

</script>