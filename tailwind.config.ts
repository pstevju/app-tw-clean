import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-source-code-pro)', ...defaultTheme.fontFamily.mono],
				sans: ['var(--font-source-sans-3)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-source-serif-4)', ...defaultTheme.fontFamily.serif],
			},
			borderWidth: {
				'1/2': '0.5px',
				'1': '1px',
			},
			minWidth: {
				'svw': '100svw',
				'lvw': '100lvw',
				'dvh': '100dvh',
			},
			maxWidth: {
				'svw': '100svw',
				'lvw': '100lvw',
				'dvh': '100dvh',
			},
		},
	},
	plugins: [],
};
export default config;
