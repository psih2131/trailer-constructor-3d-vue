<template>
    <div class="order-form__input" :class="{'order-form__input--long': longStatus== true}">
        <p class="order-form__input-title" v-if="title" v-html="title"></p>
        <div class="order-form__input-wrapper">
            <input type="text" placeholder="John" 
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits } from 'vue'

defineProps({
    title: String,
    modelValue: String,
    longStatus: Boolean
})

const dataInp = ref(null)


const emit = defineEmits(['update:modelValue'])

onMounted(()=>{

}) 

</script>