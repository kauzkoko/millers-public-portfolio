<template>
	<!-- Lounge -->
	<div class="lounge-container">
		<div class="lounge-main">
			<SpielfeldSlot>
				<template v-slot:content>
					<WanderwegStange
						class="backstage-wanderweg"
						style="
							left: 2%;
							top: 75%;
							z-index: 10;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goFoyer()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<div class="lounge-bg"></div>
					<div class="SpielfeldAdditions-lounge-path"></div>
					<div class="lounge-lounge"></div>
					<div class="lounge-hirsch" v-on:click="goRandom()">
						<img class="lounge-img" src="~static/images/objects/hirsch.png" />
					</div>
					<div class="lounge-drinks" v-on:click="goBar()">
						<img class="lounge-img" src="~static/images/objects/arm.png" />
					</div>
					<iframe
						class="lounge-fernseh"
						src="/spezifisch/onlyYoutube"
						width="100%"
						height="100px"
					></iframe>
				</template>
			</SpielfeldSlot>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "6", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.jazz2.sound.value._loop = true
			this.$sounds.jazz2.play();
		}, 500);
	},
	methods: {
		goRandom: function () {
			this.$router.push({ path: "/kulissen/millers/notausgang" });
		},
		goBar: function () {
			this.$router.push({ path: "/kulissen/millers/bar" });
		},
		goFoyer: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes lounge-path {
	0% {
		transform: scale(0) rotateY(-360deg);
	}
	100% {
		transform: scale(1) rotateY(0deg);
	}
}

//classes container + grid

.lounge-container {
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
	background-color: rgb(0, 120, 80);
}

.lounge-main {
	grid-area: main;
	width: 100%;
	height: 100%;
	animation-name: lounge-path;
	animation-duration: 3s;

	z-index: 0;
}

.lounge-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.lounge-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/textures/gatsby.jpg");
	background-size: 600px;
	pointer-events: none;
}

.SpielfeldAdditions-lounge-path {
	position: absolute;
	width: 100%;
	height: 30%;
	left: 0;
	top: 70%;
	background-image: url("/images/textures/perser.jpg");
	background-size: 100px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
	filter: invert(1);
	cursor: url("/images/icons/walkin.png"), auto;

	z-index: 2;
}

.lounge-lounge {
	position: absolute;
	width: 100%;
	height: 70%;
	left: 40%;
	top: 15%;
	background-image: url("/images/objects/lounge1.png");
	background-size: 50% 100%;
	background-repeat: no-repeat;
	transform: rotate(-3deg);

	z-index: 1;
	pointer-events: none;
}

.lounge-hirsch {
	position: absolute;
	width: 20%;
	height: 30%;
	left: 5%;
	top: 2%;
	cursor: pointer;
	z-index: 1;
	transition: all 0.5s ease-out;
	&:hover {
		transform: scale(1.3);
		transition: all 0.5s ease-out;
	}
}

.lounge-fernseh {
	position: absolute;
	width: 30%;
	height: 30%;
	left: 5%;
	top: 35%;
	border: solid black 10px;
	border-radius: 2%;
	pointer-events: none;
}

.lounge-drinks {
	position: absolute;
	width: 20%;
	height: 30%;
	right: 2%;
	top: 0;
	z-index: 1;
	transition: all 1s ease-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.3);
		transition: all 1s ease-out;
	}
}

.lounge-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}
</style>
