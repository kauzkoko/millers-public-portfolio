<template>
	<!-- vorem millers -->
	<div class="vorMillers-container">
		<div class="vorMillers-main">
			<SpielfeldSlotScaler :scale="0.4">
				<template v-slot:content>
				<Eyes
					style="
						position: fixed;
						top: 0;
						left: 50vw;
						transform: translate(-50%, 0);
						width: 12vh;
						height: 12vh;
						z-index: 100;
					"
					seil="40px"
				/>
					<WanderwegStange
						class="vorMillers-wanderweg"
						style="
							left: 2%;
							top: 55%;
							z-index: 10;
							transform: scale(1.2) rotate(-10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<PosterRahmen
						poster="/images/millers/object/spielplan.jpg"
						class="vorMillers-posterRahmen"
						style="left: 35%; z-index: 1; transform: scale(1.2)"
						@poster-click="toggleSpielplan()"
					>
					</PosterRahmen>
					<PosterRahmen
						poster="/images/millers/object/millers_freunde.jpg"
						class="vorMillers-posterRahmen"
						style="left: 20%; z-index: 1; transform: scale(1.2)"
						@poster-click="toggleFreunde()"
					>
					</PosterRahmen>
					<div class="SpielfeldAdditions-vorMillers-path"></div>
					<div
						class="vorMillers-millers"
						@mouseover="$sounds.jazz2short.play({ interrupt: true })"
						@click="tuersteherAuf()"
					></div>
					<Tuersteher
						class="vorMillers-tuersteher"
						@tuersteher-click="tuersteherAuf()"
					/>
					<div class="vorMillers-wolke1">
						<img class="vorMillers-img" src="/images/objects/wolke1.png" />
					</div>
					<div class="vorMillers-wolke2">
						<img class="vorMillers-img" src="/images/objects/wolke2.png" />
					</div>
					<div class="vorMillers-wolke3">
						<img class="vorMillers-img" src="/images/objects/wolke1.png" />
					</div>
					<div class="vorMillers-wolke4">
						<img class="vorMillers-img" src="/images/objects/wolke2.png" />
					</div>
					<div v-show="spielplan" id="vorMillers-spielplan">
						<div id="vorMillers-spielplanClose">
							<p @click="toggleSpielplan()">Zurück</p>
						</div>
						<iframe
							id="vorMiller-spielplanifr"
							src="https://www.millers.ch/spielplan"
						></iframe>
					</div>
					<div v-show="freunde" id="vorMillers-freunde">
						<div id="vorMillers-freundeClose">
							<p @click="toggleFreunde()">Zurück</p>
						</div>
						<iframe
							id="vorMiller-freundenifr"
							src="https://www.millers.ch/danke#c2632"
						></iframe>
					</div>
					<div v-if="tuersteher" id="vorMillers-tuersteher-question">
						<div id="vorMillers-tuersteherClose">
							<p @click="tuersteherZu()">Zurück</p>
						</div>
						<div id="vorMillers-tuersteher-sprech">
							<div>
								<p>
									Willkommen im Millers!<br> Keine Bange, ich verdrück höchstens mal drei
									vier Bananen. Und ich hab was gegen Kulturbanausen... Los, zeig mir deinen Grips!
									<br />
									<p style="text-align: center; text-decoration: underline; margin-top: 8px;"
									>{{fragen[randomFrage]}}</p>
								</p>
							</div>
							<img src="/images/bots/tuersteher_kopf.png" />
							<p v-if="!bestechenNein" id="vorMillers-bestechen" @click="bestechen()">Mit 20 Popcorn bestechen</p>
							<p v-if="bestechenNein" id="vorMillers-bestechen">Nono, da brauchts schon ein Bitzeli mehr..</p>
						</div>
						<div id="vorMillers-avatar-sprech">
							<div>
								<div>
									<input type="radio" id="antwort1" name="frage" value="0" v-model="antwort">
									<label for="antwort1">{{antworten[randomFrage][0]}}</label><br>
									<input type="radio" id="antwort2" name="frage" value="1" v-model="antwort">
									<label for="antwort2">{{antworten[randomFrage][1]}}</label><br>
									<input type="radio" id="antwort3" name="frage" value="2" v-model="antwort">
									<label for="antwort3">{{antworten[randomFrage][2]}}</label>
								</div>
							</div>
							<img :src="getHeads[getMeHeadIndex].mainUrl" />
						</div>
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
			spielplan: false,
			tuersteher: false,
			freunde: false,
			bestechenNein: false,
			randomFrage: 0,
			antwort: "",
			fragen: ["Wieso soll mensch im Theater nicht pfeifen?","Wann wurde das Millers gegründet?", "Du wünschst einer Schauspieler*in Glück für die Premiere, was sagst du?", "Auf Wunsch, oder auch sonst, kreiert die Millers Bar für jede auftretende Künstler*in einen eigenen Signature-Drink, den es am Abend des Auftritts zu geniessen gibt.", "Das Millers war früher...", "Auf einer Bühne dürfen niemals grüne Schuhe getragen werden, gell?", "Wie wünschst du jemanden Glück für die Premiere?", "Ein Spuckritual...", "Klatschen nach der Generalprobe bringt Unglück!", "Wer sich im Theater falsch verhält, (d.h. gegen die ungeschriebenen Regeln für gutes Gelingen verstösst), muss dreimal um das Theater herumgehen und die Theatergeister nochmals um Einlass bitten."],
			antworten: [["weil es die Lippen vor dem Auftritt verkrampft und drum zu mehr Versprechern kommt.", "weil pfeifen früher ein Warnsignal war.", "weil das bedeutet, dass das Publikum die Schauspieler*innen sonst auspfeifen und -buhen wird."],  ["Da war doch auch Tschernobyl, also im Jahr 1986", "Da war ich eben noch in der DDR Ferien machen, also im Jahr 1989", "2022"], ["Toi toi toi", "Hey, mach’s guet!", "Guten Flug!"], ["Soweit kommts noch!", "Ehrensache", "Bar? Welche Millers Bar?"], ["Der Fitnessraum des Müllers Schwarzenegger.", "Der Mehl-Kühlraum der Mühle Tiefenbrunnen.", "Der Tresor der reichen Mühle Tiefenbrunnen"], ["Das weiss ja jedes Kind!", "Hä?", "Stimmt, aber nur in Stücken, in denen ein Bischof vorkommt"], ["He, Danke! Meganett.", "Selber!", "Mhm… Wird schon schiefgehen."],["Vor einer Premiere spuckt mensch sich dreimal über die linke Schulter.", "Vor einer Premiere spuckt mensch sich dreimal über die rechte Schulter.", "Vor einer Premiere spuckt mensch sich dreimal ins Gesicht!"],["Yup.", "Was für ein Unsinn!", "Das wäre gemein, weil einige Schauspieler das vielleicht nicht wissen und dann verunsichert wären. Drum falsch."],["Es gibt keine Geister.", "Im Jumbo gibt's Fischkleister.", "Stimmt, aber wenn das Gebäude zu gross ist, darf mensch sich auch dreimal um die eigene Achse drehen."]],
			rAntworten: [1, 1, 0, 1, 1, 1, 2, 0, 0, 2],
		}
	},
	watch: {
		antwort() {
			if (parseInt(this.antwort) === this.rAntworten[this.randomFrage]) {
				this.$router.push({ path: "/kulissen/millers/foyer" });
			} else {
				this.tuersteher = false
				this.antwort = ""
			}
		},
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	mounted() {
		this.randomFrage = getRandomInt(0, 10)
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "11", "0", "111"]);
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		};
		setTimeout(() => {
			this.$sounds.zoobackground.sound.value._loop = true
			this.$sounds.zoobackground.play();
		}, 1000);

	},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getPopcorn: "inventory/getPopcorn"
		}),
	},
	methods: {
		bestechen() {
			if (this.getPopcorn >= 20) {
				this.$store.commit('inventory/SET_POPCORN', this.getPopcorn-20)
				this.$router.push({ path: "/kulissen/millers/foyer" });
			} else {
				this.bestechenNein = true;
			}
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/start" });
		},
		toggleSpielplan() {
			this.spielplan = !this.spielplan
		},
		toggleFreunde() {
			this.freunde = !this.freunde
		},
		tuersteherAuf() {
			this.tuersteher = true;
		},
		tuersteherZu() {
			this.tuersteher = false;
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes vorMillers-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes vorMillers-millers {
	0% {
		top: -100%;
	}
	100% {
		top: 0;
	}
}

@keyframes vorMillers-poster {
	0% {
		top: -100%;
	}
	100% {
		top: 32%;
	}
}

@keyframes vorMillers-wander {
	0% {
		left: -50%;
	}
	100% {
		left: 2%;
	}
}

@keyframes vorMillers-wolke1 {
	0% {
		left: -50%;
	}
	100% {
		left: 2%;
	}
}

@keyframes vorMillers-wolke2 {
	0% {
		top: -50%;
	}
	100% {
		top: -15%;
	}
}

@keyframes vorMillers-wolke3 {
	0% {
		right: -50%;
	}
	100% {
		right: 2%;
	}
}

@keyframes vorMillers-wolke4 {
	0% {
		top: -50%;
	}
	100% {
		top: -10%;
	}
}

//classes container + grid

.vorMillers-container {
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

.vorMillers-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.vorMillers-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.SpielfeldAdditions-vorMillers-path {
	position: absolute;
	width: 100%;
	height: 30%;
	left: 0;
	top: 70%;
	background-image: url("/images/textures/stone1.jpg");
	background-size: 100px;
	clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);

	animation-name: vorMillers-path;
	animation-duration: 6s;

	z-index: 2;
	cursor: url("/images/icons/walkin.png"), auto;
}

.vorMillers-millers {
	position: absolute;
	width: 50%;
	height: 70%;
	left: 50%;
	top: 0%;
	background-image: url("~static/images/objects/millers.png");
	background-size: 100% auto;
	background-repeat: no-repeat;
	cursor: pointer;

	animation-name: vorMillers-millers;
	animation-duration: 4s;

	z-index: 1;
}

.vorMillers-tuersteher {
	animation-name: vorMillers-path;
	animation-duration: 8s;
}

.vorMillers-tuersteher:hover {
	cursor: pointer;
}

.vorMillers-wolke1 {
	position: absolute;
	width: 30%;
	height: 45%;
	left: 2%;
	top: -15%;

	animation-name: vorMillers-wolke1;
	animation-duration: 4s;

	z-index: 5;
	pointer-events: none;
}

.vorMillers-wolke2 {
	position: absolute;
	width: 25%;
	height: 40%;
	left: 15%;
	top: -15%;

	animation-name: vorMillers-wolke2;
	animation-duration: 4s;
	transition: all 0.2s ease-out;

	z-index: 4;
	pointer-events: none;
}

.vorMillers-wolke3 {
	position: absolute;
	width: 20%;
	height: 35%;
	right: 2%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: vorMillers-wolke3;
	animation-duration: 4s;

	z-index: 4;
	pointer-events: none;
}

.vorMillers-wolke4 {
	position: absolute;
	width: 20%;
	height: 30%;
	right: 10%;
	top: -10%;
	transform: scaleX(-1);

	animation-name: vorMillers-wolke4;
	animation-duration: 3s;
	transition: all 1s ease-out;

	z-index: 5;
	pointer-events: none;
}

.vorMillers-img {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}

#vorMillers-spielplan {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 400;
	transition: all 1s ease-out;
}

#vorMillers-spielplanClose {
	position: absolute;
	width: 50%;
	left: 25%;
	top: 2%;
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

#vorMiller-spielplanifr {
	position: relative;
	width: 50%;
	height: 80%;
	top: 10%;
	left: 25%;
	border: none;
}

#vorMillers-freunde {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 400;
	transition: all 1s ease-out;
}

#vorMillers-freundeClose {
	position: absolute;
	width: 50%;
	left: 25%;
	top: 2%;
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

#vorMiller-freundenifr {
	position: relative;
	width: 50%;
	height: 80%;
	top: 10%;
	left: 25%;
	border: none;
}

#vorMillers-tuersteher-question {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 400;
	transition: all 1s ease-out;
}

#vorMillers-tuersteherClose {
	position: absolute;
	width: 50%;
	right: -20%;
	top: 20%;
	border-radius: 50%;
	p {
		text-decoration: underline;
		top: 2%;
		font-family: Universalis;
		font-size: 1.8vw;
		color: white;
		cursor: pointer;
	}
}

#vorMillers-tuersteher-sprech {
	div {
		position: absolute;
		top: 10%;
		left: 30%;
		width: 35%;
		height: 35%;
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
	img {
		position: absolute;
		top: 20%;
		left: 15%;
		width: 20%;
		transform: rotate(-20deg) scaleX(-1);
	}
	#vorMillers-bestechen {
		font-family: Universalis;
		color: white;
		text-decoration: underline;
		font-size: 1.8vw;
		position: absolute;
		top: 50%;
		left: 15%;
		z-index: 10000;
	}
}

#vorMillers-avatar-sprech {
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
			0% 0%,
			100% 0%,
			100% 75%,
			75% 75%,
			75% 100%,
			50% 75%,
			0% 75%
		);
		padding: 10px;
		font-family: Universalis;	

		div {
			margin-top: 10px;
			width: 90%;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);

			input[type='radio'], label {
				padding: 0;
				margin: 0;
				outline: none;
				font-size: 1.2vw;
				font-family: Universalis;
				border: none;
				&:focus {
					border: 0;
				}
			}

			select {
				padding: 0;
				margin: 0;
				margin-left: -2px;
				//background: green;
				background-image: url("/images/textures/snow.jpg");
				text-decoration: underline;
				outline: none;
				font-size: 1.2vw;
				font-family: Universalis;
				border: none;
				width: 100%;
				&:focus {
					border: 0;
				}
			}

			option {
				font-family: Universalis;
				text-align: center;
				padding: 0;
			}

			p {
				font-size: 1.2vw;
			}
		}
	}

	#vorMillers-antwort {
		position: absolute;
		top: 80%;
		left: 70%;
	}

	img {
		position: absolute;
		top: 60%;
		left: 70%;
		width: 20%;
		transform: rotate(20deg);
	}
}

.vorMillers-posterRahmen {
	top: 32%;
	animation-name: vorMillers-poster;
	animation-duration: 4s;
}

.vorMillers-wanderweg {
	animation-name: vorMillers-wander;
	animation-duration: 4s;
}

@media screen and (min-width: 1000px) and (max-width: 1300px) {
	.vorMillers-posterRahmen {
		top: 25%;
	}

	#vorMillers-avatar-sprech {
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
			0% 0%,
			100% 0%,
			100% 75%,
			75% 75%,
			75% 100%,
			50% 75%,
			0% 75%
		);
		padding: 10px;
		font-family: Universalis;	

		div {
			margin-top: 10px;
			width: 90%;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			p {
				font-size: 1vw;
			}
		}
	}
}
}
</style>
