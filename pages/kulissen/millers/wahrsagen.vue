<template v-slot:empty>
	<!-- Tamara -->
	<div class="tamara-container">
		<!-- Main -->
		<div class="tamara-main">
			<!-- Kulisse -->
			<WanderwegStange
				class="backstage-wanderweg"
				style="left: 2%; top: 75%; z-index: 10; transform: scale(1.2) rotate(10deg)"
				@wegweiser-click="goBack()"
			>
				<template v-slot:text>Zurück</template>
			</WanderwegStange>
			<InfoMsg
				style="
					left: 50%;
					top: 50%;
					width: 40%;
					height: 60%;
					z-index: 3;
					transform: translate(-50%, -50%);
				"
				@InfoMsg-click="instructionGO()"
			>
				<template v-slot:header>Weisheiten mit Jelena</template>
				<template v-slot:info
					>Jelena aka Tamara Cantieni hat eine ganz spezielle Gabe.
					Mit Hilfe ihrer Glaskugel sieht sie deine Zukunft direkt vor ihrem inneren
					Auge. <br /><br />Sie teilt dir Ihre Erkenntnisse gerne mit. <br />Nur
					nicht ganz gratis!</template
				>
			</InfoMsg>
			<div class="tamara-tamaraback"></div>
			<div class="tamara-wahr">
				<img
					class="tamara-img"
					id="tamara-main"
					v-bind:src="'/images/tamara/' + tamaraImg[tamara]"
				/>
				<img
					class="tamara-img"
					id="tamara-cutout"
					v-bind:src="'/images/tamara/' + tamaraImgCutout[tamara]"
				/>
				<img
					class="tamara-img"
					id="tamara-geld"
					src="/images/tamara/tamara_geld.png"
					v-on:click="giveMoney()"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		this.$sounds.tamara_intro.play();
	},
	data() {
		return {
			tamaraTalking: false,
			tamaraExplain: true,
			tamaraImg: ["tamaramoney.png", "tamaratipp.png"],
			tamaraImgCutout: ["tamaramoney_cutout.png", "tamaratipp_cutout.png"],
			tamara: 1,
		};
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	computed: {
		...mapGetters({
        getPopcorn: "inventory/getPopcorn",
			  getBeers: "inventory/getBeers",
		}),
	},
	mounted() {
		document.getElementById("tamara-cutout").style.webkitAnimationPlayState =
			"paused";
	},
	watch: {},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
    	giveMoney: function () {
			this.$anime({
					targets: "#tamara-geld",
					keyframes: [
						{ left: '24%', duration: 500 },
						{ left: '60%', duration: 500 },
					],
			});
			setTimeout(() => this.checkMoney(), 450);
		},
		checkMoney: function () {
			if (
					this.tamaraTalking === false &&
					this.tamaraExplain === false &&
					this.getPopcorn >= 5 
				){
					let rando = this.getRandomInt(0, 12);
					this.$store.commit("inventory/SET_POPCORN", this.getPopcorn-5)
					this.tamara = 1;
					if (rando == 0) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp1.play();
					setTimeout(() => this.tamara = 0, 8000);
					setTimeout(() => this.tamaraTalking = false, 8000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 8000);
					}
					if (rando == 1) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp2.play();
					setTimeout(() => this.tamara = 0, 7000);
					setTimeout(() => this.tamaraTalking = false, 7000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 7000);
					}
					if (rando == 2) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp3.play();
					setTimeout(() => this.tamara = 0, 6000);
					setTimeout(() => this.tamaraTalking = false, 6000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 6000);
					}
					if (rando == 3) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp4.play();
					setTimeout(() => this.tamara = 0, 8000);
					setTimeout(() => this.tamaraTalking = false, 8000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 8000);
					}
					if (rando == 4) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp5.play();
					setTimeout(() => this.tamara = 0, 7000);
					setTimeout(() => this.tamaraTalking = false, 7000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 7000);
					}
					if (rando == 5) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp6.play();
					setTimeout(() => this.tamara = 0, 7000);
					setTimeout(() => this.tamaraTalking = false, 7000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 7000);
					}
					if (rando == 6) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp7.play();
					setTimeout(() => this.tamara = 0, 7000);
					setTimeout(() => this.tamaraTalking = false, 7000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 7000);
					}
					if (rando == 7) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp8.play();
					setTimeout(() => this.tamara = 0, 10000);
					setTimeout(() => this.tamaraTalking = false, 10000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 10000);
					}
					if (rando == 8) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp9.play();
					setTimeout(() => this.tamara = 0, 4000);
					setTimeout(() => this.tamaraTalking = false, 4000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 4000);
					}
					if (rando == 9) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp10.play();
					setTimeout(() => this.tamara = 0, 5000);
					setTimeout(() => this.tamaraTalking = false, 5000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 5000);
					}
					if (rando == 10) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp11.play();
					setTimeout(() => this.tamara = 0, 6000);
					setTimeout(() => this.tamaraTalking = false, 6000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 6000);
					}
					if (rando == 11) {
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
							this.$sounds.tamaraTipp12.play();
					setTimeout(() => this.tamara = 0, 6000);
					setTimeout(() => this.tamaraTalking = false, 6000);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 6000);
					}
				} else if (
					this.tamaraTalking === false &&
					this.tamaraExplain === false &&
					this.getPopcorn <= 4
				){
					this.tamara = 1;
					this.tamaraTalking = true;
					document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "running";
					this.$sounds.tamaraMoney2.play();
					setTimeout(() => this.tamara = 0, 7500);
					setTimeout(() => this.tamaraTalking = false, 7500);
					setTimeout(() => document.getElementById("tamara-cutout").style.webkitAnimationPlayState = "paused", 7000);
		}},
		instructionGO: function () {
			this.tamaraTalking = true;
			this.$sounds.tamaraIntro.play();
			document.getElementById("tamara-cutout").style.webkitAnimationPlayState =
				"running";
			setTimeout(() => this.$sounds.tamaraMoney1.play(), 16000);
			setTimeout(() => (this.tamara = 0), 28000);
			setTimeout(() => (this.tamaraTalking = false), 28000);
			setTimeout(() => (this.tamaraExplain = false), 28000);
			setTimeout(
				() =>
					(document.getElementById("tamara-cutout").style.webkitAnimationPlayState =
						"paused"),
				28000
			);
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes tamara-tamaraback {
	0% {
		top: -120%;
	}
	100% {
		top: 0;
	}
}

@keyframes tamara-wahr {
	0% {
		opacity: 0;
		transform: translate(-50%, 0) scale(0) rotate(360deg);
	}
	100% {
		opacity: 1;
		transform: translate(-50%, 0) scale(1) rotate(0deg);
	}
}

@keyframes tamara-mouth {
	0% {
		top: 0;
	}
	50% {
		top: 1%;
	}
	100% {
		top: 0;
	}
}

@keyframes tamara-inst {
	0% {
		top: -120%;
	}
	100% {
		top: 26%;
	}
}

//classes container + grid

.tamara-container {
	position: absolute;
	display: grid;
	grid-template-areas:
		"main"
		"menu";
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 150px;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
	overflow: hidden;
}

.tamara-main {
	position: relative;
	grid-area: main;
	width: 100%;
	height: 100%;
	background-color: black;

	z-index: 0;
}

.tamara-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;
	background-color: black;

	z-index: 0;
}

// instruction

#tamara-instruction {
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

	animation-name: tamara-inst;
	animation-duration: 8s;
	transition: all 0.2s ease-out;

	z-index: 5;
}

.tamara-x {
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

.tamara-h {
	position: absolute;
	width: 100%;
	left: 50%;
	top: 15%;
	transform: translate(-50%, 0);
	color: white;
	font-size: 3em;
	text-align: center;
}

.tamara-t {
	position: absolute;
	width: 80%;
	left: 50%;
	top: 40%;
	transform: translate(-50%, 0);
	color: white;
	font-size: 1.5em;
	text-align: center;
}

//classes main

.tamara-tamaraback {
	position: absolute;
	width: 100%;
	height: 120%;
	left: 0;
	top: 0;
	background-image: url("/images/tamara/tamarabg.png");
	background-size: 100% 100%;

	animation-name: tamara-tamaraback;
	animation-duration: 4s;
	transition: all 0.2s ease-out;

	z-index: 0;
}

.tamara-wahr {
	position: absolute;
	width: 50%;
	height: 85%;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);

	animation-name: tamara-wahr;
	animation-duration: 4s;
	transition: all 0.5s;
}

#tamara-cutout {
	animation-name: tamara-mouth;
	animation-duration: 0.2s;
	animation-iteration-count: infinite;
	transition: all 0.2s ease-out;
}

#tamara-geld {
	position: absolute;
	width: 18%;
	height: auto;
	left: 60%;
	top: 80%;
	transition: all 0.2s ease-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.3);
		transition: all 0.2s ease-out;
	}
}

.tamara-img {
	position: absolute;
	width: 100%;
	height: auto;
	left: 0;
	top: 0;
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
	.tamara-wahr {
	top: 30%;
	}
	#tamara-geld {
	top: 60%;
	}
}

@media screen and (min-width: 1600px) {
	.tamara-wahr {
	top: 0;
	}
	#tamara-geld {
	top: 85%;
	}
}
</style>
