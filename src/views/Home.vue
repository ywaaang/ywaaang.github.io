<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<div class="text-xl text-left text-gray-500 tracking-wide font-bold mb-24">
		{{t('home.intro')}}
	</div>
	<div class="text-gray-800 tracking-normal text-left mb-20">
		<p>{{t('home.proficient')}}
            <img
                class="h-8 w-8 inline-block ml-2"
                src="/vue.svg"
                title="Vue2, Vue3"
            />Vue,
            <img class="h-8 w-8 inline-block" src="/react.svg" title="React" />React,
            <img
                class="h-8 w-8 inline-block"
                src="/nodejs.svg"
                title="Node.js"
            />Node.js,
            <img
                class="h-6 w-10 inline-block"
                src="/python.png"
                title="Python"
            />Python,
            <img
                class="h-8 w-8 inline-block"
                src="/electron.png"
                title="Electron"
            />Electron,
            <img
                class="h-6 w-10 inline-block"
                src="/react-native.png"
                title="React Native"
            />React Native,
        </p>
        <p class="mt-4">{{t('home.currentL')}}
		<img class="h-8 w-8 inline-block mr-4 ml-2" src="/dapp.svg" title="Dapp" />
        </p>
        <p class="mt-4">{{t('home.willing')}} <span class="font-semibold text-blue-500">{{t('home.work1')}}</span>
        </p>
	</div>
	<div class="text-gray-800 tracking-normal text-left mt-60 mb-20">
		<span class="font-semibold"
			>{{t('home.quote')}}</span
		>
	</div>
	<div class="text-gray-800 tracking-normal text-left block sm:flex">
		<div class="mr-0 sm:mr-12">
			<img class="h-6 w-6 inline-block mr-4" src="/email.svg" /><span
				>yanbin.wyb@gmail.com</span
			>
		</div>
		<div class="mr-0">
			<img class="h-6 w-6 inline-block mr-4" src="/github.svg" /><a
				href="https://github.com/ywaaang"
				target="_blank"
				>Github Account</a
			>
		</div>
	</div>
</template>
