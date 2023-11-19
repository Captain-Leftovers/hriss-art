import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				'accordion-down': {
					from: { height: ' 0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in-out': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'fade-in-out-text': {
					'0%': { opacity: '0.4' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.4' },
				},

				'slide-down': {
					'0%': {
						transform: 'translateY(0)',
					},
					'100%': {
						transform: 'translateY(+100%)',
					},
				},
			},
			animation: {
				'slide-down': 'slide-down 1.5s ease-in-out 1s forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-out': 'fade-in-out 1.5s ease-out  forwards ',
				'fade-in-out-text': 'fade-in-out-text 4s ease infinite  ',
			},
		},
	},
	plugins: [],
}
export default config
