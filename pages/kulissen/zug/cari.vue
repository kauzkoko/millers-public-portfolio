<template>
	<!-- arth goldau -->
	<div class="cari-container">
		<div class="cari-main">
			<SpielfeldSlotScaler :scale="0.4">
				<template v-slot:content>
					<WanderwegStange
						direction="right"
						style="right: 10%; top: 63%; z-index: 3; transform: scale(1.2)"
						@wegweiser-click="goToPro()"
					>
						<template v-slot:text>Pro d'ör</template>
					</WanderwegStange>
					<div class="cari-back"></div>
					<div class="cari-berg2"></div>
					<div class="cari-berg"></div>
					<div class="cari-path"></div>
					<div class="SpielfeldAdditions-cari-path"></div>
					<div class="cari-wolke1">
						<img class="cari-img" src="~static/images/objects/wolke2.png" />
					</div>
					<div class="cari-wolke3">
						<img class="cari-img" src="~static/images/objects/wolke1.png" />
					</div>
					<div class="cari-cari" v-on:click="goToPro()">
						<img class="cari-img" src="~static/images/objects/cari.png" />
					</div>
					<div class="cari-postauto" v-on:click="goToFaido()">
						<img
							class="cari-img"
							src="~static/images/objects/postauto.png"
							@mouseover="$sounds.tutato.play({ interrupt: true })"
						/>
						<img
							class="cari-img"
							id="cari-door"
							src="~static/images/objects/postautodoor.png"
						/>
					</div>
					<div class="snowflakes">
						<div class="snowflake">❅</div>
						<div class="snowflake">❅</div>
						<div class="snowflake">❆</div>
						<div class="snowflake">❄</div>
						<div class="snowflake">❅</div>
						<div class="snowflake">❆</div>
						<div class="snowflake">❄</div>
						<div class="snowflake">❅</div>
						<div class="snowflake">❆</div>
						<div class="snowflake">❄</div>
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goToFaido: function () {
			this.$router.push({ path: "/kulissen/zug/faido" });
		},
		goToPro: function () {
			this.$router.push({ path: "/kulissen/zug/prodoer" });
		},
	},
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "103", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zoobackground.sound.value._loop = true;
			this.$sounds.zoobackground.play();
		}, 500);
	},
};
</script>

<style lang="scss">
//animations

@keyframes cari-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes cari-wolke1 {
	0% {
		top: -50%;
	}
	100% {
		top: -10%;
	}
}

@keyframes cari-berg {
	0% {
		top: -150%;
	}
	100% {
		top: 0;
	}
}

@keyframes cari-wolke3 {
	0% {
		left: -50%;
	}
	100% {
		left: 18%;
	}
}

@keyframes cari-postauto {
	0% {
		left: -120%;
	}
	100% {
		left: -4%;
	}
}

//classes container + grid

.cari-container {
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

.cari-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.cari-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	animation: cari-millers 4s ease-in-out forwards;

	z-index: 0;
}

//classes main

.cari-back {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: lightblue;
	pointer-events: none;
}

.SpielfeldAdditions-cari-path {
	position: absolute;
	width: 100%;
	height: 40%;
	left: 0;
	top: 60%;
	cursor: url("/images/icons/walkin.png"), auto;
}

.cari-path {
	position: absolute;
	width: 100%;
	height: 40%;
	left: 0;
	top: 60%;
	background-image: url("~static/images/textures/snow.jpg");
	background-size: 200px;

	animation-name: cari-path;
	animation-duration: 4s;

	z-index: 1;
	pointer-events: none;
}

.cari-berg {
	position: absolute;
	width: 80%;
	height: 130%;
	right: -10%;
	top: 0%;
	background-image: url("~static/images/objects/berg1.png");
	background-size: 100% 100%;
	transform: scaleX(-1);
	filter: invert(1);
	pointer-events: none;

	animation-name: cari-berg;
	animation-duration: 12s;
}

.cari-berg2 {
	position: absolute;
	width: 80%;
	height: 130%;
	left: -10%;
	top: 0%;
	background-image: url("~static/images/objects/berg1.png");
	background-size: 100% 100%;
	transform: scaleX(-1);
	// filter: invert(1);
	pointer-events: none;

	animation-name: cari-berg;
	animation-duration: 10s;
	transition: all ease-out;
}

.cari-wolke1 {
	position: absolute;
	width: 30%;
	height: 40%;
	left: 3%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: cari-wolke1;
	animation-duration: 7s;

	z-index: 5;
	pointer-events: none;
}

.cari-wolke3 {
	position: absolute;
	width: 25%;
	height: 40%;
	left: 18%;
	top: -15%;
	transform: scaleX(-1);

	animation-name: cari-wolke3;
	animation-duration: 7s;

	z-index: 4;
	pointer-events: none;
}

.cari-cari {
	position: absolute;
	width: 20%;
	height: 50%;
	left: 20%;
	top: 22%;
	pointer-events: none;

	animation-name: cari-path;
	animation-duration: 4s;

	z-index: 1;
}

.cari-postauto {
	position: absolute;
	width: 40%;
	height: 42%;
	left: -4%;
	top: 40%;
	transform: scaleX(-1);

	animation-name: cari-postauto;
	animation-duration: 8s;

	z-index: 2;
	cursor: pointer;
}

#cari-door {
	left: 0;
	transition: all 1s ease-out;
	clip-path: polygon(50% 0%, 50% 100%, 100% 100%, 100% 0%);
}

#cari-door:hover {
	left: 10%;
	transition: all 1s ease-out;
}

.cari-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

.snowflakes {
	pointer-events: none;
}

.snowflake {
	color: #fff;
	font-size: 3em;
	font-family: Arial;
	text-shadow: 0 0 1px #000;
	pointer-events: none;
}

@-webkit-keyframes snowflakes-fall {
	0% {
		top: -10%;
	}
	100% {
		top: 100%;
	}
}
@-webkit-keyframes snowflakes-shake {
	0% {
		-webkit-transform: translateX(0px);
		transform: translateX(0px);
	}
	50% {
		-webkit-transform: translateX(80px);
		transform: translateX(80px);
	}
	100% {
		-webkit-transform: translateX(0px);
		transform: translateX(0px);
	}
}
@keyframes snowflakes-fall {
	0% {
		top: -10%;
	}
	100% {
		top: 100%;
	}
}
@keyframes snowflakes-shake {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(80px);
	}
	100% {
		transform: translateX(0px);
	}
}
.snowflake {
	position: fixed;
	top: -10%;
	z-index: 9999;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: default;
	-webkit-animation-name: snowflakes-fall, snowflakes-shake;
	-webkit-animation-duration: 10s, 3s;
	-webkit-animation-timing-function: linear, ease-in-out;
	-webkit-animation-iteration-count: infinite, infinite;
	-webkit-animation-play-state: running, running;
	animation-name: snowflakes-fall, snowflakes-shake;
	animation-duration: 10s, 3s;
	animation-timing-function: linear, ease-in-out;
	animation-iteration-count: infinite, infinite;
	animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
	left: 1%;
	-webkit-animation-delay: 0s, 0s;
	animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
	left: 10%;
	-webkit-animation-delay: 1s, 1s;
	animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
	left: 20%;
	-webkit-animation-delay: 6s, 0.5s;
	animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
	left: 30%;
	-webkit-animation-delay: 4s, 2s;
	animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
	left: 40%;
	-webkit-animation-delay: 2s, 2s;
	animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
	left: 50%;
	-webkit-animation-delay: 8s, 3s;
	animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
	left: 60%;
	-webkit-animation-delay: 6s, 2s;
	animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
	left: 70%;
	-webkit-animation-delay: 2.5s, 1s;
	animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
	left: 80%;
	-webkit-animation-delay: 1s, 0s;
	animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
	left: 90%;
	-webkit-animation-delay: 3s, 1.5s;
	animation-delay: 3s, 1.5s;
}
</style>
