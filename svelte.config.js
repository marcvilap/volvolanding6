import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: function ({ status }) {
				return status !== 404
			},
		},
		paths: {
			base: '/bc/pioneros/smartcities',
		},
	},
}

export default config
