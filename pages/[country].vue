<template>
	<section class="container px-[2rem] py-[4rem]">
		<RouterLink to="/" class="bg-gray-50 py-[.4rem] px-[1rem] flex items-center gap-x-[1rem] myShadow"
			><Icon name="material-symbols:line-start-arrow-notch-rounded" class="text-black text-[2rem] dark:text-gray-50" /> Back</RouterLink
		>
		<div>
			<img src="" alt="" />
			<h1></h1>
			<div>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div>
			<div>
				<p></p>
				<p></p>
				<p></p>
			</div>
			<div>
				<h2></h2>
				<div>
					<RouterLink to="/"></RouterLink>
					<RouterLink to="/"></RouterLink>
					<RouterLink to="/"></RouterLink>
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

// const route = useRoute()
const store = useCountryStore()

// return store.data.some(el => el.name === route.params.country)
</script>

<style scoped></style>
