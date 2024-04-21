<template>
	<!-- Random Notausgang -->
	<div class="notausgang-container">
		<div class="notausgang-main">
			<SpielfeldSlotScaler :scale="0.3">
				<template v-slot:content>
					<div class="notausgang-vorhangl"></div>
					<div class="notausgang-vorhangr"></div>
					<div class="notausgang-bg">
						<iframe
							class="notausgang-iframe"
							v-bind:src="iframeLinks[iframeLink]"
							frameborder="0"
							allow="autoplay; fullscreen"
							controls="0"
							loop="1"
						></iframe>
					</div>
					<div class="SpielfeldAdditions-notausgang-bgDiv"></div>
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
					<div class="notausgang-sound">
						<p>Sound</p>
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import VueFriendlyIframe from "vue-friendly-iframe";
Vue.use(VueFriendlyIframe);

export default {
	data() {
		return {
			iframeLinks: [
				"https://www.youtube.com/embed/FQAyoaa18J0?autoplay=1&mute=1",
				"https://www.youtube.com/embed/BlVJviK0ci4?autoplay=1&mute=1",
				"https://www.youtube.com/embed/W3RKRnLPaag?autoplay=1&mute=1",
				"https://www.youtube.com/embed/OeJ5xXrbkfU?autoplay=1&mute=1",
				"https://www.youtube.com/embed/WYt0bVm97fU?autoplay=1&mute=1",
				"https://www.youtube.com/embed/J3Umh2R9P0Q?autoplay=1&mute=1",
				"https://www.youtube.com/embed/QgGK4qBTwpw?autoplay=1&mute=1",
				"https://www.youtube.com/embed/gkxGs4ETeg4?autoplay=1&mute=1",
				"https://www.youtube.com/embed/C0BxORWTD7s?autoplay=1&mute=1",
				"https://www.youtube.com/embed/hfDt60mmXxs?autoplay=1&mute=1",
				"https://www.youtube.com/embed/H4IrfObVzJo?autoplay=1&mute=1",
				"https://www.youtube.com/embed/agm_fyV6s9g?autoplay=1&mute=1",
				"https://www.youtube.com/embed/KTA5RDkIGIY?autoplay=1&mute=1",
				"https://www.youtube.com/embed/SB-qEYVdvXA?autoplay=1&mute=1",
				"https://www.youtube.com/embed/tPL9-L2gwzo?autoplay=1&mute=1",
				"https://www.youtube.com/embed/IW9ABm9yCfc?autoplay=1&mute=1",
				"https://www.youtube.com/embed/tlkFuc0m4N8?autoplay=1&mute=1",
				"https://www.youtube.com/embed/CMkVUVODnkk?autoplay=1&mute=1",
				"https://www.youtube.com/embed/PakAvfdXi5I?autoplay=1&mute=1",
				"https://www.youtube.com/embed/icDT3sUvlsw?autoplay=1&mute=1",
				"https://www.youtube.com/embed/jX3iLfcMDCw?autoplay=1&mute=1",
				"https://www.youtube.com/embed/o2LSr9vc3c0?autoplay=1&mute=1",
				"https://www.youtube.com/embed/AHrCI9eSJGQ?autoplay=1&mute=1",
				"https://www.youtube.com/embed/hFZFjoX2cGg?autoplay=1&mute=1",
				"https://www.youtube.com/embed/iUZn74E1i6w?autoplay=1&mute=1",
			],
			iframeLink: this.getRandomInt(0, 24),
		};
	},
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "5", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.vorhang.play();
		}, 4000);
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes notausgang-vorhang {
	0% {
		width: 50%;
	}
	50% {
		width: 50%;
	}
	to {
		width: 10%;
	}
}

@keyframes notausgang-button {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

//classes container + grid

.notausgang-container {
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
	background-color: black;
}

.notausgang-main {
	grid-area: main;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

.notausgang-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;
	z-index: 0;
	background-color: black;
}

//classes main

.notausgang-bg {
	position: absolute;
	left: 10%;
	top: 0;
	height: 100%;
	width: 80%;
	background-color: blue;
}

.SpielfeldAdditions-notausgang-bgDiv {
	position: absolute;
	left: 10%;
	top: 0;
	height: 90%;
	width: 80%;
}

.notausgang-iframe {
	position: relative;
	width: 100%;
	height: 95%;
	left: 0;
	top: 0;
}

.notausgang-iframeContainer {
	position: relative;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	pointer-events: auto;
}

.notausgang-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 52%;
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
	pointer-events: none;

	animation: notausgang-vorhang 8s ease-in-out forwards;

	z-index: 10;
}

.notausgang-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 52%;
	height: 100%;
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
	pointer-events: none;

	animation: notausgang-vorhang 8s ease-in-out forwards;

	z-index: 10;
}

.notausgang-zurueck {
	position: absolute;
	width: 8%;
	height: 10%;
	left: 2%;
	top: 80%;
	background-color: green;
	clip-path: polygon(
		40% 0%,
		40% 20%,
		100% 20%,
		100% 80%,
		40% 80%,
		40% 100%,
		0% 50%
	);
	cursor: pointer;
	transition: all 1s ease-out;
	z-index: 11;
	animation: notausgang-button 10s ease-in-out forwards;
	p {
		position: absolute;
		left: 60%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-family: Pixel;
		font-size: 0.8em;
	}
	&:hover {
		transform: scale(1.4);
		transition: all 1s ease-out;
	}
}

.notausgang-sound {
	position: absolute;
	width: 6%;
	height: 10%;
	left: 4%;
	top: 88%;
	transform: scale(0.8);
	background-color: yellow;
	clip-path: polygon(
		60% 0%,
		60% 30%,
		0% 30%,
		0% 70%,
		60% 70%,
		60% 100%,
		100% 50%
	);
	cursor: pointer;
	z-index: 11;
	animation: notausgang-button 10s ease-in-out forwards;
	p {
		position: absolute;
		left: 60%;
		top: 50%;
		font-family: Pixel;
		transform: translate(-70%, -50%);

		font-size: 0.8em;
	}
}
</style>
