<template>
	<div class="impressum-outer">
		<WanderwegStange
			style="right: 20%; top: 80%; z-index: 3; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/')"
		>
			<template v-slot:text>Menü</template>
		</WanderwegStange>
		<div class="impressum-container">
			<div class="credits-oppossum">
				<h1>Impressum</h1>
				<img src="/images/impressum/oppossum.png" @click="$sounds.sheep.play()" />
			</div>
			<p><NuxtLink to="/datenschutz" no-prefetch>Datenschutz</NuxtLink></p>
			<p>
				Die Trägerschaft des
				<a href="https://www.millers.ch/" target="_blank">Millers</a> ist seit 1990
				die Stiftung Millers Studio. Die Stiftung ist steuerbefreit und steht unter
				der Kontrolle der städtischen Stiftungsaufsicht.
			</p>
			<p>Kontakt: <a href="mailto:hakan@millers.ch">hakan@millers.ch</a></p>
		</div>
	</div>
</template>
<script>
export default {
	layout: "emptyhidden",
	data() {
		return {};
	},
	created() {},
	mounted() {},
	computed: {},
	watch: {},
};
</script>

<style lang="scss">
.impressum-outer {
	background-image: url("/images/start/intro-bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.impressum-container {
	font-family: Universalis;
	font-size: 3em;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	background-color: bisque;
	width: 90vw;
	height: 80vh;
	clip-path: polygon(0 5%, 43% 0, 100% 12%, 85% 100%, 13% 100%, 0 62%, 5% 34%);

	.credits-oppossum {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		h1 {
			margin-bottom: 10px;
		}
		img {
			margin-left: 20px;
			height: 100px;
		}
	}

	h1 {
		margin-bottom: 10px;
		margin-left: 130px;
	}
	p {
		font-size: 1em;
		margin-bottom: 10px;
		max-width: 70vw;
		margin-left: 130px;
	}
	a {
		color: black;
	}
}
</style>
