<template>
	<!-- start -->
	<div class="start-container">
		<div class="start-main">
			<SpielfeldSlotScaler :scale="0.5">
				<template v-slot:content>
					<Popcorn
						:style="{
							left: random1 + '%',
							top: random2 + '%',
						}"
					/>
					<WanderwegStange
						style="
							left: 20%;
							top: 60%;
							z-index: 3;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goToMillers()"
					>
						<template v-slot:text>Millers</template>
					</WanderwegStange>
					<WanderwegStange
						direction="right"
						style="left: 82%; top: 10%; z-index: 3"
						@wegweiser-click="goToDickicht()"
					>
						<template v-slot:text>Dickicht</template>
					</WanderwegStange>
					<WanderwegStange
						style="
							left: 40%;
							top: 10%;
							z-index: 3;
							transform: rotate(20deg) scale(0.9);
						"
						@wegweiser-click="goToBHF()"
					>
						<template v-slot:text>Bahnhof</template>
					</WanderwegStange>
					<div class="start-vorhangl"></div>
					<div class="start-vorhangr"></div>
					<div class="start-path"></div>
					<div class="start-path2"></div>
					<div class="start-wolke1">
						<img class="start-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="start-wolke2">
						<img class="start-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="start-wolke3">
						<img class="start-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="start-wolke4">
						<img class="start-img" src="~static/images/objects/wolke2.png" />
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";

export default {
	data() {
		return {
			random1: 0,
			random2: 0,
			random3: 0,
			random4: 0,
			random5: 0,
			random6: 0,
		};
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "10", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.vorhang.play();
		}, 2000);
		setTimeout(() => {
			this.$sounds.zueriRed.sound.value._loop = true;
			this.$sounds.zueriRed.play();
		}, 1000);
		this.random1 = getRandomInt(10, 90);
		this.random2 = getRandomInt(10, 90);
		this.random3 = getRandomInt(10, 90);
		this.random4 = getRandomInt(10, 90);
		this.random5 = getRandomInt(10, 90);
		this.random6 = getRandomInt(10, 90);
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goToMillers: function () {
			this.$router.push({ path: "/kulissen/millers/vorMillers" });
		},
		goToBHF: function () {
			this.$router.push({ path: "/kulissen/zug/tiefenbrunnen" });
		},
		goToDickicht: function () {
			this.$router.push({ path: "/kulissen/dickicht/$0$0$0" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes start-vorhang {
	from {
		width: 50%;
	}
	to {
		width: 4%;
	}
}

@keyframes start-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes start-millers {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes start-wolke1 {
	0% {
		left: -50%;
	}
	100% {
		left: 10%;
	}
}

@keyframes start-wolke2 {
	0% {
		top: -50%;
	}
	100% {
		top: 0;
	}
}

@keyframes start-wolke3 {
	0% {
		right: -50%;
	}
	100% {
		right: 5%;
	}
}

@keyframes start-wolke4 {
	0% {
		top: -50%;
	}
	100% {
		top: 0;
	}
}

//classes container + grid

.start-container {
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
	background-color: bisque;
}

.start-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

//classes main

.start-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 120%;
	width: 50%;
	background: linear-gradient(
		90deg,
		rgba(255, 0, 0, 1) 0%,
		rgba(134, 1, 1, 1) 7%,
		rgba(222, 0, 0, 1) 12%,
		rgba(148, 0, 0, 1) 20%,
		rgba(187, 0, 0, 1) 27%,
		rgba(238, 0, 0, 1) 36%,
		rgba(167, 1, 1, 1) 52%,
		rgba(200, 1, 1, 1) 67%,
		rgba(116, 0, 0, 1) 79%,
		rgba(173, 0, 0, 1) 87%,
		rgba(107, 0, 0, 1) 100%
	);

	animation: start-vorhang 4s ease-in-out 2s forwards;

	z-index: 10;
}

.start-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 120%;
	background: linear-gradient(
		90deg,
		rgba(255, 0, 0, 1) 2%,
		rgba(134, 1, 1, 1) 11%,
		rgba(222, 0, 0, 1) 17%,
		rgba(148, 0, 0, 1) 24%,
		rgba(187, 0, 0, 1) 31%,
		rgba(238, 0, 0, 1) 44%,
		rgba(167, 1, 1, 1) 58%,
		rgba(200, 1, 1, 1) 61%,
		rgba(116, 0, 0, 1) 74%,
		rgba(173, 0, 0, 1) 90%,
		rgba(107, 0, 0, 1) 100%
	);

	animation: start-vorhang 3.8s ease-in-out 2s forwards;

	z-index: 10;
}

.start-path2 {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/textures/stone1.jpg");
	background-size: 100px;
	clip-path: polygon(
		26% 100%,
		33% 88%,
		33% 71%,
		23% 60%,
		12% 56%,
		0% 58%,
		0% 34%,
		9% 30%,
		19% 30%,
		26% 33%,
		30% 44%,
		38% 50%,
		47% 50%,
		65% 100%
	);

	animation-name: start-path;
	animation-duration: 7s;
	pointer-events: none;

	z-index: 2;
}

.start-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/textures/stone1.jpg");
	background-size: 100px;
	clip-path: polygon(
		20% 100%,
		21% 86%,
		29% 72%,
		39% 59%,
		44% 47%,
		39% 41%,
		34% 35%,
		33% 26%,
		35% 19%,
		34% 11%,
		28% 8%,
		22% 3%,
		22% 0%,
		34% 0%,
		36% 5%,
		41% 10%,
		43% 14%,
		42% 20%,
		43% 28%,
		46% 31%,
		53% 34%,
		61% 31%,
		68% 29%,
		74% 24%,
		80% 21%,
		87% 18%,
		93% 18%,
		100% 18%,
		100% 29%,
		90% 32%,
		80% 33%,
		74% 40%,
		67% 48%,
		68% 55%,
		68% 62%,
		69% 68%,
		65% 76%,
		56% 86%,
		55% 92%,
		61% 95%,
		67% 100%
	);

	animation-name: start-path;
	animation-duration: 8s;
	pointer-events: none;

	z-index: 2;
}

.start-wolke1 {
	position: absolute;
	width: 30%;
	height: 50%;
	left: 10%;
	top: -5%;
	pointer-events: none;

	animation-name: start-wolke1;
	animation-duration: 7s;

	z-index: 5;
}

.start-wolke2 {
	position: absolute;
	width: 25%;
	height: 40%;
	left: 20%;
	top: 0;
	pointer-events: none;

	animation-name: start-wolke2;
	animation-duration: 7s;
	transition: all 0.2s ease-out;

	z-index: 4;
}

.start-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	right: 5%;
	top: 0;
	transform: scaleX(-1);
	pointer-events: none;

	animation-name: start-wolke3;
	animation-duration: 7s;

	z-index: 4;
}

.start-wolke4 {
	position: absolute;
	width: 35%;
	height: 50%;
	right: 15%;
	top: 0;
	transform: scaleX(-1);
	pointer-events: none;

	animation-name: start-wolke4;
	animation-duration: 5s;
	transition: all 1s ease-out;

	z-index: 5;
}

.start-img {
	position: relative;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	pointer-events: none;
}

.start-millers {
	position: relative;
	width: 20%;
	height: 20%;
	left: 85%;
	top: -100%;
	background-image: url("~static/images/objects/millers.png");
	background-size: 200px;
	background-repeat: no-repeat;

	animation-name: start-millers;
	animation-duration: 5s;
	transition: all 1s ease-out;

	z-index: 4;
}

.start-avatar {
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	transform: scale(0.1);

	z-index: 3;
}

.start-avatar-s {
	position: absolute;
	width: 100%;
	height: 100%;
	transform: scale(0.1);

	z-index: 3;
}

.start-avatar-n {
	position: absolute;
	width: 100%;
	height: 100%;
	transform: scale(0.05);

	z-index: 3;
}

.start-schoggihase {
	position: absolute;
	z-index: 3;
	left: 55%;
	top: 80%;
	cursor: pointer;
	img {
		width: 60px;
	}
}
.start-heart {
	position: absolute;
	z-index: 3;
	left: 25%;
	top: 20%;
	cursor: pointer;
	img {
		width: 60px;
	}
}
</style>
