<script setup lang="ts">
import WorkCard from "../components/WorkCard.vue";
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const content1En = `Using <span class="font-semibold text-blue-500">Vuejs</span>,<span class="font-semibold text-blue-500">Element UI</span> toanalyse logistic performance and provides data analysis with<span class="font-semibold text-blue-500">Echart.js</span>. Backend is with <span class="font-semibold text-blue-500">Python Flask</span>.`;
const content2En = `A
				<span class="font-semibold text-blue-500"
					>Chrome extension</span
				>
				+ <span class="font-semibold text-blue-500">React</span> Web to
				extract product information, analyse ingredeints, and display
				product healthiness.`;
const content3En = `Develop several H5 simple games to engage users, such as lottery
				draw, red pocket rain, running game with
				<span class="font-semibold text-blue-500">CSS Animation</span>,
				<span class="font-semibold text-blue-500">Frame Anime</span>,
				and <span class="font-semibold text-blue-500">lottie-web and GSAP</span>`;
const content4En = `A <span class="font-semibold 
                text-blue-500">NFT marketplace</span> with minting, previewing, sharing, and using platform, based on <span class="font-semibold text-blue-500">
				React/Nextjs/Nodejs</span> and <span class="font-semibold text-blue-500">AWS</span>. `;
const content5En = `A <span class="font-semibold 
                text-blue-500">Notes/Diary</span> Desktop App with <span class="font-semibold text-blue-500">
				Electron</span>. `;
const content6En = `A <span class="font-semibold 
                text-blue-500">React Native</span> mobile app that can use selected voice for the Audiobook. `;
const content7En = `<span class="font-semibold 
                text-blue-500">Instant Messenger</span> Web APP with websocket and voice SDK for instant text and audio messaging. `;
const content8En = `<span class="font-semibold 
                text-blue-500">Vue.js based</span> Fintech web and app helps customers to manage their loans and payment. `;
const content1Cn = `使用<span class="font-semibold text-blue-500">Vuejs</span>和<span class="font-semibold text-blue-500">Element UI</span>搭建的内容管理平台，用来分析和追踪产品，物流详情，企业健康度等。 前端基于<span class="font-semibold text-blue-500">Echart.js</span>展示可视化图表，后端基于<span class="font-semibold text-blue-500">Python Flask</span>。`;
const content2Cn = `一个<span class="font-semibold text-blue-500">谷歌浏览器插件</span>
				+ <span class="font-semibold text-blue-500">React</span>的PC+H5项目，用来抓取产品信息，分析成分并展示产品的健康度和有害物质的分析结果. `;
const content3Cn = `开发了多个H5营销小游戏, 例如抽奖, 红包雨等游戏, 利用
				<span class="font-semibold text-blue-500">CSS Animation</span>,
				<span class="font-semibold text-blue-500">帧动画</span>和<span class="font-semibold text-blue-500">lottie-web and GSAP</span>`;
const content4Cn = `一个<span class="font-semibold 
                text-blue-500">集NFT铸造、购买、分享、使用的</span>的全栈项目 , 基于<span class="font-semibold text-blue-500">
                React/Nextjs/Nodejs</span>和<span class="font-semibold text-blue-500">AWS</span>. `;
const content5Cn = `<span class="font-semibold 
                text-blue-500">桌面端笔记</span>软件。支持日历展示，笔记同步，富文本编辑等功能。 `;
const content6Cn = `基于<span class="font-semibold 
                text-blue-500">React Native</span>的跨端有声书APP。可以用不同声音讲故事。 `;
const content7Cn = `一款<span class="font-semibold 
                text-blue-500">在线即时通讯</span>软件。基于websocket和voiceSDK，支持文字和语音对话。`;
const content8Cn = `基于<span class="font-semibold 
                text-blue-500">Vue.js</span>的金融科技平台，同时支持PC和H5，包含借贷、支付等功能。 `;
</script>

<template>
	<div class="text-xl text-left text-gray-500 tracking-wide font-bold mb-8">
		{{t('work.title')}}
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			block
			sm:flex
			justify-between
		"
	>
		<WorkCard class="mb-8" :title="t('work.project1')" :content="locale === 'cn' ? content1Cn : content1En" />
		<WorkCard class="mb-8" :title="t('work.project2')" :content="locale === 'cn' ? content2Cn : content2En" />
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			mb-8
			block
			sm:flex
			justify-between
		"
	>
		<WorkCard class="mb-8" :title="t('work.project3')" :content="locale === 'cn' ? content3Cn : content3En" />
		<WorkCard class="mb-8" :title="t('work.project4')" :content="locale === 'cn' ? content4Cn : content4En" />
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			mb-8
			block
			sm:flex
			justify-between
		"
	>
		<WorkCard class="mb-8" :title="t('work.project5')" :content="locale === 'cn' ? content5Cn : content5En" />
		<WorkCard class="mb-8" :title="t('work.project6')" :content="locale === 'cn' ? content6Cn : content6En" />
	</div>
	<div
		class="
			text-gray-800
			tracking-normal
			text-left
			mb-8
			block
			sm:flex
			justify-between
		"
	>
		<WorkCard class="mb-8" :title="t('work.project7')" :content="locale === 'cn' ? content7Cn : content7En" />
		<WorkCard class="mb-8" :title="t('work.project8')" :content="locale === 'cn' ? content8Cn : content8En" />
	</div>
</template>
