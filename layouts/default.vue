<template>
	<nav class="container px-[2rem] py-[4rem] flex justify-between items-center bg-gray-100 myShadow">
		<h1 class="font-w800 text-[1.5rem]">Where in the world?</h1>
		<div class="flex items-center gap-x-[1rem]">
			<Icon name="line-md:moon-loop" class="text-black text-[2rem]" />
			<!-- line-md:sunny-loop -->
			<p class="capitalize font-w600 dark:text-yellow-500">dark mode</p>
		</div>
	</nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.myShadow {
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>
