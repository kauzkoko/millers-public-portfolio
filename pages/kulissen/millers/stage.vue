<template>
	<!-- Stage -->
	<div class="stage-container">
		<div class="stage-main">
			<SpielfeldSlot>
				<template v-slot:content>
					<div class="stage-vorhangl"></div>
					<div class="stage-vorhangr"></div>
					<WanderwegStange
						class="stage-wanderweg"
						style="
							left: 2%;
							top: 70%;
							z-index: 10;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<WanderwegStange
						direction="right"
						class="stage-wanderweg2"
						style="
							right: 2%;
							top: 70%;
							z-index: 10;
							transform: scale(1.2) rotate(-10deg);
						"
						@wegweiser-click="goToBackstage()"
					>
						<template v-slot:text>Backstage</template>
					</WanderwegStange>
					<div class="SpielfeldAdditions-stage-path"></div>
					<iframe
						class="stage-schweizerfam"
						v-bind:src="youtubeLinks[youtubeLink]"
						frameborder="0"
						allow="autoplay; fullscreen"
					></iframe>
				</template>
			</SpielfeldSlot>
		</div>
	</div>
</template>

<script>
export default {
	layout: "default",
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "3", "0", "111"]);
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	data() {
		return {
			youtubeLinks: [
				"https://www.youtube.com/embed/GdDSzLCz0WE?autoplay=1&mute=1",
				"https://www.youtube.com/embed/Bo2Rwf_CCW4?autoplay=1&mute=1",
				"https://www.youtube.com/embed/TAjSoVCF_NE?autoplay=1&mute=1",
				"https://www.youtube.com/embed/J65GfcpYOnc?autoplay=1&mute=1",
				"https://www.youtube.com/embed/YEMw8DZTzyg?autoplay=1&mute=1",
				"https://www.youtube.com/embed/b76U81yijsw?autoplay=1&mute=1",
				"https://www.youtube.com/embed/9VYDjAE4I8g?autoplay=1&mute=1",
				"https://www.youtube.com/embed/IyqfavtAS_o?autoplay=1&mute=1",
				"https://www.youtube.com/embed/xKJEUWKo4e8?autoplay=1&mute=1",
			],
			youtubeLink: this.getRandomInt(0, 8),
		};
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
		goToBackstage: function () {
			this.$router.push({ path: "/kulissen/millers/backstage" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes stage-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes stage-millers {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes stage-vorhangl {
	from {
		width: 50%;
	}
	to {
		width: 8%;
	}
}

@keyframes stage-vorhangr {
	from {
		width: 50%;
	}
	to {
		width: 10%;
	}
}

@keyframes stage-wegweiser {
	from {
		left: -100%;
	}
	to {
		left: 2%;
	}
}

@keyframes stage-wegweiser2 {
	from {
		right: -100%;
	}
	to {
		right: 2%;
	}
}

//classes container + grid

.stage-container {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
}

.stage-main {
	width: 100%;
	height: 100%;
	z-index: 0;
}

//classes main

.SpielfeldAdditions-stage-path {
	position: absolute;
	width: 100%;
	height: 30%;
	left: 0;
	top: 70%;
	background-image: url("~static/images/textures/gatsby.jpg");
	background-size: 300px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
	filter: invert(1);

	animation-name: stage-path;
	animation-duration: 6s;

	z-index: 2;
	cursor: url("/images/icons/walkin.png"), auto;
}

.stage-wanderweg {
	animation-name: stage-wegweiser;
	animation-duration: 6s;
}

.stage-wanderweg2 {
	animation-name: stage-wegweiser2;
	animation-duration: 5s;
}

.stage-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 75%;
	width: 8%;
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

	animation: stage-vorhangl 4s ease-in-out forwards;

	z-index: 10;
	pointer-events: none;
}

.stage-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 10%;
	height: 75%;
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

	animation: stage-vorhangr 3.8s ease-in-out forwards;

	z-index: 10;
	pointer-events: none;
}

.stage-schweizerfam {
	position: absolute;
	top: 0;
	left: 8%;
	width: 82%;
	height: 70%;
}
</style>
