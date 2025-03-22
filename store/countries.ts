import { defineStore } from 'pinia'
const countriesData = await import ('assets/data/data.json')

const useCountryStore = defineStore('countries', {
	state: () => ({
		data: countriesData.default,
	}),
})


export default useCountryStore