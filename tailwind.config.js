/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				backgroundDark: "var(--background-dark)",
				foregroundDark: "var(--foreground-dark)",
				backgroundLight: "var(--background-light)",
				foregroundLight: "var(--foreground-light)",
			},
			fontFamily: {
				sixtyfour: ["var(--font-sixtyfour)"],
				victormono: ["var(--font-victormono)"],
			},
		},
	},
	plugins: [],
};
