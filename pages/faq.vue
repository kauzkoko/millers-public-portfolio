<template>
	<div class="faq-outer">
		<WanderwegStange
			style="right: 20%; top: 80%; z-index: 3; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/')"
		>
			<template v-slot:text>Menü</template>
		</WanderwegStange>
		<div class="faq-container">
			<h1>Häufig gestellte Fragen</h1>
			<p>Mami, wie werded Chinde gmacht?</p>
			<p>Heschmer en Stutz?</p>
			<p>Isch d'Erde rund?</p>
			<p>Git's e Zigi?</p>
			<p>Chum haus, ab, furt!</p>
			<p>Gömmer no is Millers nachem Sünnele?</p>
			<p>Was isch de Sinn vom Lebe?</p>
			<p>Wo ist Walter?</p>
			<p>
				<a href="/tutorial">Wie funktioniert das Spiel?</a>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	layout: "emptyhidden",
	data() {
		return {};
	},
	created() { },
	mounted() { },
	computed: {},
	watch: {},
};
</script>

<style lang="scss">
.faq-outer {
	background-color: #dfdbe5;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");
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
	clip-path: polygon(
		0 5%,
		43% 0,
		100% 12%,
		85% 100%,
		13% 100%,
		0 62%,
		5% 34%
	);
	h1 {
		margin-bottom: 10px;
	}
	p {
		font-size: 1em;
		margin-bottom: 10px;
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
		clip-path: polygon(
			0 5%,
			43% 0,
			100% 12%,
			85% 100%,
			13% 100%,
			0 62%,
			5% 34%
		);
		h1 {
			margin-bottom: 10px;
		}
		p {
			font-size: 1em;
			margin-bottom: 10px;
		}
		a {
			color: black;
		}
	}
}
</style>
