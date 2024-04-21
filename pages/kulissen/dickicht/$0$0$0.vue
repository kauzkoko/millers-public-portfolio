<template>
	<!-- Webcam -->
	<div class="K000-container">
		<div class="K000-main">
			<DirectionController
				id="K000-dController"
				:noTop="false"
				:noRight="false"
				:noBottom="false"
				:noLeft="false"
			/>
			<Popcorn
				:style="{
					left: random1 + '%',
					top: random2 + '%',
				}"
			/>
			<Popcorn
				id="random-popcorn1"
				:style="{
					left: random3 + '%',
					top: random4 + '%',
					transform: 'scale(0.8)',
				}"
			/>
			<Popcorn
				id="random-popcorn2"
				:style="{
					left: random5 + '%',
					top: random6 + '%',
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
			<InfoMsg
				@InfoMsg-click="dControllerOn()"
              style="
                left: 50%;
                top: 52%;
                width: 40%;
                height: 50%;
                z-index: 20;
                transform: translate(-50%, -70%);
              "
			 >
            	<template v-slot:header>Ims Dickicht</template>
				<template v-slot:info>Hier bist du auf dich alleine gestellt! </br> Herumstöbern lohnt sich, oder auch nicht! </br> Zurück kommst du nur von hier, oder übers Menü. <br>PS: Halt dich vor der wilden Andrea und ihrem frechen Äffchen Stella in Acht!</template>
			</InfoMsg>
			<WanderwegStange
				style="
				left: 20%;
				top: 60%;
				z-index: 3;
				transform: scale(1.2) rotate(10deg);
				"
				@wegweiser-click="goBack()"
			>
				<template v-slot:text>Millers</template>
			</WanderwegStange>
			<div
				v-for="i in 5"
				class="K000-gadget"
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
				class="animate__animated animate__slideInDown K000-wolke1"
				v-bind:style="{
					left: getRandomInt(0, 20) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K000-img2" src="~static/images/objects/wolke1.png" />
			</div>
			<div
				class="animate__animated animate__slideInLeft K000-wolke2"
				v-bind:style="{
					left: getRandomInt(10, 30) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K000-img2" src="~static/images/objects/wolke2.png" />
			</div>
			<div
				class="animate__animated animate__slideInDown K000-wolke3"
				v-bind:style="{
					right: getRandomInt(10, 30) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K000-img2" src="~static/images/objects/wolke1.png" />
			</div>
			<div
				class="animate__animated animate__slideInRight K000-wolke4"
				v-bind:style="{
					right: getRandomInt(0, 20) + '%',
					top: getRandomInt(-10, 0) + '%',
				}"
			>
				<img class="K000-img2" src="~static/images/objects/wolke2.png" />
			</div>
			<div
				class="K000-path"
				v-bind:style="{
					'background-image': 'url(' + pathBgs[getRandomInt(0, 4)] + ')',
				}"
			></div>
			<div
				class="K000-bg"
				v-bind:style="{ 'background-color': 'rgb(' + r + ',' + g + ',' + b + ')' }"
			></div>
			<SpielfeldSlotScaler :scale="0.25">
				<template v-slot:content>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";

export default {
	data() {
		return {
			howManyPopcorn: getRandomInt(1, 4),
			random1: 0,
			random2: 0,
			random3: -200,
			random4: -200,
			random5: -200,
			random6: -200,
			gadgetClass: "animate__animated animate__infinite K000-img",
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
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zoobackground.sound.value._loop = true
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
		instructionGO: function () {
      		document.getElementById("K000-instruction").style.display = "none";
			document.getElementById("K000-wegweiser").style.display = "initial";
			document.getElementById("K000-wegweiser2").style.display = "initial";
    	},
		goBack: function () {
			this.$router.push({ path: "/kulissen/start" });
		},
		dControllerOn: function () {
			document.getElementById("K000-dController").style.display = "initial";
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes K000-path {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes K000-inst {
    0% {
        top: -120%;
    }
    100% {
      top: 26%;
    }
  }

//classes container + grid

.K000-container {
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

.K000-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	animation-name: K000-path;
	animation-duration: 3s;

	z-index: 0;
	cursor: url("/images/icons/walkin.png"), auto;
}

.K000-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

#K000-instruction {
    position: absolute;
    width: 45%;
    height: 35%;
    left: 50%;
    top: 26%;
    transform: translate(-50%, 0);
    background-color: MediumSlateBlue;
    // border: white solid;
    border-radius: 50%;
    filter: drop-shadow(0 0 3rem MediumSlateBlue); 

    animation-name: K000-inst;
    animation-duration: 8s;
    transition: all 0.2s ease-out;

    z-index: 10;
  }

  .K000-x {
    position: absolute;
    width: 7%;
    left: 50%;
    top: 2%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 1.5em;
    text-align: center;
    border: solid white;
    border-radius: 50%;
    cursor: pointer;
  }

  .K000-h {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 15%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 3em;
    text-align: center;
  }

  .K000-t {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 0);
    color: white;
    font-size: 1.5em;
    text-align: center;
  }

.K000-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	// background-color: rgb(100,100,100);

	z-index: 1;
	pointer-events: none;
}

.K000-path {
	position: absolute;
	width: 100%;
	height: 90%;
	left: 0;
	top: 0;
	background-image: url("~static/images/textures/stone1.jpg");
	background-size: 300px;
	clip-path: polygon(
		45% 0%,
		41% 5%,
		38% 11%,
		37% 20%,
		37% 30%,
		39% 37%,
		45% 46%,
		39% 46%,
		32% 40%,
		26% 35%,
		17% 34%,
		7% 37%,
		0% 48%,
		0% 66%,
		2% 69%,
		9% 75%,
		14% 78%,
		26% 77%,
		32% 76%,
		37% 68%,
		40% 64%,
		40% 69%,
		38% 73%,
		36% 78%,
		32% 87%,
		37% 100%,
		48% 100%,
		51% 95%,
		57% 89%,
		60% 84%,
		61% 79%,
		61% 68%,
		59% 61%,
		63% 63%,
		67% 69%,
		74% 74%,
		80% 77%,
		87% 79%,
		94% 83%,
		100% 76%,
		100% 53%,
		95% 44%,
		89% 35%,
		82% 31%,
		75% 32%,
		69% 35%,
		65% 46%,
		61% 48%,
		60% 35%,
		65% 29%,
		68% 18%,
		67% 11%,
		63% 5%,
		56% 0%
	);

	z-index: 2;
	pointer-events: none;
}

.K000-gadget {
	position: absolute;
	width: 6%;
	height: 6%;
	z-index: 3;
	cursor: pointer;
}

.K000-wolke1 {
	position: absolute;
	width: 20%;
	height: 34%;
	pointer-events: none;

	z-index: 5;
}

.K000-wolke2 {
	position: absolute;
	width: 15%;
	height: 30%;
	pointer-events: none;

	z-index: 4;
}

.K000-wolke3 {
	position: absolute;
	width: 18%;
	height: 30%;
	transform: scaleX(-1);
	pointer-events: none;

	z-index: 4;
}

.K000-wolke4 {
	position: absolute;
	width: 20%;
	height: 34%;
	transform: scaleX(-1);
	pointer-events: none;

	z-index: 5;
}

.K000-img2 {
	position: relative;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	pointer-events: none;
}

.K000-img {
	position: relative;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	cursor: pointer;
}

#K000-dController {
	display: none;
}
</style>
