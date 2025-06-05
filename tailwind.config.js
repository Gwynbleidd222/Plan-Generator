/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', ' sans-serif'],
			},
			colors: {
				'main-purple': 'hsl(242, 48%, 58%)',
				'main-purple-hover': 'hsl(243, 100%, 82%)',
				'very-dark-gray': 'hsl(235, 16%, 15%)',
				'dark-gray': 'hsl(235, 12%, 19%)',
				'medium-gray': 'hsl(216, 15%, 57%)',
				red: 'hsl(0, 78%, 63%)',
				'red-hover': 'hsl(0, 100%, 80%)',
				'gray-warm': '#d7d2cc',
				'blue-deep': '#304352',
			},
		},
	},
	plugins: [],
}
