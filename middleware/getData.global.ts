import useCountryStore from '~/store/countries'

export default defineNuxtRouteMiddleware(async () => {
	const store = useCountryStore()

	if (store.data.length === 0) {
		const countriesData = await import('~/assets/data/data.json')
		store.data = countriesData.default
	}
})
