<script setup lang="ts">
defineProps<{ title: string, content: string }>()
</script>

<template>
	<a
		class="
			block
			p-6
			max-w-xs
			bg-white
			rounded-lg
			mr-4
			border border-gray-200
			shadow-md
			hover:bg-gray-100
			dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
		"
	>
		<h5
			class="
				mb-2
				text-lg
				font-bold
				tracking-tight
				text-gray-900
				dark:text-white
			"
		>
			{{title}}
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400" v-html="content"></p>
	</a>
</template>
