<template>
	<div class="credits-outer">
		<WanderwegStange
			style="right: 10%; top: 80%; z-index: 3; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/')"
		>
			<template v-slot:text>Menü</template>
		</WanderwegStange>
		<div class="credits-container">
			<div class="credits-heart">
				<h1>Mitwirkende</h1>
				<img
					class="animate__animated animate__heartBeat animate__infinite"
					src="/images/objects/heart.png"
					@click="$sounds.sheep.play()"
				/>
			</div>
			<div class="credits-left">
				<div>
					<p
						v-for="i in 9"
						class="credits-names"
						v-bind:style="{
							left: 10 + '%',
							top: 2 + '%',
						}"
						v-anime="{
							left: getRandomInt(20, 100),
							direction: 'alternate',
							loop: true,
							duration: 2000,
						}"
					>{{ credits[i] }}</p>
				</div>
			</div>
			<div class="credits-right">
				<div>
					<p
						v-for="i in 9"
						class="credits-names"
						v-bind:style="{
							left: 20 + '%',
							top: 2 + '%',
						}"
						v-anime="{
							left: getRandomInt(20, 100),
							direction: 'alternate',
							loop: true,
							duration: 1000,
						}"
					>{{ credits2[i] }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	layout: "emptyhidden",
	data() {
		return {
			credits: [
				"",
				"Mike Müller",
				"Patti Basler",
				"Tamara Cantieni",
				"Anina Albiker",
				"Zukkihund",
				"Rafi Hazera",
				"Milky Diamond",
				"Philippe Kuhn",
				"Züri Haug",
			],
			credits2: [
				"",
				"World Wide Web",
				"Mama",
				"Niklaus Iff",
				"Luca Mc-Rubi Zeller",
				"Andrea Fischer Schulthess",
				"Adrian Schulthess",
				"Seraina Bozzone",
				"Stella Felix",
				"Kiki Bums & Co.",
			],
		};
	},
	created() { },
	mounted() { },
	computed: {},
	watch: {},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		randomPosition: function () {
			// setInterval(() => {
			// 	this.getRandomInt(20, 80)
			// }, 10);
			this.$anime({
				targets: ".credits-names",
				keyframes: [
					{ translate: getRandomInt(20, 80), duration: 4000 },
					{ translate: getRandomInt(20, 80), duration: 0 },
				],
			});
		},
	},
};
</script>

<style lang="scss">
.credits-outer {
	background-image: url("/images/start/intro-bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
}
.credits-container {
	font-family: Universalis;
	font-size: 3em;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding-left: 10%;
	flex-direction: column;
	background-color: bisque;
	width: 90vw;
	height: 80vh;
	clip-path: polygon(
		0 5%,
		43% 0,
		100% 12%,
		85% 100%,
		13% 100%,
		0 62%,
		5% 34%
	);
	overflow: hidden;
	.credits-heart {
		position: absolute;
		top: 15%;
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

	p {
		span {
			color: grey;
		}
		font-size: 0.8em;
		margin-bottom: 10px;
	}
}

.credits-left {
	position: absolute;
	top: 30%;
	left: 15%;
}

.credits-right {
	position: absolute;
	top: 30%;
	left: 40%;
}

.credits-names {
	position: relative;
}
</style>
