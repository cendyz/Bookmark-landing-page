/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: [],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'sans-serif'],
			},
			fontWeight: {
				w300: 300,
				w600: 600,
				w800: 800,
			},
			colors: {
				gray: {
					100: 'hsl(0, 0%, 100%)',
					200: 'hsl(0, 0%, 98%)',
					300: 'hsl(0, 0%, 52%)',
					400: 'hsl(209, 23%, 22%)',
					500: 'hsl(207, 26%, 17%)',
					600: 'hsl(200, 15%, 8%)',
				},
			},
		},
	},
	plugins: [],
}
