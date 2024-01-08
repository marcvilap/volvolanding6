/** @type {import('prettier').Config} */
export default {
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	semi: false,
	arrowParens: 'avoid',
	proseWrap: 'never',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
