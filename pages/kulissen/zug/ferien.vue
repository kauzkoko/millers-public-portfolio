<template>
	<!-- arth goldau -->
	<div class="ferien-container">
		<div class="ferien-main">
			<SpielfeldSlot>
				<template v-slot:content>
					<div class="ferien-vorhangl"></div>
					<div class="ferien-vorhangr"></div>
					<div class="ferien-back"></div>
					<WanderwegStange
						style="
							left: 15%;
							top: 70%;
							z-index: 3;
							transform: rotate(20deg) scale(0.9);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Cari</template>
					</WanderwegStange>
					<slot name="content"></slot>
					<div v-for="n in 50">
						<MikeWillisNinjaFerien
							v-if="!getMikeWillisNinjaOff"
							style="z-index: 100000"
							@MikeWillisNinja-click="caught()"
						/>
					</div>
					<Popcorn
						v-for="(n, index) in 5"
						:key="index"
						:style="{
							left: '45vw',
							top: '55vh',
							transform: 'scale(1)',
						}"
					/>
				</template>
			</SpielfeldSlot>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "105", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.jazz1.sound.value._loop = true;
			this.$sounds.jazz1.play();
		}, 500);
	},
	methods: {
		caught() {
			this.$store.commit("games/SET_MIKEWILLISNINJACAUGHT", true);
			this.$store.dispatch("games/setMikeWillisNinjaOff");
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/zug/prodoer" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes ferien-vorhang {
	from {
		width: 50%;
	}
	to {
		width: 10%;
	}
}

//classes container + grid

.ferien-container {
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

.ferien-main {
	grid-area: main;
	width: 100%;
	height: 100%;
	cursor: url("/images/icons/walkin.png"), auto;

	z-index: 0;
}

.ferien-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	animation: ferien-millers 4s ease-in-out forwards;

	z-index: 0;
}

//classes main

.ferien-back {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 10%;
	top: 0;
	background-image: url("/images/objects/prodroeinside.png");
	background-size: 80% 100%;
	pointer-events: none;
}

.ferien-zurueck {
	position: absolute;
	width: 10%;
	height: 10%;
	left: 15%;
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
	p {
		position: absolute;
		left: 60%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-family: Pixel;
		font-size: 1em;
	}
	&:hover {
		transform: scale(1.4);
		transition: all 1s ease-out;
	}
}

.ferien-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 10%;
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

	animation: ferien-vorhang 4s ease-in-out forwards;

	z-index: 10;
	pointer-events: none;
}

.ferien-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 10%;
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

	animation: ferien-vorhang 3.8s ease-in-out forwards;

	z-index: 10;
	pointer-events: none;
}
</style>
