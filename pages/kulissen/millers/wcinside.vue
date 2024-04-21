<template>
	<div id="wcinside-container" class="wcinside-container">
		<div id="wcinside-main" class="wcinside-main">
			<SpielfeldSlotScaler :scale="1.4">
				<template v-slot:content>
					<WanderwegStange
						class="backstage-wanderweg"
						style="
							left: 2%;
							top: 75%;
							z-index: 10;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<div class="wcinside-wcinsidebg"></div>
					<div class="wcinside-wcinsidefg" @click="flush()"></div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "8", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.background1.sound.value._loop = true
			this.$sounds.background1.play();
		}, 500);
	},
	data() {
		return {
			wcDestinations: [
				'/kulissen/dickicht/$-1$-1$0',
				'/kulissen/dickicht/$-1$-2$0',
				'/kulissen/dickicht/$-1$0$0',
				'/kulissen/dickicht/$-1$1$0',
				'/kulissen/dickicht/$-1$2$0',
				'/kulissen/dickicht/$-2$-1$0',
				'/kulissen/dickicht/$-2$-2$0',
				'/kulissen/dickicht/$-2$0$0',
				'/kulissen/dickicht/$-2$1$0',
				'/kulissen/dickicht/$-2$2$0',
				'/kulissen/dickicht/$0$0$0',
				'/kulissen/dickicht/$0$1$0',
				'/kulissen/dickicht/$0$2$0',
				'/kulissen/dickicht/$0$-1$0',
				'/kulissen/dickicht/$0$-2$0',
				'/kulissen/dickicht/$1$-1$0',
				'/kulissen/dickicht/$1$-2$0',
				'/kulissen/dickicht/$1$0$0',
				'/kulissen/dickicht/$1$1$0',
				'/kulissen/dickicht/$1$2$0',
				'/kulissen/dickicht/$2$-1$0',
				'/kulissen/dickicht/$2$-2$0',
				'/kulissen/dickicht/$2$0$0',
				'/kulissen/dickicht/$2$1$0',
				'/kulissen/dickicht/$2$2$0',
				'/kulissen/dickicht/$3$0$0',
			],
		};
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/wc" });
		},
		flush() {
			this.$anime({
				targets: "#wcinside-main",
				keyframes: [
					{
						scale: 0.9,
						translateX: -200,
						translateY: -200,
						rotate: -10,
						duration: 1000,
					},
					{ scale: 0.6, translateX: 0, translateY: 0, rotate: -20, duration: 1000 },
					{
						scale: 0.4,
						translateX: 200,
						translateY: 200,
						rotate: 20,
						duration: 1000,
					},
					{ scale: 0.2, translateX: 0, translateY: 0, rotate: -30, duration: 1000 },
					{ scale: 0, translateX: 200, translateY: 200, rotate: 40, duration: 1000 },
				],
			});
			document.getElementById("wcinside-container").style.backgroundImage =
				"url(/images/objects/waterspiral.jpg)";
			document.getElementById("wcinside-container").style.backgroundSize =
				"auto 100%";
			this.$sounds.toilet.play();
			setTimeout(
				() => this.$router.push({ path: this.wcDestinations[this.getRandomInt(1, 26)]}),
				6000
			);
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes wcinside-path {
	0% {
		transform: scale(0) translate(-300%, 0);
	}
	100% {
		transform: scale(1) translate(0, 0);
	}
}

//classes container + grid

.wcinside-container {
	position: absolute;
	display: grid;
	grid-template-areas:
		"main"
		"menu";
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 100px;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-image: url("/images/textures/wctaefer.jpg");
	background-size: 200px;
}

.wcinside-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
	animation-name: wcinside-path;
	animation-duration: 3s;
	cursor: url("/images/icons/walkin.png"), auto;
}

.wcinside-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.wcinside-wcinsidebg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/objects/wcinside.jpg");
	background-size: 100% auto;
	background-repeat: round;

	z-index: 1;
	pointer-events: none;
}

.wcinside-wcinsidefg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/objects/wcinsidewc.png");
	background-size: 100% auto;
	background-repeat: round;
	clip-path: polygon(40% 39%, 57% 39%, 57% 85%, 40% 85%);

	z-index: 3;
}

.wcinside-wcinsidefg:hover {
	cursor: pointer;
	transform: scale(2) translate(0, 0);
	transition: all 1s ease-out;
}
</style>
