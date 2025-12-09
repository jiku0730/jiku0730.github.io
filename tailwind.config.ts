import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				accent: {
					400: "#6C63FF",
					500: "#4F46E5"
				}
			},
			fontFamily: {
				sans: ["var(--font-inter)", "var(--font-noto)", "system-ui", "sans-serif"]
			}
		}
	},
	plugins: []
};

export default config;
