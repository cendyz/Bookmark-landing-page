import { defineStore } from 'pinia'

const useCountryStore = defineStore('countries', {
	state: () => ({
		data: [] as any[],
		isLight: true,
	}),
	actions: {
		async loadCountries() {
			const countriesData = await import('assets/data/data.json')
			this.data = countriesData.default
		},
	},
})

export default useCountryStore
