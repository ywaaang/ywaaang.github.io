<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
    <div class="mt-48">
        <p>&#169; Copyright {{new Date().getFullYear()}} All rights reserved.</p> 
        <p>Made with <span class="text-red-400">&hearts;</span> by {{t('app.name')}}. </p> 
        <p class="text-xs mt-8">{{t('copyright.stack')}} <span class="text-blue-400">Vue3, Typescripts, Tailwind CSS, and Vite</span>.</p> 
    </div>
</template>
