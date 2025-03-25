import useCountryStore from '~/store/countries'
const store = useCountryStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (!store.data.length) return

	const country = store.data.some(el => el.name === to.params.country)
	if (!country) {
		return navigateTo('/404')
	}
})