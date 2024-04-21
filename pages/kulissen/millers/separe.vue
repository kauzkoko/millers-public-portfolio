<template>
	<!-- separe -->
	<div class="separe-container">
		<div class="separe-main">
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
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<div class="separe-bg"></div>
					<div class="SpielfeldAdditions-separe-path"></div>
					<div class="separe-separe"></div>
					<div
						class="animate__animated animate__heartBeat animate__infinite animate__slow separe-heart1"
					>
						<img class="separe-img" src="/images/objects/heartsparkling.png" />
					</div>
					<div
						class="animate__animated animate__bounce animate__infinite animate__slow separe-heart2"
					>
						<img class="separe-img" src="/images/objects/heartarrow.png" />
					</div>
				</template>
			</SpielfeldSlot>
		</div>
		<div id="separe-link">
			<a href="https://meet.jit.si/MillersSepare" target="_blank">
				<img src="/images/objects/separe_open.png" />
			</a>
		</div>
		<div id="separe-sprech">
			<p>Klick mich und komm rein!</p>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "9", "0", "111"]);
	},
	methods: {
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes separe-container {
	0% {
		transform: scale(0) rotateX(-360deg);
	}
	100% {
		transform: scale(1) rotateX(0deg);
	}
}

@keyframes separe-link {
	0% {
		transform: scale(0) rotateX(-360deg) translate(-50%, 0);
	}
	100% {
		transform: scale(1) rotateX(0deg) translate(-50%, 0);
	}
}

@keyframes separe-fernseh {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

//classes container + grid

.separe-container {
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
	background-color: rgb(170, 0, 0);
}

.separe-main {
	grid-area: main;
	width: 100%;
	height: 100%;
	animation-name: separe-container;
	animation-duration: 3s;

	z-index: 0;
}

.separe-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.separe-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/textures/gatsby_red.jpg");
	background-size: 300px;
	pointer-events: none;
	filter: grayscale(0.3) contrast(120%);
}

.SpielfeldAdditions-separe-path {
	position: absolute;
	width: 100%;
	height: 30%;
	left: 0;
	top: 70%;
	background-image: url("/images/textures/teppichsmall.jpg");
	background-size: 400px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
	cursor: url("/images/icons/walkin.png"), auto;

	z-index: 2;
}

.separe-separe {
	position: absolute;
	width: 100%;
	height: 70%;
	left: 40%;
	top: 15%;
	background-image: url("/images/objects/separe1.png");
	background-size: 50% 100%;
	background-repeat: no-repeat;
	transform: rotate(-3deg);

	z-index: 1;
	pointer-events: none;
}

#separe-link {
	position: absolute;
	width: 60%;
	height: 20%;
	left: 50%;
	top: 5%;
	transform: translate(-50%, 0);
	z-index: 0;
	:hover {
		transform: scale(1.2) translate(-50%, 0);
		transition: all 0.3s ease-out;
	}
	animation-name: separe-link;
	animation-duration: 3s;
	a {
		font-family: UniversalisBold;
		color: black;
		font-size: 2em;
		z-index: 1;
	}
	img {
		position: relative;
		left: 50%;
		width: 50%;
		transform: translate(-50%, 0);
		transition: all 0.3s ease-out;
		z-index: 1;
	}
}

#separe-sprech {
	position: absolute;
	width: 20%;
	height: 20%;
	left: 25%;
	top: 3%;
	background-color: white;
	z-index: 2;
	clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 75%,
		75% 75%,
		75% 100%,
		50% 75%,
		0% 75%
	);
	animation-name: separe-container;
	animation-duration: 3s;
	p {
		position: relative;
		top: 15%;
		font-family: UniversalisBold;
		color: black;
		font-size: 2em;
		text-align: center;
	}
}

.separe-heart1 {
	position: absolute;
	width: 15%;
	height: 30%;
	left: 2%;
	top: 10%;
	z-index: 1;
}

.separe-heart2 {
	position: absolute;
	width: 15%;
	height: 30%;
	right: 2%;
	top: 30%;
	z-index: 1;
}

.separe-img {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
}
</style>
