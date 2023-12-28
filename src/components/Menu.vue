<script setup lang="ts">
import { routes } from '../router/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
    <ul class="mt-8">
        <li v-for="item in routes" :key="item.name" class="mt-2">
            <router-link class="" active-class="text-blue-600 font-bold underline" :to="item.path">
                <span>{{t(`menu.${item.name}`)}}</span>
            </router-link>
        </li>
    </ul>
</template>