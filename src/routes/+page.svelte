<script lang="ts">
	import { reveal } from '$lib/actions'

	import img01 from '$lib/assets/images/img01.png'
	import img02 from '$lib/assets/images/img02.png'
	import img03 from '$lib/assets/images/img03.png'
	import img04 from '$lib/assets/images/img04.png'

	import BlockHero from '$lib/components/BlockHero.svelte'
	import BlockTextBanner from '$lib/components/BlockTextBanner.svelte'
	import BlockHalf from '$lib/components/BlockHalf.svelte'
	import BlockNav from '$lib/components/BlockNav.svelte'
	let youtubeUrl = 'https://www.youtube.com/embed/zHbD8cp64ZI?controls=0'
</script>

<main class="overflow-hidden">
	<BlockHero
		image={img01}
		text1=""
		text2="EX30 una mirada al futuro"
		text3=""
		text4="Más del 40% de las emisiones y el 30% de los gases de efecto invernadero provienen de la industria del transporte. Hoy, Mario Picazo se sube a bordo del pequeño e impresionante Volvo EX30, el nuevo símbolo de la movilidad sostenible de la marca sueca, un vehículo 100% eléctrico con más de 400 km de autonomía, una carga rápida de 27 minutos y una aceleración de 0 a 100 en 3.6 segundos."
	/>

	<div class="py-24">
		<div use:reveal class="reveal-group container">
			<div class="reveal-fade-up prose prose-capitalize mx-auto max-w-xl">
				<p>
					Recorremos Barcelona junto con Mario Picazo al volante del <a
						target="_blank"
						rel="sponsored"
						href="https://ad.doubleclick.net/ddm/clk/576888322;385917882;j">EX30, un SUV compacto,</a
					> y la respuesta de Volvo a la evidente necesidad de tener una movilidad más sostenible y funcional, pero sin olvidar
					el ADN de la marca, la seguridad. Con este nuevo modelo, el más tecnológico jamás creado por la firma, Volvo se
					abre a un nuevo segmento, más urbano, techie y joven.
				</p>
			</div>
		</div>
	</div>

	<BlockTextBanner image={img02}>
		<p>
			La seguridad ha sido un valor insertado en el ADN de Volvo durante toda su historia, y el nuevo EX30 no se queda
			atrás. Es el más seguro (y sostenible) del momento con 5 estrellas EURO NCAP.
		</p>
	</BlockTextBanner>

	<div class="video-container">
		<iframe
			src={youtubeUrl}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		>
		</iframe>
	</div>

	<BlockHalf image1={img03} image2={img04}>
		<p>
			<strong> El EX30 no es simplemente un automóvil; es una obra maestra de elegancia y tecnología.</strong> Su tamaño
			más reducido que otros modelos, sus líneas sofisticadas, su diseño vanguardista y su funcionalidad interior capturan
			el pulso del presente a la par que escriben el futuro de la forma de movernos.
		</p>
		<p>
			Su capacidad para integrarse en <a
				target="_blank"
				rel="sponsored"
				href="https://ad.doubleclick.net/ddm/clk/576797697;385630175;k">ecosistemas inteligentes</a
			> como Google Automotive, lo convierte en un componente vital del desarrollo del transporte eficiente, proporcionando
			navegación en tiempo real, recordatorios de carga, buscador de estaciones… Además, a través de la app del coche, podrás
			hacer tu vida más fácil como el control de la temperatura del habitáculo, lanzar directamente tu ruta en el navegador,
			entre otros.
		</p>
		<p>
			Definitivamente el EX30 se encuentra a la vanguardia de la revolución de la movilidad, donde la tecnología se
			fusiona con nuestras necesidades cotidianas.
		</p>
	</BlockHalf>

	<BlockNav />
</main>

<style>
	.video-container {
		width: 100%;
		height: 0;
		padding-bottom: 56.25%; /* Esto establece una relación de aspecto de 16:9 */
		position: relative;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
