<script lang="ts">
	import { reveal } from '$lib/actions'
	export let image: string
	export let color = '#07AAA2'
</script>

<div use:reveal class="reveal-group">
	<div class="reveal-zoom-in relative mx-auto my-16 max-w-[16rem] md:max-w-[30rem]">
		<img
			style="border-color:{color}"
			class="rounded-full border-[.75rem] bg-white"
			src={image}
			loading="lazy"
			decoding="async"
			alt=""
		/>
		<div class="absolute -inset-8">
			<svg class="animate-rotate-l h-full w-full" viewBox="0 0 100 100">
				<circle fill="none" stroke={color} stroke-width="2" stroke-dasharray="6,3" cx="50" cy="50" r="49" />
			</svg>
		</div>
		<div class="absolute -inset-16">
			<svg class="animate-rotate-r h-full w-full" viewBox="0 0 100 100">
				<circle fill="none" stroke={color} stroke-width="2" stroke-dasharray="10,5" cx="50" cy="50" r="49" />
			</svg>
		</div>
	</div>
</div>
