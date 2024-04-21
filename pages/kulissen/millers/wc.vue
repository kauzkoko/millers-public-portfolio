<template>
	<div class="wc-container">
		<div class="wc-main">
			<SpielfeldSlotScaler :scale="0.8">
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
					<WanderwegStange
						class="backstage-wanderweg"
						direction="right"
						style="
							left: 50%;
							top: 75%;
							z-index: 10;
							transform: scale(1.2) rotate(-20deg);
						"
						@wegweiser-click="goInside()"
					>
						<template v-slot:text>Aufs Klo</template>
					</WanderwegStange>
					<div class="wc-wcbg"></div>
					<div class="wc-lamp1" @click="goBack()"></div>
					<div class="wc-lamp2" @click="goBack()"></div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "7", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.background1.sound.value._loop = true
			this.$sounds.background1.play();
		}, 500);
	},
	methods: {
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
		goInside: function () {
			this.$router.push({ path: "/kulissen/millers/wcinside" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes wc-path {
	0% {
		transform: scale(0) rotate(360deg);
	}
	100% {
		transform: scale(1) rotate(0deg);
	}
}

//classes container + grid

.wc-container {
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

.wc-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
	animation-name: wc-path;
	animation-duration: 3s;
	cursor: url("/images/icons/walkin.png"), auto;
}

.wc-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.wc-wcbg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/objects/wc.jpg");
	background-size: 100% auto;
	background-repeat: round;

	z-index: 1;
	pointer-events: none;
}

.wc-lamp1 {
	position: absolute;
	width: 10%;
	height: 30%;
	left: 2%;
	top: 0;
	background-image: url("~static/images/objects/lamp2.png");
	background-size: 100% auto;
	background-repeat: round;

	transition: all 1s ease-out;

	z-index: 4;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
		transition: all 1s ease-out;
	}
}

.wc-lamp2 {
	position: absolute;
	width: 10%;
	height: 30%;
	right: 2%;
	top: 0;
	background-image: url("~static/images/objects/lamp2.png");
	background-size: 100% auto;
	background-repeat: round;

	transition: all 1s ease-out;

	z-index: 4;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
		transition: all 1s ease-out;
	}
}
</style>
