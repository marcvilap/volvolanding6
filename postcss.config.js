/** @type {import('postcss-load-config').Config} */
export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: { preset: ['default', { discardComments: { removeAll: true } }] },
	},
}
