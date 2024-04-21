<template>
	<!-- arth goldau -->
	<div class="arth-container">
		<div class="arth-main">
			<SpielfeldSlotScaler :scale="0.4">
				<template v-slot:content>
					<div class="arth-path"></div>
					<div class="arth-wolke1">
						<img class="arth-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="arth-wolke3">
						<img class="arth-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div
						class="arth-zug"
						v-on:click="goToFaido()"
						@mouseover="$sounds.sbb.play({ interrupt: true })"
					>
						<img class="arth-img" src="~static/images/objects/traindooropen.png" />
					</div>
					<div class="arth-zugdoorl">
						<img class="arth-img" src="~static/images/objects/traindoorl.png" />
					</div>
					<div class="arth-zugdoorr">
						<img class="arth-img" src="~static/images/objects/traindoorr.png" />
					</div>
					<div class="SpielfeldAdditions-arth-path"></div>
					<div
						class="arth-zug2"
						v-on:click="goToBHF()"
						@mouseover="$sounds.sbb.play({ interrupt: true })"
						@mouseleave="$sounds.sbb.pause({ interrupt: false })"
					>
						<img class="arth-img" src="~static/images/objects/traindooropen.png" />
					</div>
					<div class="arth-zug2doorl">
						<img class="arth-img" src="~static/images/objects/traindoorl.png" />
					</div>
					<div class="arth-zug2doorr">
						<img class="arth-img" src="~static/images/objects/traindoorr.png" />
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "101", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.train2.sound.value._loop = true
			this.$sounds.train2.play();
		}, 500);
	},
	methods: {
		goToBHF: function () {
			this.$router.push({ path: "/kulissen/zug/tiefenbrunnen" });
		},
		goToFaido: function () {
			this.$router.push({ path: "/kulissen/zug/faido" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes arth-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes arth-wolke1 {
	0% {
		top: -50%;
	}
	100% {
		top: -10%;
	}
}

@keyframes arth-wolke3 {
	0% {
		right: -50%;
	}
	100% {
		right: 5%;
	}
}

@keyframes arth-zug {
	0% {
		right: -120%;
	}
	100% {
		right: -40%;
	}
}

@keyframes arth-zug2 {
	0% {
		left: -120%;
	}
	50% {
		left: -40%;
	}
	100% {
		left: 200%;
	}
}

//classes container + grid

.arth-container {
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

.arth-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.arth-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	animation: arth-millers 4s ease-in-out forwards;

	z-index: 0;
}

//classes main

.SpielfeldAdditions-arth-path {
	position: absolute;
	width: 100%;
	height: 30%;
	top: 70%;
	left: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

.arth-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/objects/arth.png");
	background-size: 100% 100%;

	animation-name: arth-path;
	animation-duration: 4s;

	z-index: 3;
	pointer-events: none;
}

.arth-wolke1 {
	position: absolute;
	width: 30%;
	height: 40%;
	left: 5%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: arth-wolke1;
	animation-duration: 7s;

	z-index: 5;
	pointer-events: none;
}

.arth-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	right: 5%;
	top: -12%;
	transform: scaleX(-1);

	animation-name: arth-wolke3;
	animation-duration: 7s;

	z-index: 4;
	pointer-events: none;
}

.arth-zug {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;
	filter: hue-rotate(90deg);
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);

	animation-name: arth-zug;
	animation-duration: 20s;

	z-index: 2;
	cursor: pointer;
}

.arth-zugdoorl {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;
	filter: hue-rotate(90deg);

	animation-name: arth-zug;
	animation-duration: 20s;
	transition: all 1s ease-out;

	z-index: 2;
	pointer-events: none;
}

.arth-zugdoorr {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;
	filter: hue-rotate(90deg);

	animation-name: arth-zug;
	animation-duration: 20s;
	transition: all 1s ease-out;

	z-index: 2;
	pointer-events: none;
}

.arth-zug:hover + .arth-zugdoorl {
	right: -38%;
	transition: all 1s ease-out;
}

.arth-zug2 {
	position: absolute;
	width: 80%;
	height: 62%;
	left: 200%;
	top: 20%;
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);

	animation-name: arth-zug2;
	animation-duration: 18s;
	transform: scaleX(-1);
	z-index: 1;
	cursor: pointer;
}

.arth-zug2doorl {
	position: absolute;
	width: 80%;
	height: 62%;
	left: 200%;
	top: 20%;
	transform: scaleX(-1);

	animation-name: arth-zug2;
	animation-duration: 18s;
	transition: all 1s ease-out;

	z-index: 1;
	pointer-events: none;
}

.arth-zug2doorr {
	position: absolute;
	width: 80%;
	height: 62%;
	left: 200%;
	top: 20%;
	transform: scaleX(-1);

	animation-name: arth-zug2;
	animation-duration: 18s;
	transition: all 1s ease-out;

	z-index: 1;
	pointer-events: none;
}

.arth-zug2:hover + .arth-zug2doorl {
	right: -38%;
	transition: all 1s ease-out;
}

.arth-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}
</style>
