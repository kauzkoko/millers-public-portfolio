<template>
	<div class="Lueckentext-outer">
		<div v-show="false">
			<video v-for="n in 16" :src="'/videos/lueckentext/Yo' + n + '.mp4'" />
			<video v-for="n in 8" :src="'/videos/lueckentext/No' + n + '.mp4'" />
		</div>

		<WanderwegStange
			class="backstage-wanderweg"
			direction="left"
			style="
				position: fixed;
				left: 10%;
				top: 80%;
				z-index: 10;
				transform: scale(1.4) rotate(10deg);
			"
			@wegweiser-click="$router.push({ path: '/kulissen/millers/bar' })"
		>
			<template v-slot:text>An die Bar</template>
		</WanderwegStange>
		<div v-if="nope" class="Lueckentext-reactions" style="background: rgba(120, 10, 10, 1)">
			<div class="Lueckentext-nope">
				<!-- <img src="/images/lueckentext/cat.png" /> -->
				<video
					:src="randomNegativeVideo"
					@ended="endedNope()"
					autoplay
					style="width: 100vw"
					muted
					ref="nopeVideo"
				></video>
			</div>
		</div>
		<div v-if="yes" class="Lueckentext-reactions" style="background: rgba(120, 10, 10, 1)">
			<div class="Lueckentext-nope">
				<!-- <img src="/images/lueckentext/catyes.gif" /> -->
				<video
					:src="randomPositiveVideo"
					@ended="endedYes()"
					autoplay
					style="width: 100vw"
					muted
					ref="yesVideo"
				></video>
			</div>
		</div>

		<div class="Lueckentext-start">
			<p v-if="start">
				Patti Basler und Philippe Kuhn
				<br />finden für einmal die Worte nicht.
			</p>
			<p
				v-if="start"
				@click="vorhangAuf()"
				class="animate__animated animate__swing animate__delay-2s animate__infinite animate__slower"
			>Hilf Ihnen, den Mund wieder voll zu kriegen!</p>
			<div class="Lueckentext-vorhangl" v-show="!gameOver"></div>
			<div class="Lueckentext-vorhangr" v-show="!gameOver"></div>
		</div>
		<div v-if="gameOver" class="Lueckentext-gameOver">
			<img src="/images/lueckentext/cat.png" />
			<p
				style="
					position: fixed;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -100%);
					color: white;
					font-size: 10vh;
					font-family: Universalis;
				"
			>Dini Muetter.</p>
		</div>
		<div v-if="win" class="Lueckentext-reactions" style="background: blue">
			<div class="Lueckentext-nope">
				<video src="/images/lueckentext/win.mp4" autoplay style="width: 100vw"></video>
			</div>
		</div>
		<div
			v-if="!gameOver"
			style="
				position: fixed;
				right: 10vw;
				top: 10vh;
				transform: rotate(20deg);
				z-index: 1;
			"
		>
			<button
				@click="gameOver = true"
				style="
					background-image: url('/images/textures/wurm.jpg');
					margin-left: 10px;
					transform: translate(0, -20%);
					font-size: 12px;
					height: 20px;
					border: none;
					border-radius: 40%;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
					color: white;
				"
			>Bring dich schon jetzt um</button>
			<img src="/images/lueckentext/piranha.png" style="width: 30px; transform: translate(0, 10px)" />
		</div>
		<div v-if="!gameOver" class="Lueckentext-verzierung"></div>

		<div v-if="!gameOver" class="Lueckentext-container">
			<h1>
				Kannst du reimen? Sicher? Versuch es!
				<br />Und wenn’s ungereimt ist: Verfluch es!
				<br />
				<span style="font-size: 20px; background: transparent">Nach 5 Versuchen bist du tot!</span>
			</h1>
			<p>
				Am Jazz-Slam auf den Brettern des Millers
				<br />Erzählt die Poetin von den Rettern
				<select v-model="vKillers" v-show="!dKillers">
					<option>des Killers</option>
					<option>Maxim Billers</option>
					<option>deiner Mutter</option>
					<option>des Stillers</option>
					<option>42</option>
					<option>des Füllers</option>
				</select>
				<span v-show="dKillers">des Killers / deiner Mutter</span>
				<br />Ihr Stil, wie sie parliert, ist zum Schmelzen, wie Butter
				<br />Sie nimmt dich mit in das Schiff, nimmt dich mit in
				<select v-model="vSuter" v-show="!dSuter">
					<option>Martin Suter</option>
					<option>den Kutter</option>
					<option>deiner Mutter</option>
					<option>42</option>
					<option>mein Futter</option>
					<option>den Router</option>
				</select>
				<span v-show="dSuter">den Kutter</span>
				<br />Futter fürs Gehirn! Auch das Herz muss nicht fasten:
				<br />Es haut der
				Pianör seine Finger in
				<select v-model="vTasten" v-show="!dTasten">
					<option>die Tasten</option>
					<option>den Kasten</option>
					<option>deine Mutter</option>
					<option>die Fressen der Spasten</option>
					<option>42</option>
					<option>die Masten</option>
				</select>
				<span v-show="dTasten">den Kasten</span>
				<br />Wir rasten und lauschen, ein Klang nur, er ziert sich
				<br />Und fast auf der Klimax, Gesang wie
				<select v-model="vVerwirrt" v-show="!dVerwirrt">
					<option>verwirrt’s mich</option>
					<option>am Quartiertisch</option>
					<option>deine Mutter</option>
					<option>42</option>
					<option>ein Irrlicht</option>
					<option>Hirz-Milch</option>
				</select>
				<span v-show="dVerwirrt">deine Mutter / 42</span>
				<br />Dezibellen, die libellenartig flattern mit dem Flügel
				<br />In einer Stelle deines Körpers spürst du wellenartig
				<select
					v-model="vPruegel"
					v-show="!dPruegel"
				>
					<option>Prügel</option>
					<option>Hügel</option>
					<option>Zügel</option>
					<option>deine Mutter</option>
					<option>42</option>
					<option>Bügel</option>
				</select>
				<span v-show="dPruegel">Hügel</span>
				<br />Und Täler, der Wellengang der Flut und der Ebbe
				<br />Der Hals der Poetin,
				schon so trocken wie
				<select v-model="vSteppe" v-show="!dSteppe">
					<option>deine Mutter</option>
					<option>die Steppe</option>
					<option>die Treppe</option>
					<option>Giuseppe</option>
					<option>42</option>
					<option>dein Gerappe</option>
				</select>
				<span v-show="dSteppe">die Steppe</span>
				<br />Doch, wo endlich ein Lichtschein, der Maxim scheint gerettet,
				<br />Dreht der Wind, kommt die Wende, ein Anker ist
				<select v-model="vEntkettet" v-show="!dEntkettet">
					<option>entkettet</option>
					<option>gefettet</option>
					<option>eingebettet</option>
					<option>deine Mutter</option>
					<option>gejettet</option>
					<option>entkettet</option>
				</select>
				<span v-show="dEntkettet">entkettet</span>
				<br />Wir sind rettungslos im Sturm, sterben wir den Heldentod
				<br />Wir sind in
				heller Not, wir sitzen fest im
				<select v-model="vBoot" v-show="!dBoot">
					<option>42</option>
					<option>selben Boot</option>
					<option>gelben Kot</option>
					<option>deiner Mutter</option>
					<option>halben Lot</option>
					<option>Elben-Schlot</option>
				</select>
				<span v-show="dBoot">gelben Kot</span>
				<br />Im braunen Mist des Hotel-California-Never-Ending-Raps
				<br />Wie ein
				Groundhog im Dowlock mit seven
				<select v-model="vSepps" v-show="!dSepps">
					<option>stingking Sepps</option>
					<option>sinking steps</option>
					<option>thinking gaps</option>
					<option>deiner Mutter</option>
					<option>42</option>
					<option>drinking Schnapps</option>
				</select>
				<span v-show="dSepps">sinking steps</span>
				<br />Wir finden nicht mehr raus, bis unter uns die Bretter krachen
				<br />Warum gingen wir da rein, warum bestiegen wir
				<select v-model="vDrachen" v-show="!dDrachen">
					<option>den Drachen</option>
					<option>den Flachmann</option>
					<option>deine Mutter</option>
					<option>den Nachen</option>
					<option>42</option>
					<option>die Sachen</option>
				</select>
				<span v-show="dDrachen">deine Mutter / 42</span>
				<br />Wir sitzen fest, der Slam vorbei, und wir sind hier vergebens drin
				<br />Hier im Boot, hier in Seenot, suchen wir
				<select v-model="vSinn" v-show="!dSinn">
					<option>des Lebens Sinn</option>
					<option>des Lebens Gin</option>
					<option>deine Mutter</option>
					<option>42</option>
					<option>Peter Rebers Kinn</option>
					<option>des Strebens Win</option>
				</select>
				<span v-show="dSinn">des Lebens Gin</span>
				<br />Schreit die Antwort laut, nur so geht’s raus, keiner geniert sich
				<br />Die Antwort ist immerdar nur eine:
				<select v-model="vMutter" v-show="!dMutter">
					<option>deine Mutter</option>
					<option>42</option>
					<option>deine Mutter</option>
					<option>42</option>
					<option>deine Mutter</option>
					<option>42</option>
				</select>
				<span v-show="dMutter">Deine Mutter</span>
			</p>
		</div>
	</div>
</template>
<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters } from "vuex";

export default {
	layout: "empty",
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	data() {
		return {
			dKillers: false,
			vKillers: "",
			dSuter: false,
			vSuter: "",
			dTasten: false,
			vTasten: "",
			dVerwirrt: false,
			vVerwirrt: "",
			dPruegel: false,
			vPruegel: "",
			dSteppe: false,
			vSteppe: "",
			dEntkettet: false,
			vEntkettet: "",
			dBoot: false,
			vBoot: "",
			dSepps: false,
			vSepps: "",
			dDrachen: false,
			vDrachen: "",
			dSinn: false,
			vSinn: "",
			dMutter: false,
			vMutter: "",
			gameOver: false,
			start: true,
			nope: false,
			yes: false,
			try: null,
			randomNegative: 1,
			randomPositive: 1,
			randomNegativeA: 1,
			randomPositiveA: 1,
			nopeCount: 0,
			yesCount: 0,
			win: false,
		};
	},
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		setTimeout(() => {
			this.$sounds.zueri.sound.value._volume = 0.3;
			this.$sounds.zueri.play();
		}, 500);
	},
	watch: {
		gameOver: function () {
			this.gameOver ? this.$sounds.wolfdie.play() : false;
		},
		vKillers: function () {
			this.killers(this.vKillers);
		},
		vSuter: function () {
			this.suter(this.vSuter);
		},
		vTasten: function () {
			this.tasten(this.vTasten);
		},
		vVerwirrt: function () {
			this.verwirrt(this.vVerwirrt);
		},
		vPruegel: function () {
			this.pruegel(this.vPruegel);
		},
		vSteppe: function () {
			this.steppe(this.vSteppe);
		},
		vEntkettet: function () {
			this.entkettet(this.vEntkettet);
		},
		vBoot: function () {
			this.boot(this.vBoot);
		},
		vSepps: function () {
			this.sepps(this.vSepps);
		},
		vDrachen: function () {
			this.drachen(this.vDrachen);
		},
		vSinn: function () {
			this.sinn(this.vSinn);
		},
		vMutter: function () {
			this.mutter(this.vMutter);
		},
	},
	computed: {
		...mapGetters({
			getPopcorn: "inventory/getPopcorn",
		}),
		randomNegativeVideo: function () {
			return "/videos/lueckentext/No" + this.randomNegative + ".mp4";
		},
		randomPositiveVideo: function () {
			return "/videos/lueckentext/Yo" + this.randomPositive + ".mp4";
		},
		randomNegativeAudio: function () {
			return "n" + this.randomNegativeA;
		},
		randomPositiveAudio: function () {
			return "y" + this.randomPositiveA;
		},
	},
	methods: {
		endedNope() {
			this.nope = false;
			this.$refs.nopeVideo.load();
		},
		endedYes() {
			this.yes = false;
			this.$refs.yesVideo.load();
		},
		vorhangAuf() {
			this.start = false;
			this.$sounds.vorhang.play();
			this.$anime({
				targets: ".Lueckentext-vorhangr, .Lueckentext-vorhangl",
				width: "4%",
				duration: 4000,
				easing: "linear",
			});
		},
		noper() {
			if (this.nopeCount >= 4) this.gameOver = true;
			else {
				this.randomNegative = getRandomInt(1, 9);
				this.randomNegativeA = getRandomInt(1, 7);
				this.nope = true;
				this.nopeCount++;
				this.$sounds[this.randomNegativeAudio].play();
			}
		},
		yesser() {
			if (
				this.dKillers &&
				this.dSuter &&
				this.dTasten &&
				this.dVerwirrt &&
				this.dPruegel &&
				this.dSteppe &&
				this.dEntkettet &&
				this.dBoot &&
				this.dSepps &&
				this.dDrachen &&
				this.dSinn &&
				this.dMutter
			) {
				this.win = true;
				for (let sound in this.$sounds) {
					this.$sounds[sound].stop();
				}
				this.$store.commit("inventory/SET_POPCORN", this.getPopcorn + 20);
				setTimeout(() => {
					this.$router.push({ path: "/kulissen/millers/trudigerster" });
				}, 9000);
			} else {
				this.randomPositive = getRandomInt(1, 17);
				this.randomPositiveA = getRandomInt(1, 15);
				this.yes = true;
				this.$sounds[this.randomPositiveAudio].play();
				this.yesCount++;
			}
		},
		killers(val, e) {
			if (val === "Maxim Billers" || val === "42" || val === "deiner Mutter") {
				this.dKillers = true;
				this.yesser();
			} else {
				this.dKillers = false;
				this.noper();
			}
		},
		suter(val, e) {
			if (val === "den Kutter" || val === "42" || val === "deiner Mutter") {
				this.dSuter = true;
				this.yesser();
			} else {
				this.dSuter = false;
				this.noper();
			}
		},
		tasten(val, e) {
			if (val === "den Kasten" || val === "42" || val === "deine Mutter") {
				this.dTasten = true;
				this.yesser();
			} else {
				this.dTasten = false;
				this.noper();
			}
		},
		verwirrt(val, e) {
			if (val === "42" || val === "deine Mutter") {
				this.dVerwirrt = true;
				this.yesser();
			} else {
				this.dVerwirrt = false;
				this.noper();
			}
		},
		pruegel(val, e) {
			if (val === "Hügel" || val === "42" || val === "deine Mutter") {
				this.dPruegel = true;
				this.yesser();
			} else {
				this.dPruegel = false;
				this.noper();
			}
		},
		steppe(val, e) {
			if (val === "die Steppe" || val === "42" || val === "deine Mutter") {
				this.dSteppe = true;
				this.yesser();
			} else {
				this.dSteppe = false;
				this.noper();
			}
		},
		entkettet(val, e) {
			if (val === "entkettet" || val === "42" || val === "deine Mutter") {
				this.dEntkettet = true;
				this.yesser();
			} else {
				this.dEntkettet = false;
				this.noper();
			}
		},
		boot(val, e) {
			if (val === "gelben Koot" || val === "42" || val === "deiner Mutter") {
				this.dBoot = true;
				this.yesser();
			} else {
				this.dBoot = false;
				this.noper();
			}
		},
		sepps(val, e) {
			if (val === "sinking steps" || val === "42" || val === "deiner Mutter") {
				this.dSepps = true;
				this.yesser();
			} else {
				this.dSepps = false;
				this.noper();
			}
		},
		drachen(val, e) {
			if (val === "42" || val === "deine Mutter") {
				this.dDrachen = true;
				this.yesser();
			} else {
				this.dDrachen = false;
				this.noper();
			}
		},
		sinn(val, e) {
			if (val === "des Lebens Gin" || val === "42" || val === "deine Mutter") {
				this.dSinn = true;
				this.yesser();
			} else {
				this.dSinn = false;
				this.noper();
			}
		},
		mutter(val, e) {
			if (val === "deine Mutter") {
				this.dMutter = true;
				this.yesser();
			} else {
				this.dMutter = false;
				this.noper();
			}
		},
	},
	destroyed() {
		this.$sounds.zueri.stop();
	},
};
</script>
<style lang="scss">
body {
	overflow-x: hidden;
}
.Lueckentext-reactions {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 2;

	.Lueckentext-nope {
		img {
			width: 80vw;
		}
	}
}

@mixin mixinLueckentext {
	overflow: visible;
	height: 100%;
	width: 100%;
	color: black;
	font-size: 30px;
	font-family: Universalis;
	margin-bottom: 20px;
	line-height: 60px;
}

.Lueckentext-outer {
	width: 100vw;
	background-image: url("~static/images/textures/affenwand.jpg");
	//padding: 5% 0% 10% 0;
}

.Lueckentext-start {
	position: fixed;
	width: 100vw;
	left: 0;
	top: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;

	p {
		padding: 20px;
		background-image: url("/images/textures/textur2.jpg");
		border-radius: 20% 0 20% 0;
		font-size: 50px;
		font-family: Universalis;
		color: black;
		text-align: center;
		z-index: 4;
	}

	p:nth-child(2) {
		background-image: url("/images/textures/textur.jpg");
	}
}

.Lueckentext-gameOver {
	background-color: red;
	z-index: 2;
	height: 100vh;
	img {
		position: fixed;
		top: 5vh;
		left: 50vw;
		transform: translate(-50%, 0);
		height: 90vh;
	}
}

.Lueckentext-verzierung {
	position: absolute;
	background: black;
	width: 100%;
	height: 100%;
	clip-path: polygon(5% 20%, 88% 4%, 70% 100%, 30% 100%);
	background-image: url("~static/images/textures/textur.jpg");
	background-size: 200px;
}

.Lueckentext-container {
	padding: 10% 10% 10% 20%;
	background-image: url("~static/images/textures/textur2.jpg");
	background-size: 200px;
	clip-path: polygon(9% 0, 17% 100%, 86% 100%, 94% 5%);
	z-index: -1;
	overflow: visible;

	@media (min-width: 1250px) {
		padding: 8% 10% 10% 25%;
	}
	@media (min-width: 1600px) {
		padding: 8% 10% 10% 32%;
		clip-path: polygon(17% 0, 25% 100%, 80% 100%, 90% 5%);
	}

	h1 {
		font-family: UniversalisBold;
		font-size: 40px;
		padding-bottom: 20px;
	}

	p {
		@include mixinLueckentext;
	}

	select {
		padding: 0;
		margin: 0;
		background-image: url("~static/images/textures/snow.jpg");
		outline: none;
		font-size: 30px;
		font-family: Universalis;
		color: red;
		border: none;
		&:focus {
			border: none;
		}
	}

	option {
		font-family: Universalis;
	}

	input {
		padding: 0;
		margin: 0;
		background-color: transparent;
		background: transparent;
		outline: none;
		font-size: 30px;
		font-family: Universalis;
		color: green;
		border: none;
		&:focus {
			border: none;
		}
		&::placeholder {
			color: black;
			opacity: 1;
		}
	}
	span {
		background-color: green;
	}
}

.Lueckentext-vorhangl {
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: 52vw;
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

	z-index: 3;
}

.Lueckentext-vorhangr {
	position: fixed;
	top: 0;
	right: 0;
	width: 52vw;
	height: 100vh;
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

	z-index: 3;
}
</style>
