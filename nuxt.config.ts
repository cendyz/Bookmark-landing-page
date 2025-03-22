export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico?v2' }],
		},
	},
})
