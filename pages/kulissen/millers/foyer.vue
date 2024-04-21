<template>
	<SpielfeldCustomDir>
		<template v-slot:content>
			<div class="SpielfeldAdditions-foyer-container">
				<Eyes
					style="
						position: fixed;
						top: 0;
						left: 50vw;
						transform: translate(-50%, 0);
						width: 15vh;
						height: 15vh;
						z-index: 100;
					"
					seil="40px"
				/>
				<Popcorn
					id="random-popcorn1"
					:style="{
						left: random1 + '%',
						top: '48%',
						transform: 'scale(0.4)',
					}"
				/>
				<Popcorn
					id="random-popcorn1"
					:style="{
						left: random2 + '%',
						top: '42%',
						transform: 'scale(0.4)',
					}"
				/>
				<!-- <Popcorn
					id="random-popcorn1"
					:style="{
						left: random3 + '%',
						top: '51%',
						transform: 'scale(0.4)',
					}"
				/> -->
				<Popcorn
					id="random-popcorn1"
					:style="{
						left: random4 + '%',
						top: '44%',
						transform: 'scale(0.4)',
					}"
				/>
				<Popcorn
					id="random-popcorn1"
					:style="{
						left: random5 + '%',
						top: '40%',
						transform: 'scale(0.4)',
					}"
				/>
				<WanderwegStange
					style="left: 0; top: 45%; z-index: 10; transform: scale(0.9) rotate(30deg)"
					@wegweiser-click="goBack()"
				>
					<template v-slot:text>Vor's Millers</template>
				</WanderwegStange>
				<div class="foyer-guest">
					<div class="foyer-guest-icon">
						<img
							id="foyer-guest"
							src="/images/millers/object/rosstisch.png"
							@mouseover="scaleGuest(), $sounds.starwars.play({ interrupt: true })"
							@click="goToGuestbook()"
						/>
					</div>
				</div>
				<div class="foyer-Bar">
					<div
						class="foyer-bar-icon"
						v-on:click="goToBar()"
						@mouseover="$sounds.glass.play({ interrupt: true })"
					>
						<img src="/images/objects/barfg.png" />
					</div>
				</div>
				<div class="foyer-buehne">
					<div class="foyer-buehne-icon">
						<img src="/images/millers/object/millersstage.jpg" />
						<div class="foyer-vorhangl"></div>
						<div class="foyer-vorhangr"></div>
						<div
							class="foyer-vorhang"
							@mouseover="vorhang(), $sounds.vorhang.play()"
							@click="goToStage()"
						></div>
					</div>
				</div>
				<div class="foyer-Notausgang">
					<div class="foyer-Notausgang-icon">
						<img
							src="/images/objects/notausgang.png"
							@click="goToNotausgang()"
							@mouseover="$sounds.alarm.play({ interrupt: true })"
						/>
					</div>
				</div>
				<div class="foyer-chill">
					<div class="foyer-chill-icon">
						<img
							id="foyer-chairs"
							src="/images/objects/lounge1.png"
							@mouseover="scaleChairs(), peops()"
							@mouseleave="$sounds.peops1.pause({ interrupt: false })"
							@click="goToLounge()"
						/>
					</div>
				</div>
				<div class="foyer-wahrsagen">
					<div class="foyer-wahrsagen-icon">
						<img
							src="/images/tamara/tamara.png"
							@click="goToTamara()"
							@mouseover="$sounds.tamaraWelcome.play({ interrupt: true })"
						/>
					</div>
				</div>
				<div class="foyer-wc">
					<div class="foyer-wc-icon">
						<img
							src="/images/new stuff/wctafel.png"
							@mouseover="tafel()"
							@click="goToWC()"
						/>
					</div>
				</div>
				<div class="foyer-separe">
					<div class="foyer-separe-icon">
						<img
							:src="separe"
							@mouseover="openSepare(), $sounds.door.play({ interrupt: true })"
							@mouseleave="closeSepare()"
							@click="goToSepare()"
						/>
					</div>
				</div>
				<div class="SpielfeldAdditions-foyer-path"></div>
			</div>
		</template>
	</SpielfeldCustomDir>
</template>

<script>
export default {
	data() {
		return {
			separe: "/images/objects/separe.png",
			separeClosed: "/images/objects/separe.png",
			separeOpen: "/images/objects/separe_open.png",
			random1: this.getRandomInt(10, 90),
			random2: this.getRandomInt(10, 90),
			random3: this.getRandomInt(10, 90),
			random4: this.getRandomInt(10, 90),
			random5: this.getRandomInt(10, 90),
		};
	},
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "0", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.jazz2.sound.value._loop = true;
			this.$sounds.jazz2.play();
		}, 500);
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/vorMillers" });
		},
		goToGuestbook: function () {
			this.$router.push({ path: "/kulissen/millers/guestbook" });
		},
		goToBar: function () {
			this.$router.push({ path: "/kulissen/millers/bar" });
		},
		goToLounge: function () {
			this.$router.push({ path: "/kulissen/millers/lounge" });
		},
		goToTamara: function () {
			this.$router.push({ path: "/kulissen/millers/wahrsagen" });
		},
		goToWC: function () {
			this.$router.push({ path: "/kulissen/millers/wc" });
		},
		goToStage: function () {
			this.$router.push({ path: "/kulissen/millers/stage" });
		},
		goToNotausgang: function () {
			this.$router.push({ path: "/kulissen/millers/notausgang" });
		},
		goToSepare: function () {
			this.$router.push({ path: "/kulissen/millers/separe" });
		},
		openSepare: function () {
			this.separe = this.separeOpen;
		},
		closeSepare: function () {
			this.separe = this.separeClosed;
		},
		scaleChairs() {
			this.$anime({
				targets: "#foyer-chairs",
				keyframes: [
					{ scale: "1.3", rotate: "20deg", duration: 1000 },
					{ scale: 1, rotate: 0, duration: 300 },
				],
			});
		},
		scaleGuest() {
			this.$anime({
				targets: "#foyer-guest",
				keyframes: [
					{ scale: "1.3", rotate: "-20deg", duration: 1000 },
					{ scale: 1, rotate: 0, duration: 300 },
				],
			});
		},
		vorhang() {
			this.$anime({
				targets: ".foyer-vorhangl",
				keyframes: [
					{ width: 4, duration: 4000 },
					{ width: 171, duration: 2000 },
				],
			});
			this.$anime({
				targets: ".foyer-vorhangr",
				keyframes: [
					{ width: 4, duration: 4000 },
					{ width: 171, duration: 2000 },
				],
			});
		},
		hand() {
			this.$anime({
				targets: ".foyer-wahrsagen",
				keyframes: [
					{ rotate: "1turn", duration: 1000 },
					{ rotate: "0", duration: 0 },
				],
			});
		},
		tafel() {
			this.$sounds.screamwitch3.sound.value._rate = 0.4;
			this.$sounds.screamwitch3.sound.value._volume = 1;

			this.$sounds.screamwitch3.play();
			this.$anime({
				targets: ".foyer-wc",
				keyframes: [
					{ scale: "0.05", duration: 4000, easing: "easeInSine" },
					{ scale: "1", duration: 0 },
				],
			});
		},
		peops() {
			this.$sounds.peops1.sound.value._rate = 1;
			this.$sounds.peops1.sound.value._volume = 1.5;

			this.$sounds.peops1.play({ interrupt: true });
		},
	},
};
</script>

<style lang="scss">
@keyframes foyer-container {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

.SpielfeldAdditions-foyer-container {
	position: absolute;
	display: grid;
	grid-template-areas:
		"guest bar buehne notausgang"
		"chill wahrsagen wc separe";
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #283f4d;
	animation: foyer-container 3s ease-out;
}

.SpielfeldAdditions-foyer-path {
	position: absolute;
	background: black;
	height: 16.5%;
	width: 100%;
	left: 0;
	top: 50%;
	transform: translate(0, -50%);
	background-image: url("/images/textures/teppichsmall.jpg");
	filter: grayscale(100%);
	background-size: 12%;
	cursor: url("/images/icons/walkin.png"), auto;
}

//classes main

.foyer-guest {
	grid-area: guest;
	height: 100%;
	clip-path: polygon(
		0% 100%,
		0% 20%,
		20% 20%,
		20% 10%,
		40% 10%,
		40% 0%,
		60% 0%,
		60% 10%,
		80% 10%,
		80% 20%,
		100% 20%,
		100% 100%
	);
}

.foyer-guest-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/maskenaff.jpg");
	background-size: 20px;

	img {
		margin-top: -5%;
		width: 40%;
		&:hover {
			cursor: pointer;
			transform: translate(-50%, 0) rotate(-180deg) scale(0.8);
			transition: all 0.3s ease-out;
		}
	}
}

.foyer-Bar {
	grid-area: bar;
	height: 100%;
	clip-path: polygon(
		0% 100%,
		0% 20%,
		20% 20%,
		20% 10%,
		40% 10%,
		40% 0%,
		60% 0%,
		60% 10%,
		80% 10%,
		80% 20%,
		100% 20%,
		100% 100%
	);
}

.foyer-bar-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/gatsby.jpg");
	background-size: 300px;
	filter: invert(1);

	img {
		margin-top: 10%;
		filter: invert(1);
		width: 100%;

		&:hover {
			transform: scale(-1);
			cursor: pointer;
		}
	}
}

.foyer-buehne {
	grid-area: buehne;
	height: 100%;
	clip-path: polygon(
		0% 100%,
		0% 20%,
		20% 20%,
		20% 10%,
		40% 10%,
		40% 0%,
		60% 0%,
		60% 10%,
		80% 10%,
		80% 20%,
		100% 20%,
		100% 100%
	);
}

.foyer-buehne-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/gatsby2.jpg");
	background-size: 300px;

	img {
		margin-top: 5%;
		width: 70%;
		height: 52%;

		&:hover {
			cursor: pointer;
		}
	}
}

.foyer-vorhang {
	position: absolute;
	left: 15%;
	top: 25%;
	height: 55%;
	width: 70%;
	background-image: url("/images/objects/vorhangicon.png");
	background-size: 100% 100%;
	z-index: 25;
	&:hover {
		cursor: pointer;
	}
}

.foyer-vorhangl {
	position: absolute;
	left: 15%;
	top: 25%;
	height: 54%;
	width: 40%;
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

	z-index: 20;
	transition: all 2s ease-out;
}

.foyer-vorhangr {
	position: absolute;
	top: 25%;
	right: 15%;
	width: 40%;
	height: 54%;
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

	z-index: 20;
	transition: all 2s ease-out;
}

@keyframes foyer-NotausgangAnim {
	0% {
		transform: translate(0, 0);
	}
	10% {
		transform: translate(10%, 0%);
	}
	20% {
		transform: translate(10%, 10%);
	}
	30% {
		transform: translate(20%, 10%);
	}
	40% {
		transform: translate(20%, 20%);
	}
	50% {
		transform: translate(30%, 20%);
	}
	60% {
		transform: translate(30%, 30%);
	}
	70% {
		transform: translate(40%, 30%);
	}
	80% {
		transform: translate(40%, 40%);
	}
	90% {
		transform: translate(50%, 40%);
	}
	100% {
		transform: translate(50%, 50%);
	}
}

.foyer-Notausgang {
	grid-area: notausgang;
	height: 100%;
	clip-path: polygon(
		0% 100%,
		0% 20%,
		20% 20%,
		20% 10%,
		40% 10%,
		40% 0%,
		60% 0%,
		60% 10%,
		80% 10%,
		80% 20%,
		100% 20%,
		100% 100%
	);
}

.foyer-Notausgang-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/maskenaff.jpg");
	background-size: 60px;

	img {
		width: 80%;
		filter: drop-shadow(-10px -10px 10px black);
		&:hover {
			animation: foyer-NotausgangAnim 2s linear infinite alternate;
			cursor: pointer;
		}
	}
}

.foyer-chill {
	grid-area: chill;
	height: 100%;
	clip-path: polygon(
		100% 0%,
		100% 80%,
		80% 80%,
		80% 90%,
		60% 90%,
		60% 100%,
		40% 100%,
		40% 90%,
		20% 90%,
		20% 80%,
		0% 80%,
		0% 0%
	);
}

.foyer-chill-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/bug.jpg");
	background-size: 100px;

	img {
		width: 80%;
		margin-top: 10%;
		&:hover {
			cursor: pointer;
		}
	}
}

.foyer-wahrsagen {
	grid-area: wahrsagen;
	height: 100%;
	clip-path: polygon(
		100% 0%,
		100% 80%,
		80% 80%,
		80% 90%,
		60% 90%,
		60% 100%,
		40% 100%,
		40% 90%,
		20% 90%,
		20% 80%,
		0% 80%,
		0% 0%
	);
}

.foyer-wahrsagen-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/gatsby.jpg");
	background-size: 400px;

	img {
		width: 60%;
		margin-top: 5%;
		&:hover {
			cursor: pointer;
			transform: scale(0) rotate(360deg);
			transition: all 1s ease-out;
		}
	}
}

.foyer-wc {
	grid-area: wc;
	height: 100%;
	clip-path: polygon(
		100% 0%,
		100% 80%,
		80% 80%,
		80% 90%,
		60% 90%,
		60% 100%,
		40% 100%,
		40% 90%,
		20% 90%,
		20% 80%,
		0% 80%,
		0% 0%
	);
}

.foyer-wc-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-direction: row;
	background-image: url("/images/textures/wctaefer.jpg");
	background-size: 300px;

	img {
		width: 40%;
		margin-top: 8%;
		filter: drop-shadow(-10px -10px 10px black);
		transform: rotate(-10deg);
		&:hover {
			cursor: pointer;
		}
	}
}

.foyer-separe {
	grid-area: separe;
	height: 100%;
	clip-path: polygon(
		100% 0%,
		100% 80%,
		80% 80%,
		80% 90%,
		60% 90%,
		60% 100%,
		40% 100%,
		40% 90%,
		20% 90%,
		20% 80%,
		0% 80%,
		0% 0%
	);
}

.foyer-separe-icon {
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-image: url("/images/millers/texture/bird1.jpg");
	background-size: 200px;

	img {
		width: 65%;
		height: 65%;
		margin-top: 0;
		transform: rotate(7deg);
		&:hover {
			cursor: pointer;
		}
	}
}
</style>
