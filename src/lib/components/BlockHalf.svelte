<script lang="ts">
	import { reveal } from '$lib/actions'
	export let image1: string
	export let image2: string
	export let title = ''
	export let invert = false
</script>

<div class="py-24">
	<div use:reveal class="reveal-group container grid items-center gap-y-24 md:grid-cols-2">
		<div class:md:order-2={invert} class:reveal-fade-left={invert} class:reveal-fade-right={!invert}>
			<h3 class="mb-8 font-display text-3xl text-[#07AAA2]">{title}</h3>
			<div class="prose prose-capitalize">
				<slot />
			</div>
		</div>
		<div
			class:md:pl-8={!invert}
			class:md:pr-8={invert}
			class:xl:pl-24={!invert}
			class:xl:pr-24={invert}
			class:reveal-fade-left={!invert}
			class:reveal-fade-right={invert}
		>
			<div class="relative z-10" class:pl-24={!invert} class:pr-24={invert}>
				<img class="aspect-[3/2] w-full object-cover" src={image1} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="relative -mt-8" class:pl-24={invert} class:pr-24={!invert}>
				<img class="aspect-square w-full object-cover" src={image2} loading="lazy" decoding="async" alt="" />
			</div>
		</div>
	</div>
</div>
