<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const lang = ref('');
lang.value = locale.value;

const changeLang = (evt: Event) => {
    localStorage.setItem('lang', lang.value);
    location.reload();
}
</script>
<template>
    <select class="px-4 py-0 font-semibold rounded-lg shadow-md mt-8 w-20 h-10" v-model="lang" @change="changeLang">
        <option value ="en">En</option>
        <option value ="cn">中文</option>
    </select>
</template>