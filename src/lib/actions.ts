import type { Action } from 'svelte/action'

export const reveal = (node => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => node.classList.toggle('reveal-active', entry.isIntersecting))
	})
	observer.observe(node)
	return {
		destroy() {
			observer.disconnect()
		},
	}
}) satisfies Action
