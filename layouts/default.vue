<template>
	<nav class="bg-gray-100 myShadow dark:bg-gray-400 relative">
		<div class="px-[2rem] py-[4rem] flex justify-between items-center container">
			<h1 class="font-w800 text-[1.5rem] dark:text-gray-50">Where in the world?</h1>
			<button class="flex items-center gap-x-[1rem]" type="button" @click="changeTheme">
				<Icon v-if="store.isLight" name="line-md:sunny-loop" class="text-black text-[2rem] cursor-pointer" />
				<Icon v-else name="line-md:moon-loop" class="text-gray-50 text-[2rem] cursor-pointer" />
				<p
					class="capitalize font-w600 dark:text-gray-50 select-none"
					v-text="store.isLight ? 'Light mode' : 'Dark mode'"></p>
			</button>
		</div>
	</nav>
</template>

<script setup lang="ts">
import useCountryStore from '~/store/countries'

const store = useCountryStore()

const changeTheme = (): void => {
	store.isLight = !store.isLight
	document.documentElement.classList.toggle('dark')
}
</script>

<style lang="scss">
.myShadow {
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>
