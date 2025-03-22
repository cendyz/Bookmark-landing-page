<template>
	<main class="p-[2rem] container">
		<section>
			<div :class="boxesStyles" class="px-[3rem] flex">
				<label for="country" class="flex items-center cursor-pointer"
					><Icon name="ci:search-magnifying-glass" class="text-black text-[2rem]"
				/></label>
				<input
					type="text"
					id="country"
					class="ml-[3rem] outline-none w-full placeholder:text-gray-300"
					placeholder="Search for a country..." />
			</div>
			<div :class="boxesStyles" class="px-[2.5rem] mt-[6rem] inline-flex relative font-w600 w-[23rem]">
				<button class="flex w-full justify-between items-center" type="button" @click="isOpen = !isOpen">
					{{ actualRegion }}
					<Icon
						name="material-symbols:arrow-downward-alt"
						class="text-black text-[2rem] transition-transform"
						:class="isOpen && 'rotate-180'" />
				</button>
				<Transition name="filterMenu">
					<div
						v-if="isOpen"
						class="absolute px-[2.5rem] left-0 top-[5.8rem] w-full grid gap-y-[.7rem]"
						:class="boxesStyles">
						<button
							type="button"
							class="text-left rounded-lg hover:bg-gray-200 py-[.4rem] w-full"
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
				v-for="(item, index) in loopedRegions.slice(0, 3)"
				:key="index"
				class="w-[90%] mx-auto mt-[4rem] bg-gray-100 myShadow rounded-xl overflow-hidden">
				<img :src="item.flags.png" :alt="`${item.name} flag`" class="block w-full" />
				<div class="p-[3rem] pb-[5rem] text-[1.6rem]">
					<h2 class="font-w800 text-[2.3rem] mb-[1.8rem]">{{ item.name }}</h2>
					<div>
						<p><span :class="spanStyles">Population:</span> {{ item.population }}</p>
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

const store = useCountryStore()

const data = ref(store.data)
const setRegions = new Set<string>()
const isOpen = ref<boolean>(false)
const actualRegion = ref<string>('Filter by Region')
// console.log(data)
const startRegions = ref(data.value)
const loopedRegions = computed(() => startRegions.value)

for (let i = 0; i < data.value.length; i++) {
	setRegions.add(data.value[i].region)
}

const arrRegions: string[] = Array.from(setRegions)

const changeRegion = (item: string): void => {
	actualRegion.value = item
	startRegions.value = data.value.filter(el => el.region === actualRegion.value)
	console.log(data.value);
	isOpen.value = false
}

const spanStyles = 'font-w600'
const boxesStyles = 'bg-gray-100  py-[1.5rem] rounded-xl myShadow  items-center'
</script>

<style lang="scss">
@use '../assets/sass/reset.scss';

body {
	background-color: hsl(0, 0%, 98%); // 200
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
