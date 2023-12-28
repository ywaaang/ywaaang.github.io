<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<div class="text-xl text-left text-gray-500 tracking-wide font-bold mb-40">
		{{t('about.title')}}
	</div>
	<div class="text-gray-800 tracking-normal text-left mb-20">
		<span class="font-semibold">{{t('about.hi')}} {{t('app.name') }}.</span> {{t('about.textGraduate') }} <span class="font-semibold">{{t('about.frontD') }}</span>. {{t('about.workedIn') }}
		<span class="font-semibold text-blue-500"
			>{{t('about.vueR')}}</span
		>{{t('about.and')}}<span class="font-semibold text-blue-500"
			>{{t('about.project')}}</span
		>{{t('about.soOn')}}
	</div>
	<div class="text-gray-800 tracking-normal text-left mb-20">{{t('about.bilingual')}}
		
		<span class="font-semibold">{{t('about.agile')}}</span>{{t('about.manage1')}}
		<span class="font-semibold">{{t('about.waterfall')}}</span>{{t('about.manage2')}}
	</div>
</template>
