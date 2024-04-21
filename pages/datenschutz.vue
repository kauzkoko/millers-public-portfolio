<template>
	<div class="faq-outer">
		<WanderwegStange
			style="right: 20%; top: 80%; z-index: 3; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/')"
		>
			<template v-slot:text>Start</template>
		</WanderwegStange>
		<div class="faq-container">
			<h1>Datenschutz</h1>
			<p>
				Wir erheben anonymisierte Benutzerdaten wie z.B. Anzahl Seitenaufrufe und
				Seitenverweildauern mithilfe von
				<a href="https://matomo.org/">Matomo</a> zur Ver(schlimm)besserung von The
				Meaning Of Life und aus zahlenfetischistischen Gründen.
			</p>
			<p>
				Eventuell haben sich urheberrechtlich geschützte Inhalte auf diese Seite
				eingeschlichen. Falls dies der Fall sein sollte, werden wir entsprechende
				Inhalte umgehend entfernen. Wir erheben keinerlei Anspruch auf die
				Verwendung und Weiterverbreitung soeben genannter Inhalte.
			</p>
		</div>
	</div>
</template>
<script>
export default {
	layout: "empty",
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
.faq-outer {
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
.faq-container {
	font-family: Universalis;
	font-size: 4vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: bisque;
	width: 90vw;
	height: 90vh;
	clip-path: polygon(0 5%, 43% 0, 100% 12%, 85% 100%, 13% 100%, 0 62%, 5% 34%);
	h1 {
		margin-bottom: 10px;
	}
	p {
		font-size: 1em;
		margin-bottom: 20px;
		max-width: 70vw;
	}
	a {
		color: black;
	}
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
	.faq-container {
		font-family: Universalis;
		font-size: 4vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: bisque;
		width: 90vw;
		height: 90vh;
		clip-path: polygon(0 5%, 43% 0, 100% 12%, 85% 100%, 13% 100%, 0 62%, 5% 34%);
		h1 {
			margin-bottom: 10px;
		}
		p {
			font-size: 1em;
			margin-bottom: 20px;
			max-width: 70vw;
		}
		a {
			color: black;
		}
	}
}
</style>
