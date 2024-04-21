<template>
	<!-- arth goldau -->
	<div class="faido-container">
		<div class="faido-main">
			<SpielfeldSlotScaler :scale="0.4">
				<template v-slot:content>
					<div class="faido-path"></div>
					<div class="SpielfeldAdditions-faido-path"></div>
					<div class="faido-wolke1">
						<img class="faido-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="faido-wolke3">
						<img class="faido-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="faido-faido">
						<img class="faido-img" src="~static/images/objects/faido.png" />
					</div>
					<div
						class="faido-zug"
						v-on:click="goToArth()"
						@mouseover="$sounds.sbb.play({ interrupt: true })"
					>
						<img class="faido-img" src="~static/images/objects/traindooropen.png" />
					</div>
					<div class="faido-zugdoorl">
						<img class="faido-img" src="~static/images/objects/traindoorl.png" />
					</div>
					<div class="faido-zugdoorr">
						<img class="faido-img" src="~static/images/objects/traindoorr.png" />
					</div>
					<div class="faido-postauto" v-on:click="goToCari()">
						<img
							class="faido-img"
							src="~static/images/objects/postauto.png"
							@mouseover="$sounds.tutato.play({ interrupt: true })"
						/>
						<img
							class="faido-img"
							id="faido-door"
							src="~static/images/objects/postautodoor.png"
						/>
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "102", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.train3.sound.value._loop = true;
			this.$sounds.train3.play();
		}, 500);
	},
	methods: {
		goToCari: function () {
			this.$router.push({ path: "/kulissen/zug/cari" });
		},
		goToArth: function () {
			this.$router.push({ path: "/kulissen/zug/arth" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes faido-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes faido-wolke1 {
	0% {
		top: -50%;
	}
	100% {
		top: -10%;
	}
}

@keyframes faido-wolke3 {
	0% {
		left: -50%;
	}
	100% {
		left: 18%;
	}
}

@keyframes faido-zug {
	0% {
		right: -120%;
	}
	50% {
		right: -40%;
	}
	100% {
		right: 200%;
	}
}

@keyframes faido-postauto {
	0% {
		right: -120%;
	}
	50% {
		right: -100%;
	}
	100% {
		right: -5%;
	}
}

//classes container + grid

.faido-container {
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

.faido-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.faido-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	animation: faido-millers 4s ease-in-out forwards;

	z-index: 0;
}

//classes main

.SpielfeldAdditions-faido-path {
	position: absolute;
	width: 100%;
	height: 20%;
	left: 0;
	top: 80%;
	cursor: url("/images/icons/walkin.png"), auto;
}

.faido-path {
	position: absolute;
	width: 100%;
	height: 20%;
	left: 0;
	top: 80%;
	background-image: url("~static/images/textures/stone1.jpg");
	background-size: 200px;

	animation-name: faido-path;
	animation-duration: 4s;

	z-index: 2;
	pointer-events: none;
}

.faido-wolke1 {
	position: absolute;
	width: 30%;
	height: 40%;
	left: 3%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: faido-wolke1;
	animation-duration: 7s;

	z-index: 5;
	pointer-events: none;
}

.faido-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	left: 18%;
	top: -15%;
	transform: scaleX(-1);

	animation-name: faido-wolke3;
	animation-duration: 7s;

	z-index: 4;
	pointer-events: none;
}

.faido-faido {
	position: absolute;
	width: 25%;
	height: 60%;
	left: 2%;
	top: 20%;

	animation-name: faido-path;
	animation-duration: 4s;

	z-index: 1;
	pointer-events: none;
}

.faido-zug {
	position: absolute;
	width: 80%;
	height: 62%;
	right: 200%;
	top: 25%;
	filter: hue-rotate(90deg);
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);

	animation-name: faido-zug;
	animation-duration: 15s;

	z-index: 1;
	cursor: pointer;
}

.faido-zugdoorl {
	position: absolute;
	width: 80%;
	height: 62%;
	right: 200%;
	top: 25%;
	filter: hue-rotate(90deg);

	animation-name: faido-zug;
	animation-duration: 15s;
	transition: all 1s ease-out;

	z-index: 2;
	pointer-events: none;
}

.faido-zugdoorr {
	position: absolute;
	width: 80%;
	height: 62%;
	right: 200%;
	top: 25%;
	filter: hue-rotate(90deg);

	animation-name: faido-zug;
	animation-duration: 15s;
	transition: all 1s ease-out;

	z-index: 2;
	pointer-events: none;
}

.faido-zug:hover + .faido-zug2doorl {
	right: -38%;
	transition: all 1s ease-out;
}

.faido-postauto {
	position: absolute;
	width: 60%;
	height: 50%;
	right: -5%;
	top: 32%;

	animation-name: faido-postauto;
	animation-duration: 15s;

	z-index: 2;
	cursor: pointer;
}

#faido-door {
	left: 0;
	transition: all 1s ease-out;
	clip-path: polygon(50% 0%, 50% 100%, 100% 100%, 100% 0%);
}

#faido-door:hover {
	left: 10%;
	transition: all 1s ease-out;
}

.faido-zug:hover + .faido-doorr2 {
	left: -2%;
	transition: all 1s ease-out;
}

.faido-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}
</style>
