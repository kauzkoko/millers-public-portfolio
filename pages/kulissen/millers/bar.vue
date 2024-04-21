<template>
	<!-- bar -->
	<div class="bar-container">
		<div class="bar-main">
			<SpielfeldSlotScaler :scale="0.5">
				<template v-slot:content>
					<Adrian @Adrian-click="openadrian()" />
					<img
						@click="goToZukki()"
						id="bar-zukkihund"
						src="/images/zukkihund/zukkisitz.png"
					/>
					<div class="bar-barbg"></div>
					<div class="bar-barfg"></div>
					<div class="SpielfeldAdditions-bar-path"></div>
					<div class="bar-barhockers">
						<img class="bar-barhocker" src="/images/millers/object/barhocker2.png" />
						<img class="bar-barhocker" src="/images/millers/object/barhocker2.png" />
						<img class="bar-barhocker" src="/images/millers/object/barhocker2.png" />
						<img class="bar-barhocker" src="/images/millers/object/barhocker2.png" />
						<img class="bar-barhocker" src="/images/millers/object/barhocker2.png" />
					</div>
					<WanderwegStange
						class="backstage-wanderweg"
						direction="left"
						style="
							left: 5%;
							top: 80%;
							z-index: 10;
							transform: scale(1.2) rotate(-20deg);
						"
						@wegweiser-click="goToWC()"
					>
						<template v-slot:text>Aufs Klo</template>
					</WanderwegStange>
					<WanderwegStange
						class="backstage-wanderweg"
						style="
							left: 2%;
							top: 70%;
							z-index: 9;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Ins Foyer</template>
					</WanderwegStange>
					<WanderwegStange
						class="bar-wanderweg1"
						direction="right"
						style="
							left: 86%;
							top: 65%;
							z-index: 10;
							transform: scale(1.4) rotate(10deg);
						"
						@wegweiser-click="goToLueckentext()"
					>
						<template v-slot:text>Lückentext</template>
					</WanderwegStange>
					<PosterRahmen
						poster="/images/millers/getraenke/getraenke1.jpg"
						rotatePoster="180deg"
						class="bar-posterRahmen"
						style="left: 2%; z-index: 4; transform: scale(1) rotate(180deg)"
						@poster-click="openDrinkList()"
					>
					</PosterRahmen>
					<div class="bar-lamp2" v-on:click="goBack()"></div>
					<div id="bar-adrian-question">
						<div id="bar-adrianClose">
							<p @click="closeadrian()">Zurück</p>
						</div>
						<div id="bar-adrian-sprech">
							<div id="bar-adrianspruch">
								<p>
									{{adrianSpruche[adrianSpruch]}}
									<br />
									<p >Was darfs sein?</p>
									<br />
								</p>
							</div>
							<div id="bar-poppalk">
								<p>
									<br />
									<br />
									<br />
									<p>Schnaps:</p>
									<p>Bier:</p>
									<p>Rosé:</p>
								</p>
							</div>
							<div id="bar-poppreis">
								<p>
									<br />
									<br />
									<br />
									<p>5 Popcorn</p>
									<p>2 Popcorn</p>
									<p>10 Popcorn</p>
								</p>
							</div>
							<img src="/images/bots/adrian_barkeeper.png" />
						</div>
						<div id="bar-avatar-sprech">
							<div>
								<img
									id="bar-schnaps"
									src="/images/millers/object/schnaps.png"
									@click="buySchnaps()"
								/>
								<img
									id="bar-bier"
									src="/images/millers/object/bier.png"
									@click="buyBier()"
								/>
								<img
									id="bar-rose"
									src="/images/millers/object/rose.png"
									@click="buyRose()"
								/>
							</div>
							<img id="bar-avatarhead" :src="getHeads[getMeHeadIndex].mainUrl" />
						</div>
						<div id="bar-keingeld">
							<p>Komm wieder mit mehr Popcorn!</p>
						</div>
					</div>
					<div id="bar-drinklist">
						<div id="bar-drinklistClose">
							<p @click="closeDrinkList()">Zurück</p>
						</div>
						<div id="bar-drinklistPages">
							<img src="/images/millers/getraenke/getraenke1.jpg" />
							<img src="/images/millers/getraenke/getraenke2.jpg" />
							<img src="/images/millers/getraenke/getraenke3.jpg" />
						</div>
					</div>
					<div v-show="drinkOrdered" id="bar-drinkOrdered">
						<video
							ref = "getDrinkVideo"
							@ended="endedPlaying()"
							:src="dogUrl"
							autoplay
						/>
					</div>
				</template>
			</SpielfeldSlotScaler>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import getRandomInt from "~/assets/javascript/helpers.js";
export default {
	data() {
		return {
			adrianSpruch: 0,
			adrianSpruche: [
				'Na, öfters hier?',
				'Endlich wieder ein Besucher!',
				'Du schon wieder?!',
				'Ich will nach Hause!',
				'Mach schnell, die Andern wollen auch noch was!',
				'Ja doch mir gehts ganz gut, danke',
				'Du siehst nach Alkohol aus heute!'
			],
			drinkOrdered: false,
			dogUrl: "/images/drink/getdrink.mp4"
		}
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getPopcorn: "inventory/getPopcorn",
			getSchnaps: "inventory/getSchnaps",
			getBier: "inventory/getBier",
			getRose: "inventory/getRose",
		}),
   },
	mounted() {
		this.adrianSpruch = getRandomInt(1, 7)
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "2", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zueriRed.sound.value._loop = true
			this.$sounds.zueriRed.play();
		}, 500);

	},
	methods: {
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/foyer" });
		},
		goToZukki() {
			this.$sounds.zukki1.sound.value._volume = 2
			this.$sounds.zukki1.play();
			let time = this.$sounds.zukki1.sound.value._duration * 1000
			this.$anime({
			targets: '.bar-barbg',
			borderRadius: '100%',
			easing: 'easeInOutQuad',
			duration: time
			});
			setTimeout(() => {
				this.$router.push({ path: "/kulissen/millers/zukki" });
			}, time);
		},
		goToWC: function () {
			this.$router.push({ path: "/kulissen/millers/wc" });
		},
		goToLueckentext: function () {
			this.$router.push({ path: "/kulissen/millers/lueckentext" });
		},
		openadrian: function () {
			document.getElementById("bar-adrian-question").style.display =
				"initial";
		},
		closeadrian: function () {
			document.getElementById("bar-adrian-question").style.display =
				"none";
		},
		openDrinkList: function () {
			document.getElementById("bar-drinklist").style.display =
				"initial";
		},
		closeDrinkList: function () {
			document.getElementById("bar-drinklist").style.display =
				"none";
		},
		endedPlaying() {
			this.drinkOrdered = false
			this.$refs.getDrinkVideo.load()
		},
		startPlaying() {
				this.drinkOrdered = true
				this.$sounds.dogtalk_1.sound.value._volume = 2
				this.$sounds.dogtalk_1.play()
				this.closeadrian()
		},
		buySchnaps: function () {
			if (this.getPopcorn >= 5) {
				this.$store.commit("inventory/SET_POPCORN", this.getPopcorn-5)
				this.$store.commit("inventory/SET_SCHNAPS", this.getSchnaps+1)
				this.startPlaying()
			} else {
				document.getElementById("bar-adrianspruch").style.display = "none";
				document.getElementById("bar-keingeld").style.display = "initial";
				setTimeout(() => document.getElementById("bar-adrian-question").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-keingeld").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-adrianspruch").style.display = "initial", 3000);
			}
		},
		buyBier: function () {
			if (this.getPopcorn >= 2) {
				this.$store.commit("inventory/SET_POPCORN", this.getPopcorn-2)
				this.$store.commit("inventory/SET_BIER", this.getBier+1)
				this.startPlaying()

			} else {
				document.getElementById("bar-adrianspruch").style.display = "none";
				document.getElementById("bar-keingeld").style.display = "initial";
				setTimeout(() => document.getElementById("bar-adrian-question").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-keingeld").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-adrianspruch").style.display = "initial", 3000);
			}
		},
		buyRose: function () {
			if (this.getPopcorn >= 10) {
				this.$store.commit("inventory/SET_POPCORN", this.getPopcorn-10)
				this.$store.commit("inventory/SET_ROSE", this.getRose+1)
				this.startPlaying()
			} else {
				document.getElementById("bar-adrianspruch").style.display = "none";
				document.getElementById("bar-keingeld").style.display = "initial";
				setTimeout(() => document.getElementById("bar-adrian-question").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-keingeld").style.display = "none", 3000);
				setTimeout(() => document.getElementById("bar-adrianspruch").style.display = "initial", 3000);
			}
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes bar-path {
	0% {
		transform: scale(0) rotate(360deg);
	}
	100% {
		transform: scale(1) rotate(0deg);
	}
}

//classes container + grid

.bar-container {
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
	background-image: url("~static/images/textures/gatsby.jpg");
	background-size: 100px;
	overflow-y: hidden;
}

.bar-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
	animation-name: bar-path;
	animation-duration: 3s;
}

.bar-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

#bar-zukkihund {
	position: absolute;
	width: 7vw;
	left: 37%;
	top: 28%;
	z-index: 3;
	cursor: pointer;

	&:hover {
		transform: scale(1.3) rotate(3deg);
		transition: transform 1s;
	}
}

.bar-barbg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/objects/barbg.jpg");
	background-size: 100% auto;
	background-repeat: round;

	z-index: 1;
	pointer-events: none;
}

.bar-barfg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("~static/images/objects/barfg.png");
	background-size: 100% auto;
	background-repeat: round;

	z-index: 3;
	pointer-events: none;
}

.SpielfeldAdditions-bar-path {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	clip-path: polygon(0% 70%, 100% 70%, 100% 100%, 0 100%);
	cursor: url("/images/icons/walkin.png"), auto;

	z-index: 3;
}

.bar-barhockers {
	position: absolute;
	width: 80%;
	height: 30%;
	left: 10%;
	top: 54%;
	z-index: 3;
	pointer-events: none;
	clip-path: polygon(
		0% 0%,
		100% 0,
		100% 100%,
		0 100%
	);
}

.bar-barhocker {
	position: relative;
	height: 100%;
	margin-left: 10%;
}

.bar-lamp2 {
	position: absolute;
	width: 10%;
	height: 30%;
	right: 2%;
	top: 0;
	background-image: url("~static/images/objects/lamp2.png");
	background-size: 100% auto;
	background-repeat: round;

	transition: all 1s ease-out;

	z-index: 4;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
		transition: all 1s ease-out;
	}
}

#bar-adrian-question {
	display: none;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 400;
	transition: all 1s ease-out;
}

#bar-adrianClose {
	position: absolute;
	width: 50%;
	left: 50%;
	top: 85%;
	border-radius: 50%;
	p {
		text-decoration: underline;
		top: 2%;
		font-family: UniversalisBold;
		font-size: 2em;
		color: white;
		cursor: pointer;
	}
}

#bar-adrian-sprech {
	img {
		position: absolute;
		top: 20%;
		left: 12%;
		width: 35%;
		transform: rotate(-20deg) scaleX(-1);
		clip-path: polygon(
			0% 0%,
			100% 0,
			100% 45%,
			0 45%
		);
	}
}

#bar-adrianspruch {
	position: absolute;
	top: 10%;
	left: 30%;
	width: 30%;
	height: 30%;
	background-color: white;
	clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 75%,
		50% 75%,
		25% 100%,
		25% 75%,
		0% 75%
	);
	transform: scaleX(1);
	font-family: Universalis;
	padding: 10px;
	p {
		font-size: 1.2vw;
	}
}

#bar-poppalk {
	position: absolute;
	top: 10%;
	left: 30%;
	width: 30%;
	height: 30%;
	transform: scaleX(1);
	font-family: Universalis;
	padding: 10px;
	p {
		font-size: 1.3vw;
	}
}

#bar-poppreis {
	position: absolute;
	top: 10%;
	left: 37%;
	width: 30%;
	height: 30%;
	transform: scaleX(1);
	font-family: Universalis;
	padding: 10px;
	p {
		font-size: 1.3vw;
		color: blue;
	}
}

#bar-avatar-sprech {
	&:hover {
		cursor: default;
	}
	& > div {
		position: absolute;
		top: 40%;
		left: 50%;
		width: 30%;
		height: 30%;
		background-color: white;
		clip-path: polygon(
			11% 0%,
			100% 0%,
			100% 75%,
			75% 75%,
			75% 100%,
			50% 75%,
			11% 75%
		);
		padding: 10px;
		font-family: Universalis;
		img {
			position: relative;
			margin-left: 20%;
			bottom: 0%;
			left: 0;
			width: 8%;
			&:hover {
				cursor: pointer;
				transform: scale(1.2) rotate(60deg);
			}
		}	
	}
}

#bar-rose {
	transform: scale(1.4) translate(0,-10%);
}

#bar-avatarhead {
	position: absolute;
	top: 60%;
	left: 70%;
	width: 20%;
	transform: rotate(20deg);
	pointer-events: none;
}

#bar-keingeld {
	display: none;
	position: absolute;
	top: 10%;
	left: 30%;
	width: 30%;
	height: 30%;
	background-color: white;
	clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 75%,
		50% 75%,
		25% 100%,
		25% 75%,
		0% 75%
	);
	p {
		margin-top: 3vh;
		font-family: UniversalisBold;
		font-size: 2.5vw;
		color: red;
		text-align: center;
	}
}

#bar-drinkOrdered {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 100;
    opacity: 1;

	video {
		width: 100%;
	}
}

#bar-drinklist {
	display: none;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 400;
	transition: all 1s ease-out;
}

#bar-drinklistClose {
	position: absolute;
	width: 50%;
	left: 30%;
	top: 87%;
	border-radius: 50%;
	p {
		text-decoration: underline;
		top: 2%;
		font-family: UniversalisBold;
		font-size: 2em;
		color: white;
		cursor: pointer;
	}
}

#bar-drinklistPages {
	position: absolute;
	width: 40%;
	height: 80%;
	top: 5%;
	left: 30%;
	overflow: scroll;
	img {
		position: relative;
		width: 100%;
	}
}

.bar-posterRahmen {
		top: 35%; 
	}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
	.bar-posterRahmen {
		top: 45%; 
	}
}
</style>
