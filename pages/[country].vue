<template>
	<section class="container px-[2rem] py-[4rem]">
		<RouterLink to="/" class="bg-gray-50 py-[.4rem] px-[2rem] inline-flex items-center gap-x-[1rem] myShadow rounded-md"
			><Icon name="material-symbols:line-start-arrow-notch-rounded" class="text-black text-[2rem] dark:text-gray-50" />
			Back</RouterLink
		>
		<div class="mt-[6rem] text-gray-400">
			<img :src="actualCountry[0].flags.png" :alt="`${actualCountry[0].name} flag`" class="w-full h-[23rem]" />
			<h1 class="font-w800 mt-[5rem] text-[2.5rem]">{{ actualCountry[0].name }}</h1>
			<div class="mt-[2.5rem] grid gap-y-[1.3rem]">
				<p><span>Native name:</span> {{ actualCountry[0].nativeName }}</p>
				<p><span>Population:</span> {{ formatNumber(actualCountry[0].population) }}</p>
				<p><span>Region:</span> {{ actualCountry[0].region }}</p>
				<p><span>Sub Region:</span> {{ actualCountry[0].subregion }}</p>
				<p><span>Capital: </span> {{ actualCountry[0].capital }}</p>
			</div>
			<div class="my-[4rem] grid gap-y-[1.3rem]">
				<p><span>Top Level Domain: </span> {{ actualCountry[0].topLevelDomain[0] }}</p>
				<p><span>Currencies:</span> {{ actualCountry[0].currencies?.[0].name || 'None' }}</p>
				<p><span>Languages:</span> {{ actualCountry[0].languages[0].name }}</p>
			</div>
			<div>
				<h2 class="capitalize font-w600">border countries:</h2>
				<div class="flex flex-wrap items-center justify-center gap-[1rem] mt-[1.5rem]">
					<RouterLink
						:to="`/${item.name}`"
						v-for="(item, index) in actualBorders"
						:key="index"
						class="py-[.3rem] text-center bg-gray-50 myShadow2 rounded-md text-[1.3rem] w-[30%]"
						>{{ item.name }}</RouterLink
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import useCountryStore from '~/store/countries'
definePageMeta({
	middleware: ['validate-country'],
})

const route = useRoute()
const store = useCountryStore()

const actualCountry = computed(() => store.data.filter(el => el.name === route.params.country))
const check = actualCountry.value[0].borders
const actualBorders = computed(() => store.data.filter(el => check?.includes(el.alpha3Code)))
const formatNumber = (num: number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
</script>

<style scoped>
.myShadow {
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.myShadow2 {
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

p span {
	font-weight: 600;
	color: hsl(207, 26%, 17%);
}
</style>
