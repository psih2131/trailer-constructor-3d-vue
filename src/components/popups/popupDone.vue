<template>

    <Transition name="slide-fade">
        <div v-if="show" class="popup-done popup">
            <div class="popup__close" @click="closePopup()">
                <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3279 19.3284C19.995 18.6612 21.0767 18.6612 21.7438 19.3284L28.9917 26.5762L36.2395 19.3284C36.9066 18.6613 37.9883 18.6613 38.6554 19.3284C39.3226 19.9955 39.3226 21.0772 38.6554 21.7443L31.4076 28.9922L38.6554 36.24C39.3226 36.9072 39.3226 37.9888 38.6554 38.656C37.9883 39.3231 36.9066 39.3231 36.2395 38.656L28.9917 31.4081L21.7438 38.656C21.0767 39.3231 19.995 39.3231 19.3279 38.656C18.6607 37.9888 18.6607 36.9072 19.3279 36.24L26.5757 28.9922L19.3279 21.7443C18.6607 21.0772 18.6607 19.9955 19.3279 19.3284Z" fill="white"/>
                </svg>

            </div>

            <div class="popup-done__wrapper">
                <div class="header-row-sec-v2">            
                    <h2 class="home-our-client-sec__title sec-title sec-title--center-mod">Form was sent</h2>
                </div>
                <p class="contacts-sec__form-subtitle">Our managers will contact you soon</p>
            </div>

        </div>
    </Transition>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'


//DATA
const show = ref(false)
const store = useCounterStore()




//METHODS 
function closePopup(){
    show.value = false
    setTimeout(()=>{
        store.changePopupCurrent(null)
    },800)

}

//HOOKS
watch(() => store.popupCloseAll,(newVal, oldVal) => {
    closePopup()
    console.log('gg')
  }
)

onMounted(() => {
  // Добавляем обработчик события scroll
    show.value = true
    

   
  
  
});

onBeforeUnmount(() => {

})

</script>