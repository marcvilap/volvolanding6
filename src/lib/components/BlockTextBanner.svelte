<script lang="ts">
	import { reveal } from '$lib/actions'
	export let image: string
</script>

<div class="relative flex min-h-[32rem] items-center py-24 text-center text-white">
	<img class="absolute left-0 top-0 h-full w-full object-cover" src={image} loading="lazy" decoding="async" alt="" />
	<div use:reveal class="reveal-group container relative">
		<h3 class="reveal-fade-up mx-auto max-w-4xl text-2xl font-bold md:text-4xl"><slot /></h3>
	</div>
</div>
