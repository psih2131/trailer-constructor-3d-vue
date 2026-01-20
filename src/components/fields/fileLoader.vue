<template>
    <div class="docs-loader">
        <div class="docs-loader__zone"
        :class="{'dropZoneActiv': dropzoneStatus}" 
        @dragenter="onDropEnter"
        @dragover="onDrop" 
        @dragleave="onDropOver" 
        @drop="onDropActiv"
        @click="openFileLoader">
            <div class="docs-loader__box">
                <div class="load-images-zone__icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66669 13.3333L10 10M10 10L13.3334 13.3333M10 10V17.5M16.6667 13.9524C17.6846 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3976 5.73833 13.3051 5.58145C12.2184 3.73736 10.212 2.5 7.91669 2.5C4.46491 2.5 1.66669 5.29822 1.66669 8.75C1.66669 10.4718 2.36289 12.0309 3.48914 13.1613" stroke="#344054" stroke-width="1.66667" stroke-linecap="square"/>
                    </svg>
                </div>

                <p class="load-images-zone__title"><span >Click to upload</span> </p>
                <p class="load-images-zone__subtitle">PDF, PNG, JPG, GIF, DOC, DOCX, XLS, XLSX</p>
            </div>

            <input type="file" class="docs-loader__input" accept=".jpg, .png, .gif, .pdf, .xls, .doc, .xlsx, .docx" ref="fileInput" multiple @change="loadFiles($event)" >

        </div>

        <div class="docs-loader__table-files docs-table " v-if="filesLoad && filesLoad.length && filesLoad.length > 0">

            <div class="docs-table__element" v-for="(item, index) in filesLoad" :key="index">
                <div class="docs-table__preloader-row" >
                    <div class="docs-table__progress-bar"></div>
                </div>
                <div class="docs-table__element-wrapper">

                    <div class="artwork-claster-table__doc-element">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6693 1.89252V5.33464C11.6693 5.80135 11.6693 6.0347 11.7601 6.21296C11.84 6.36976 11.9675 6.49725 12.1243 6.57714C12.3025 6.66797 12.5359 6.66797 13.0026 6.66797H16.4447M16.6693 8.32482V14.3346C16.6693 15.7348 16.6693 16.4348 16.3968 16.9696C16.1571 17.44 15.7747 17.8225 15.3042 18.0622C14.7695 18.3346 14.0694 18.3346 12.6693 18.3346H7.33594C5.93581 18.3346 5.23574 18.3346 4.70096 18.0622C4.23056 17.8225 3.8481 17.44 3.60842 16.9696C3.33594 16.4348 3.33594 15.7348 3.33594 14.3346V5.66797C3.33594 4.26784 3.33594 3.56777 3.60842 3.03299C3.8481 2.56259 4.23056 2.18014 4.70096 1.94045C5.23574 1.66797 5.93581 1.66797 7.33594 1.66797H10.0124C10.6239 1.66797 10.9296 1.66797 11.2173 1.73704C11.4724 1.79829 11.7163 1.8993 11.94 2.03637C12.1923 2.19097 12.4085 2.40716 12.8408 2.83954L15.4977 5.4964C15.9301 5.92877 16.1463 6.14496 16.3009 6.39726C16.4379 6.62094 16.539 6.8648 16.6002 7.11989C16.6693 7.40761 16.6693 7.71335 16.6693 8.32482Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="square"/>
                        </svg>
                                
                        <div class="artwork-claster-table__doc-text">
                            <p class="artwork-claster-table__doc-title" v-if="item.file_name">{{item.file_name}}</p>
                            <p class="artwork-claster-table__doc-title" v-else>{{currentFileName(item.file_url)}}</p>
                            <!-- <p class="artwork-claster-table__doc-value">{{convertToMegabytes(item.size)}} MB</p> -->
                        </div>
                    </div>

                    <div class="doc-element-contros__preloader" v-if="loadIndex && loadIndex == index && uploading == true">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 16C30 17.8385 29.6379 19.659 28.9343 21.3576C28.2308 23.0561 27.1995 24.5995 25.8995 25.8995C24.5995 27.1995 23.0561 28.2307 21.3576 28.9343C19.659 29.6379 17.8385 30 16 30C14.1615 30 12.341 29.6379 10.6424 28.9343C8.94387 28.2307 7.40052 27.1995 6.1005 25.8995C4.80048 24.5995 3.76925 23.0561 3.06569 21.3576C2.36212 19.659 2 17.8385 2 16C2 14.1615 2.36212 12.341 3.06569 10.6424C3.76926 8.94387 4.80049 7.40052 6.10051 6.1005C7.40053 4.80048 8.94388 3.76925 10.6424 3.06568C12.341 2.36212 14.1615 2 16 2C17.8385 2 19.659 2.36212 21.3576 3.06569C23.0561 3.76926 24.5995 4.80049 25.8995 6.10051C27.1995 7.40053 28.2308 8.94388 28.9343 10.6424C29.6379 12.341 30 14.1615 30 16L30 16Z" stroke="#F2F4F7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2C18.5819 2 21.1135 2.71399 23.315 4.06304C25.5164 5.41208 27.3019 7.34363 28.4741 9.64413C29.6463 11.9446 30.1594 14.5245 29.9568 17.0984C29.7543 19.6724 28.8439 22.1402 27.3262 24.229C25.8086 26.3178 23.7429 27.9463 21.3576 28.9343C18.9722 29.9224 16.36 30.2315 13.8099 29.8276C11.2598 29.4237 8.87103 28.3225 6.90773 26.6457C4.94443 24.9689 3.48306 22.7818 2.68521 20.3262" stroke="#66CAF8" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>                                
                    </div>
                    <div v-else class="doc-element-remove" @click="removeFile(index)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="square"/>
                        </svg>  
                    </div>

                </div>
            </div>

        </div>
    
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// PROPS
const props = defineProps({
  fileList: {
    type: Array,
    default: () => []
  }
});

// EMITS
const emit = defineEmits(["sendDataParent"]);

// STATE
const filesLoad = ref([]);
const allFiles = ref([]);
const fileInput = ref(null);

const dropzoneStatus = ref(false);
const uploading = ref(false);
const loadIndex = ref(null);

// CONSTANTS
const ALLOWED_EXTENSIONS = [
  "pdf", "jpeg", "jpg", "png", "gif",
  "xls", "xlsx", "doc", "docx"
];
const MAX_SIZE_MB = 100;

// =======================
// HELPERS
// =======================

function getFileExtension(name) {
  return name.split(".").pop().toLowerCase();
}

function currentFileName(url) {
  return url.substring(url.lastIndexOf("/") + 1);
}

function convertToMegabytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

function error(message) {
  alert(message);
}

// =======================
// FILE INPUT
// =======================

function openFileLoader() {
  fileInput.value.click();
}

function loadFiles(e) {
  allFiles.value = Array.from(e.target.files);
  handleFiles();
  e.target.value = null;
}

// =======================
// DROPZONE
// =======================

function onDragEnter(e) {
  e.preventDefault();
  dropzoneStatus.value = true;
}

function onDragLeave(e) {
  e.preventDefault();
  dropzoneStatus.value = false;
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  e.preventDefault();
  dropzoneStatus.value = false;

  allFiles.value = Array.from(e.dataTransfer.files);
  handleFiles();
}

// =======================
// CORE LOGIC
// =======================

function handleFiles() {
  if (!allFiles.value.length) return;

  allFiles.value.forEach(file => {
    validateAndAddFile(file);
  });

  emit("sendDataParent", filesLoad.value);
}

function validateAndAddFile(file) {
  const ext = getFileExtension(file.name);
  const sizeMB = convertToMegabytes(file.size);

  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    error(`Invalid file format: ${file.name}`);
    return;
  }

  if (+sizeMB > MAX_SIZE_MB) {
    error(`File too large: ${file.name}`);
    return;
  }

  // защита от дублей
  if (filesLoad.value.some(f => f.file_name === file.name)) {
    return;
  }

  filesLoad.value.push({
  file,              // ВАЖНО
  file_extension: ext,
  file_name: file.name,
  file_size: file.size,
  status: "ready"
});
}

// =======================
// REMOVE
// =======================

function removeFile(index) {
  filesLoad.value.splice(index, 1);
  emit("sendDataParent", filesLoad.value);
}

// =======================
// MOUNT
// =======================

onMounted(() => {
  if (props.fileList.length) {
    filesLoad.value = [...props.fileList];
  }
});
</script>
