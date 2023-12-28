<script setup lang="ts">
import Menu from '../components/Menu.vue'
import Copyright from '../components/Copyright.vue'
import LanguageSelector from '../components/LanguageSelector.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="container bg-gray-50 h-full w-full sm:w-4/12 flex-none p-8">
        <img src="/headImg.jpeg" class="w-44 h-44 rounded-full mx-auto" alt="Image" />  
        <div class="text-2xl antialiased font-semibold mt-8">{{t('app.name')}}</div>
        <div class="text-sm antialiased font-semibold mt-4"><span class="text-blue-400">{{t('app.title')}}</span> {{t('app.job')}}</div>
        <Menu />
        <Copyright />
        <LanguageSelector />
    </div>
</template>

