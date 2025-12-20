<template>
    <div class="order-form__input" :class="{'order-form__input--long': longStatus== true}">
        <p class="order-form__input-title" v-if="title" v-html="title"></p>
        <div class="order-form__input-wrapper" :class="{'order-form__input-wrapper--error': validStatus == false}">
            <input type="text" placeholder="John" 
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)">

            <!-- <p class="valid-error-text" v-if="!validStatus">
                Incorrect data
            </p> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

defineProps({
    title: String,
    modelValue: String,
    longStatus: Boolean,
    validStatus: {
        type: [Boolean, null],
        default: null
    },
    inputType: String,

})

const dataInp = ref(null)


const emit = defineEmits(['update:modelValue'])

onMounted(()=>{

}) 

</script>