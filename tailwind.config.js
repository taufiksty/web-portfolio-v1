/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')],
};
