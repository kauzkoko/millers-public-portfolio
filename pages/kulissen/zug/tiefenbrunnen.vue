<template>
	<!-- road to cari -->
	<div class="tiefenbrunnen-container">
		<!-- Main -->
		<div class="tiefenbrunnen-main">
			<!-- Kulisse -->
			<SpielfeldSlotScaler :scale="0.4">
				<template v-slot:content>
					<WanderwegStange
						style="left: 5%; top: 60%; z-index: 3; transform: scale(1.2)"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Millers</template>
					</WanderwegStange>
					<div class="tiefenbrunnen-path"></div>
					<div class="SpielfeldAdditions-tiefenbrunnen-path"></div>
					<div class="tiefenbrunnen-wolke1">
						<img class="tiefenbrunnen-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="tiefenbrunnen-wolke3">
						<img class="tiefenbrunnen-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div
						class="tiefenbrunnen-zug"
						v-on:click="goToArth()"
						@mouseover="$sounds.sbb.play()"
					>
						<img
							class="tiefenbrunnen-img"
							src="~static/images/objects/traindooropen.png"
						/>
					</div>
					<div class="tiefenbrunnen-zugdoorl">
						<img
							class="tiefenbrunnen-img"
							src="~static/images/objects/traindoorl.png"
						/>
					</div>
					<div class="tiefenbrunnen-zugdoorr">
						<img
							class="tiefenbrunnen-img"
							src="~static/images/objects/traindoorr.png"
						/>
					</div>
					<!-- <div class="SpielfeldAdditions-tiefenbrunnen-perron"></div> -->
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "100", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.sbb.sound.value._volume = 2;
			this.$sounds.train1.sound.value._loop = true;
			this.$sounds.train1.play();
		}, 500);
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	methods: {
		goToArth: function () {
			this.$router.push({ path: "/kulissen/zug/arth" });
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/start" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes tiefenbrunnen-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes tiefenbrunnen-wolke1 {
	0% {
		left: -50%;
	}
	100% {
		left: 5%;
	}
}

@keyframes tiefenbrunnen-wolke3 {
	0% {
		top: -50%;
	}
	100% {
		top: -12%;
	}
}

@keyframes tiefenbrunnen-zug {
	0% {
		right: -120%;
	}
	100% {
		right: -40%;
	}
}

//classes container + grid

.tiefenbrunnen-container {
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

.tiefenbrunnen-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.SpielfeldAdditions-tiefenbrunnen-path {
	position: absolute;
	width: 100%;
	height: 30%;
	top: 70%;
	left: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

.tiefenbrunnen-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/objects/tiefenbrunnen.png");
	background-size: 100% 100%;

	animation-name: tiefenbrunnen-path;
	animation-duration: 4s;

	z-index: 2;
	pointer-events: none;
}

.tiefenbrunnen-wolke1 {
	position: absolute;
	width: 30%;
	height: 40%;
	left: 5%;
	top: -10%;

	animation-name: tiefenbrunnen-wolke1;
	animation-duration: 7s;

	z-index: 5;
	pointer-events: none;
}

.tiefenbrunnen-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	right: 5%;
	top: -12%;

	animation-name: tiefenbrunnen-wolke3;
	animation-duration: 7s;

	z-index: 4;
	pointer-events: none;
}

.tiefenbrunnen-zug {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);

	animation-name: tiefenbrunnen-zug;
	animation-duration: 7s;

	z-index: 1;
	cursor: pointer;
}

.tiefenbrunnen-zugdoorl {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;

	animation-name: tiefenbrunnen-zug;
	animation-duration: 7s;
	transition: all 1s ease-out;

	z-index: 1;
	pointer-events: none;
}

.tiefenbrunnen-zugdoorr {
	position: absolute;
	width: 80%;
	height: 62%;
	right: -40%;
	top: 20%;

	animation-name: tiefenbrunnen-zug;
	animation-duration: 7s;
	transition: all 1s ease-out;

	z-index: 1;
	pointer-events: none;
}

.tiefenbrunnen-zug:hover + .tiefenbrunnen-zugdoorl {
	right: -38%;
	transition: all 1s ease-out;
}

.tiefenbrunnen-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

// .SpielfeldAdditions-tiefenbrunnen-perron {
// 	position: absolute;
// 	width: 100%;
// 	height: 75%;
// 	left: 0;
// 	top: 0%;
// 	z-index: 5;
// 	pointer-events: none;
// }
</style>
