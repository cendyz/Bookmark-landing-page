export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
	app: {
		head: {
			title: 'Frontend Mentor',
			htmlAttrs: {
				lang: 'en'
			},
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico?v2' }],
			meta: [{name: 'description', content: 'Explore countries worldwide with our comprehensive search tool! Find detailed information on population, geography, culture, economy, and more in just a few clicks.'}]
		},
	},
})
