/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			boxShadow:{
					bubbleShadow: 'inset 0px 0px 40px rgba(0,0,0,.2), 0 0 90px rgba(0,0,0,.8)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				bubble: {
					'0%, 100%': { borderRadius: '50% 50% 50% 50%' },
					'5%': { borderRadius: '48% 50% 49% 40%' },
					'10%': { borderRadius: '50% 40% 48% 49%' },
					'15%': { borderRadius: '49% 50% 40% 48%' },
					'20%': { borderRadius: '48% 49% 50% 40%' },
					'25%': { borderRadius: '40% 48% 50% 49%' },
					'30%': { borderRadius: '49% 40% 48% 50%' },
					'35%': { borderRadius: '50% 49% 40% 48%' },
					'40%': { borderRadius: '48% 50% 49% 40%' },
					'45%': { borderRadius: '50% 40% 48% 49%' },
					'50%': { borderRadius: '49% 50% 40% 48%' },
					'55%': { borderRadius: '48% 49% 50% 40%' },
					'60%': { borderRadius: '40% 48% 50% 49%' },
					'65%': { borderRadius: '49% 40% 48% 50%' },
					'70%': { borderRadius: '50% 49% 40% 48%' },
					'75%': { borderRadius: '48% 50% 49% 40%' },
					'80%': { borderRadius: '50% 40% 48% 49%' },
					'85%': { borderRadius: '49% 50% 40% 48%' },
					'90%': { borderRadius: '48% 49% 50% 40%' },
					'95%': { borderRadius: '40% 48% 50% 49%' },
				  },
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
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
				bubble: 'bubble 20s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-down': 'slide-down 1.5s ease-in-out 1s forwards',
				'fade-in-out': 'fade-in-out 1.5s ease-out  forwards ',
				'fade-in-out-text': 'fade-in-out-text 4s ease infinite  ',
			},
		},
	},
	plugins: [require('tailwindcss-animate'),function ({ addUtilities }:  { addUtilities: (utilities: Record<string, any>) => void }) {
		const newUtilities = {
		  '.hide-scrollbar': {
			scrollbarWidth: 'none', /* Firefox */
			'&::-webkit-scrollbar': {
			  display: 'none', /* Chrome, Safari, Edge */
			},
		  },
		}
		addUtilities(newUtilities)
	  } ],
}
