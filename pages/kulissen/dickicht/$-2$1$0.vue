<template>
	<!-- Webcam -->
	<div class="K-210-container">
		<div class="K-210-main">
			<DirectionController
				:noTop="false"
				:noRight="false"
				:noBottom="false"
				:noLeft="true"
			/>
			<Popcorn
				id="random-popcorn1"
				:style="{
					left: random1 + '%',
					top: random2 + '%',
					transform: 'scale(0.8)',
				}"
			/>
			<Popcorn
				id="random-popcorn2"
				:style="{
					left: random3 + '%',
					top: random4 + '%',
					transform: 'scale(0.8)',
				}"
			/>
			<Popcorn
				id="random-popcorn3"
				:style="{
					left: random5 + '%',
					top: random6 + '%',
					transform: 'scale(0.8)',
				}"
			/>
			<div
				v-for="i in 5"
				class="K-210-gadget"
				v-bind:style="{
					left: getRandomInt(10, 90) + '%',
					top: getRandomInt(10, 80) + '%',
				}"
			>
				<img
					v-bind:class="[gadgetClass, animClasses[getRandomInt(0, 8)]]"
					:src="gadgets[getRandomInt(0, 9)]"
					@click="consoli()"
				/>
			</div>
			<div
				class="animate__animated animate__slideInDown K-210-wolke1"
				v-bind:style="{
					left: getRandomInt(0, 20) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K-210-img2" src="~static/images/objects/wolke1.png" />
			</div>
			<div
				class="animate__animated animate__slideInLeft K-210-wolke2"
				v-bind:style="{
					left: getRandomInt(10, 30) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K-210-img2" src="~static/images/objects/wolke2.png" />
			</div>
			<div
				class="animate__animated animate__slideInDown K-210-wolke3"
				v-bind:style="{
					right: getRandomInt(10, 30) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K-210-img2" src="~static/images/objects/wolke1.png" />
			</div>
			<div
				class="animate__animated animate__slideInRight K-210-wolke4"
				v-bind:style="{
					right: getRandomInt(0, 20) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K-210-img2" src="~static/images/objects/wolke2.png" />
			</div>
			<div
				class="K-210-path"
				v-bind:style="{
					'background-image': 'url(' + pathBgs[getRandomInt(0, 4)] + ')',
				}"
			></div>
			<div
				class="K-210-bg"
				v-bind:style="{ 'background-color': 'rgb(' + r + ',' + g + ',' + b + ')' }"
			></div>
			<SpielfeldSlotScaler :scale="0.25">
				<template v-slot:content> </template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";

export default {
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zoobackground.sound.value._loop = true;
			this.$sounds.zoobackground.play();
		}, 500);
		if (this.howManyPopcorn == 1) {
			this.random1 = getRandomInt(10, 90);
			this.random2 = getRandomInt(10, 90);
		} else if (this.howManyPopcorn == 2) {
			this.random1 = getRandomInt(10, 90);
			this.random2 = getRandomInt(10, 90);
			this.random3 = getRandomInt(10, 90);
			this.random4 = getRandomInt(10, 90);
		} else if (this.howManyPopcorn == 3) {
			this.random1 = getRandomInt(10, 90);
			this.random2 = getRandomInt(10, 90);
			this.random3 = getRandomInt(10, 90);
			this.random4 = getRandomInt(10, 90);
			this.random5 = getRandomInt(10, 90);
			this.random6 = getRandomInt(10, 90);
		}
	},
	data() {
		return {
			howManyPopcorn: getRandomInt(1, 4),
			random1: 0,
			random2: 0,
			random3: -200,
			random4: -200,
			random5: -200,
			random6: -200,
			gadgetClass: "animate__animated animate__infinite K-210-img",
			animClasses: [
				"animate__bounce",
				"animate__heartBeat",
				"animate__flip",
				"animate__rubberBand",
				"animate__swing",
				"animate__tada",
				"animate__jello",
				"animate__wobble",
			],
			gadgets: [
				"/images/objects/heart.png",
				"/images/objects/schoggihase.png",
				"/images/objects/dog.png",
				"/images/objects/wolf.png",
				"/images/objects/frog.png",
				"/images/objects/rhino.png",
				"/images/objects/lion.png",
				"/images/objects/pig.png",
				"/images/objects/elephant.png",
			],
			pathBgs: [
				"/images/textures/stone1.jpg",
				"/images/textures/snow.jpg",
				"/images/textures/grass.jpg",
				"/images/textures/dirt.jpg",
			],
			getSounds: [
				"sheep",
				"dog",
				"lion",
				"elephant",
				"pig",
				"frog",
				"lion2",
				"rhino",
				"wolf",
			],
			r: getRandomInt(50, 255),
			g: getRandomInt(50, 255),
			b: getRandomInt(50, 255),
		};
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		// randoSounds: function () {
		// 	let sfx = this.randoSounds[getRandomInt(0,1)]
		// 	$sounds.sfx.play({ interrupt: true })
		// },
		picker: function () {
			var chosenNumber = Math.floor(Math.random() * this.getSounds.length);
			this.chosenSound = $sounds.this.getSounds[chosenNumber].play({
				interrupt: true,
			});
		},
		consoli: function () {
			let sfx = getRandomInt(0, 9);

			if (sfx == 0) {
				this.$sounds.sheep.play({ interrupt: true });
			}
			if (sfx == 1) {
				this.$sounds.dog.play({ interrupt: true });
			}
			if (sfx == 2) {
				this.$sounds.lion.play({ interrupt: true });
			}
			if (sfx == 3) {
				this.$sounds.frog.play({ interrupt: true });
			}
			if (sfx == 4) {
				this.$sounds.pig.play({ interrupt: true });
			}
			if (sfx == 5) {
				this.$sounds.frog.play({ interrupt: true });
			}
			if (sfx == 6) {
				this.$sounds.lion2.play({ interrupt: true });
			}
			if (sfx == 7) {
				this.$sounds.rhino.play({ interrupt: true });
			}
			if (sfx == 8) {
				this.$sounds.wolf.play({ interrupt: true });
			}
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes K-210-path {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

//classes container + grid

.K-210-container {
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

.K-210-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	animation-name: K-210-path;
	animation-duration: 3s;

	z-index: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

.K-210-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.K-210-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	// background-color: rgb(100,100,100);

	z-index: 1;
	pointer-events: none;
}

.K-210-path {
	position: absolute;
	width: 100%;
	height: 90%;
	left: 0;
	top: 0;
	background-image: url("~static/images/textures/stone1.jpg");
	background-size: 300px;
	clip-path: polygon(
		7% 100%,
		11% 88%,
		18% 74%,
		17% 60%,
		12% 50%,
		10% 37%,
		13% 26%,
		16% 17%,
		12% 6%,
		11% 0%,
		32% 0%,
		31% 7%,
		32% 13%,
		35% 18%,
		38% 24%,
		36% 34%,
		33% 44%,
		44% 39%,
		56% 35%,
		65% 37%,
		75% 43%,
		100% 37%,
		100% 73%,
		77% 69%,
		72% 63%,
		56% 60%,
		46% 63%,
		36% 66%,
		35% 76%,
		32% 84%,
		28% 91%,
		26% 100%
	);

	z-index: 2;
	pointer-events: none;
}

.K-210-gadget {
	position: absolute;
	width: 6%;
	height: 6%;
	z-index: 3;
	cursor: pointer;
}

.K-210-wolke1 {
	position: absolute;
	width: 20%;
	height: 34%;
	pointer-events: none;

	z-index: 5;
}

.K-210-wolke2 {
	position: absolute;
	width: 15%;
	height: 30%;
	pointer-events: none;

	z-index: 4;
}

.K-210-wolke3 {
	position: absolute;
	width: 18%;
	height: 30%;
	transform: scaleX(-1);
	pointer-events: none;

	z-index: 4;
}

.K-210-wolke4 {
	position: absolute;
	width: 20%;
	height: 34%;
	transform: scaleX(-1);
	pointer-events: none;

	z-index: 5;
}

.K-210-img2 {
	position: relative;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	pointer-events: none;
}

.K-210-img {
	position: relative;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	cursor: pointer;
}
</style>
