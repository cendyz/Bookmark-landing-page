<template>
	<section class="px-[2rem] py-[4rem] dark:bg-gray-500">
		<div class="container">
			<RouterLink
				to="/"
				class="bg-gray-50 dark:bg-gray-400 dark:text-gray-100 py-[.4rem] px-[2rem] inline-flex items-center gap-x-[1rem] myShadow rounded-md md:px-[3rem] md:py-[.6rem]"
				><Icon
					name="material-symbols:line-start-arrow-notch-rounded"
					class="text-black text-[2rem] dark:text-gray-50" />
				Back</RouterLink
			>
			<div class="mt-[6rem] text-gray-400 dark:text-gray-50 lg:flex lg:justify-between lg:items-start">
				<img
					:src="actualCountry[0].flags.png"
					:alt="`${actualCountry[0].name} flag`"
					class="w-full h-[23rem] myShadow2 max-w-[35rem] md:max-w-[40rem] xl:max-w-[50rem] md:h-auto" />

				<div class="lg:flex lg:flex-col lg:w-[50%] xl:w-[60rem]">
					<h1 class="font-w800 mt-[5rem] text-[2.5rem] lg:mt-0 lg:text-[3.5rem] lg:leading-[1]">
						{{ actualCountry[0].name }}
					</h1>
					<div class="lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:items-start lg:h-[23rem] lg:gap-x-[10rem] lg:mt-[3rem]">
						<div class="mt-[2.5rem] grid gap-y-[1.3rem] dark:text-gray-100 lg:mt-0">
							<p><span>Native name:</span> {{ actualCountry[0].nativeName }}</p>
							<p><span>Population:</span> {{ formatNumber(actualCountry[0].population) }}</p>
							<p><span>Region:</span> {{ actualCountry[0].region }}</p>
							<p><span>Sub Region:</span> {{ actualCountry[0].subregion }}</p>
							<p><span>Capital: </span> {{ actualCountry[0].capital }}</p>
						</div>
						<div class="my-[4rem] grid gap-y-[1.3rem] lg:m-0">
							<p><span>Top Level Domain: </span> {{ actualCountry[0].topLevelDomain[0] }}</p>
							<p><span>Currencies:</span> {{ actualCountry[0].currencies?.[0].name || 'None' }}</p>
							<p><span>Languages:</span> {{ actualCountry[0].languages[0].name }}</p>
						</div>
					</div>
					<div class="lg:flex lg:items-start lg:gap-x-[1rem]">
						<h2 class="capitalize font-w600 xl:w-[13rem]">border countries:</h2>
						<div
							class="flex flex-wrap items-center justify-start lg:items-start gap-[1rem] mt-[1.5rem] lg:mt-0 lg:flex-wrap">
							<RouterLink
								v-if="actualBorders.length"
								:to="`/${item.name}`"
								v-for="(item, index) in actualBorders"
								:key="index"
								class="py-[.3rem] text-center px-[1rem] xl:w-[10rem] bg-gray-50 dark:bg-gray-400 myShadow rounded-md text-[1.3rem] w-fit"
								>{{ item.name }}</RouterLink
							>
							<p v-else class="text-left">None</p>
						</div>
					</div>
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
}
</style>
