<template>
	<main class="p-[2rem] container bg-gray-200 dark:bg-gray-500">
		<section>
			<div :class="boxesStyles" class="px-[3rem] flex dark:bg-gray-400">
				<label for="country" class="flex items-center cursor-pointer"
					><Icon name="ci:search-magnifying-glass" class="text-black text-[2rem] dark:text-gray-50"
				/></label>
				<input
					type="text"
					id="country"
					class="ml-[3rem] outline-none w-full dark:bg-gray-400 dark:text-gray-50 placeholder:text-gray-300 dark:placeholder:text-gray-50 font-w600"
					placeholder="Search for a country..."
					v-model="inputData.country" />
			</div>
			<div
				:class="boxesStyles"
				class="px-[2.5rem] mt-[6rem] inline-flex relative font-w600 w-[23rem] dark:bg-gray-400 dark:text-gray-50">
				<button class="flex w-full justify-between items-center" type="button" @click="isOpen = !isOpen">
					{{ actualRegion }}
					<Icon
						name="material-symbols:arrow-downward-alt"
						class="text-black text-[2rem] transition-transform dark:text-gray-50"
						:class="isOpen && 'rotate-180'" />
				</button>
				<Transition name="filterMenu">
					<div
						v-if="isOpen"
						class="absolute px-[2.5rem] left-0 top-[5.8rem] w-full grid gap-y-[.7rem] dark:bg-gray-400"
						:class="boxesStyles">
						<button
							type="button"
							class="text-left rounded-lg hover:bg-gray-200 py-[.4rem] w-full dark:hover:bg-gray-500"
							v-for="(item, index) in arrRegions"
							:key="index"
							@click="changeRegion(item)">
							{{ item }}
						</button>
					</div>
				</Transition>
			</div>
		</section>
		<section>
			<div
				v-for="(item, index) in loopedRegions"
				:key="index"
				class="w-[90%] mx-auto mt-[4rem] bg-gray-100 myShadow rounded-xl overflow-hidden dark:bg-gray-400">
				<img :src="item.flags.png" :alt="`${item.name} flag`" class="block w-full" />
				<div class="p-[3rem] pb-[5rem] text-[1.6rem] border-t-2 border-gray-200 dark:border-gray-400 dark:text-gray-50">
					<h2 class="font-w800 text-[2.3rem] mb-[1.8rem]">{{ item.name }}</h2>
					<div>
						<p><span :class="spanStyles">Population:</span> {{ formatNumber(item.population) }}</p>
						<p class="my-[.5rem]"><span :class="spanStyles">Region:</span> {{ item.region }}</p>
						<p><span :class="spanStyles">Capital:</span> {{ item.capital }}</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import useCountryStore from '~/store/countries'

const func = (a: string): string => {
	let newArr = a.split(' ').map(el => el.split(''))
	const reg = /[A-Za-z]/
	for (let i = 0; i < newArr.length; i++) {
		if (reg.test(newArr[i][0]) && newArr[i][0] !== ' ') {
			newArr[i].push(newArr[i][0])
			newArr[i].push('ay')
			newArr[i].shift()
		}
	}

	return newArr.map(el => el.join('')).join(' ')
}

console.log(func('Pig latin is cool !'))

const store = useCountryStore()

const filteredCountries = computed(() => {
	return data.value.filter(el => {
		const matchedRegion = actualRegion.value === 'Filter by Region' || el.region === actualRegion.value
		const InputRegion = inputData.value.country
			? el.name.toLowerCase().startsWith(inputData.value.country.toLowerCase())
			: true

		return matchedRegion && InputRegion
	})
})

const data = ref(store.data)
const setRegions = new Set<string>()
const isOpen = ref<boolean>(false)
const actualRegion = ref<string>('Filter by Region')
const loopedRegions = computed(() => filteredCountries.value)
const inputData = ref({
	country: '',
})
console.log(data.value)

for (let i = 0; i < data.value.length; i++) {
	setRegions.add(data.value[i].region)
}

const arrRegions: string[] = Array.from(setRegions)

const changeRegion = (item: string): void => {
	actualRegion.value = item
	isOpen.value = false
}

const formatNumber = (num: number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const spanStyles = 'font-w600'
const boxesStyles = 'bg-gray-100  py-[1.5rem] rounded-xl myShadow  items-center'
</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

body {
	background-color: hsl(0, 0%, 98%); // 200
}

@media (prefers-color-scheme: dark) {
	body {
		background-color: hsl(207, 26%, 17%); // 200
	}
}

.filterMenu-enter-active,
.filterMenu-leave-active {
	transition: opacity 0.2s ease;
}

.filterMenu-enter-from,
.filterMenu-leave-to {
	opacity: 0;
}
</style>
