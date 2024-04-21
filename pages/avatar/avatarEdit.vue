<template>
	<div class="AvatarEdit-container overflow-hidden">
		<div class="bg-#FFDBDB fixed w-screen h-screen z-3 text-10vh flex justify-center items-center animate__animated animate__pulse animate__infinite" v-show="laden">Lädt...</div>
		<div
			class="AvatarEdit-name"
		>
			<input
				autocomplete="off"
				v-model="avatarName"
				placeholder="Dein Name"
				maxlength="20"
			/>
		</div>
		<div class="AvatarEdit-leftHead">
			<button class="AvatarEdit-buttonLeft" v-on:click="beforeHead()">
				links
			</button>
		</div>
		<div class="AvatarEdit-head">
			<img
				:style="{ transition: 'opacity 2s' }"
				:src="getHeads[getMeHeadIndex].mainUrl"
			/>
		</div>
		<div class="AvatarEdit-rightHead">
			<button class="AvatarEdit-buttonRight" v-on:click="nextHead()">
				rechts
			</button>
		</div>
		<div class="AvatarEdit-leftTorso">
			<button class="AvatarEdit-buttonLeft" v-on:click="beforeTorso()">
				à gauche
			</button>
		</div>
		<div class="AvatarEdit-torso">
			<img :src="getTorsos[getMeTorsoIndex].mainUrl" />
		</div>
		<div class="AvatarEdit-rightTorso">
			<button class="AvatarEdit-buttonRight" v-on:click="nextTorso()">
				à droite
			</button>
		</div>
		<div class="AvatarEdit-leftLegs">
			<button class="AvatarEdit-buttonLeft" v-on:click="beforeLegs()">
				a sinistra
			</button>
		</div>
		<div class="AvatarEdit-legs">
			<img :src="getLegs[getMeLegsIndex].mainUrl" />
		</div>
		<div class="AvatarEdit-rightLegs">
			<button class="AvatarEdit-buttonRight" v-on:click="nextLegs()">
				a destra
			</button>
		</div>
		<div class="AvatarEdit-accept">
			<div class="">
				<div
					@click="checkName()"
					class="animate__animated animate__headShake animate__infinite animate__delay-7s"
				>
					<NuxtLink
						class="AEdit-butta"
						id="AEdit-butta"
						to="/kulissen/start"
						no-prefetch
						>Auf ins Getümmel!</NuxtLink
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import getRandomInt from "~/assets/javascript/helpers.js";

const names = [
	"mr kayy",
	"girlie32",
	"megalordFüfzg",
	"price t-bottom",
	"lamar odom",
	"Grease Pencil",
	"2342a",
	"0815-steinkamp",
	"Lebertran*92",
	"Fake Bot Schnitzelbrot",
	"Liselotte K",
	"Auba",
	"Nachrichten 33",
	"Totally Brigitte",
	"Eovin",
	"Solawitze",
	"Arvenwein",
	"Bern-Basel ¡Olé!",
	"Mark Medlock",
	"Tansanische Tanja",
	"HeuReka",
	"Mc-Rubi",
	"Nik Har",
];

export default {
	layout: "empty",
	data() {
		return {
			tooLong: false,
			noName: true,
			laden: true,
		};
	},
	mounted() {
		console.log(this.$nuxt.context.from.fullPath)
		if (this.$nuxt.context.from.fullPath !== "/tutorial") this.laden = false;
		this.$sounds.zueri.play();
		for (var i = 0; i < 8; i++) {
			this.$store.dispatch("me/setMeHeadNext", i);
			this.$store.dispatch("me/setMeTorsoNext", i);
			this.$store.dispatch("me/setMeLegsNext", i);
		}
		setTimeout(() => {
			this.laden = false;
		}, 3000);
	},
	watch: {
		getMeName: function () {
			if (this.getMeName != "") this.noName = false;
		},
	},
	computed: {
		...mapGetters({
			getMeName: "me/getMeName",
			getMeHeadIndex: "me/getMeHeadIndex",
			getMeTorsoIndex: "me/getMeTorsoIndex",
			getMeLegsIndex: "me/getMeLegsIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getTorsos: "me/getAvatarAssetsTorsos",
			getLegs: "me/getAvatarAssetsLegs",
			getMeRoomX: "me/getMeRoomX",
			getMeRoomY: "me/getMeRoomY",
			getMeRoomZ: "me/getMeRoomZ",
		}),
		avatarName: {
			get() {
				return this.getMeName;
			},
			set(name) {
				if (name.length >= 20) {
					this.tooLong = true;
				} else if (name.length === 0) {
					this.noName = true;
				} else {
					this.tooLong = false;
					this.noName = false;
					this.$store.commit("me/SET_MENAME", name);
				}
			},
		},
		urlBack() {
			return (
				"/kulissen/$" +
				this.getMeRoomX +
				"$" +
				this.getMeRoomY +
				"$" +
				this.getMeRoomZ
			);
		},
		...mapState({}),
	},
	methods: {
		checkName() {
			if (this.noName) {
				this.$store.commit("me/SET_MENAME", names[getRandomInt(0, names.length)]);
			}
		},
		nextHead: function () {
			this.$sounds.arrow0.play();
			this.$store.dispatch("me/setMeHeadNext", this.getMeHeadIndex);
		},
		beforeHead: function () {
			this.$sounds.arrow1.play();
			this.$store.dispatch("me/setMeHeadBefore", this.getMeHeadIndex);
		},
		nextTorso: function () {
			this.$sounds.arrow3.play();
			this.$store.dispatch("me/setMeTorsoNext", this.getMeTorsoIndex);
		},
		beforeTorso: function () {
			this.$sounds.arrow4.play();
			this.$store.dispatch("me/setMeTorsoBefore", this.getMeTorsoIndex);
		},
		nextLegs: function () {
			this.$sounds.arrow5.play();
			this.$store.dispatch("me/setMeLegsNext", this.getMeLegsIndex);
		},
		beforeLegs: function () {
			this.$sounds.arrow2.play();
			this.$store.dispatch("me/setMeLegsBefore", this.getMeLegsIndex);
		},
	},
	destroyed() {
		this.$sounds.zueri.stop();
	},
};
</script>

<style lang="scss">
.AvatarEdit-container {
	width: 100vw;
	height: 100vh;
	background: rgb(255, 214, 165);
	background: radial-gradient(
		circle,
		rgba(255, 214, 165, 1) 0%,
		rgba(202, 255, 191, 1) 50%,
		rgba(253, 255, 182, 1) 100%
	);
	display: grid;
	grid-template-columns: 1fr 20vw 1fr;
	grid-template-rows: 12.5vh 25vh 25vh 25vh 12.5vh;
	grid-template-areas:
		"AvatarEdit-name AvatarEdit-name AvatarEdit-name"
		"AvatarEdit-leftHead AvatarEdit-head AvatarEdit-rightHead"
		"AvatarEdit-leftTorso AvatarEdit-torso AvatarEdit-rightTorso"
		"AvatarEdit-leftLegs AvatarEdit-legs AvatarEdit-rightLegs"
		"AvatarEdit-accept AvatarEdit-accept AvatarEdit-accept";
	font-family: Jazz;
}

.AvatarEdit-name {
	grid-area: AvatarEdit-name;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// font-family: Park;

	input {
		text-align: center;
		min-width: 50%;
		height: 100%;
		padding-top: 25px;
		padding-bottom: 20px;
		background: #fdffb6;
		border-radius: 0 0 50% 50%;
		border: none;
		font-family: unset;
		font-size: 70px;
		outline: none;
		border-left: solid 20px yellow;
		border-right: solid 20px yellow;
		z-index: 2;
	}

	input:hover {
		-webkit-box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
		-moz-box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
	}
	p {
		background: #fdffb6;
		border-radius: 0 0 50% 50%;
		font-size: 35px;
		padding-bottom: 20px;
		padding-left: 30px;
		padding-right: 30px;
		margin-top: -15px;
		z-index: 3;
	}
}

@mixin AvatarEdit-leftRight {
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		width: 80%;
		height: 80%;
		background: hsla(110, random(100) * 1%, 87%, 1);
		border-radius: 50%;
		font-family: unset;
		font-size: 60px;
		outline: none;
	}
}

.AvatarEdit-leftHead {
	grid-area: AvatarEdit-leftHead;
	background-color: #ffd6a5;
	@include AvatarEdit-leftRight;
	border-radius: 0 50% 0 0;
}

.AvatarEdit-rightHead {
	grid-area: AvatarEdit-rightHead;
	background-color: #fdffb6;
	@include AvatarEdit-leftRight;
	border-radius: 50% 0 0 0;
}

.AvatarEdit-leftTorso {
	grid-area: AvatarEdit-leftTorso;
	background-color: #caffbf;
	@include AvatarEdit-leftRight;
}

.AvatarEdit-rightTorso {
	grid-area: AvatarEdit-rightTorso;
	background-color: #ffd6a5;
	@include AvatarEdit-leftRight;
}

.AvatarEdit-leftLegs {
	grid-area: AvatarEdit-leftLegs;
	background-color: #fdffb6;
	@include AvatarEdit-leftRight;
	border-radius: 0 0 50% 0;
}

.AvatarEdit-rightLegs {
	grid-area: AvatarEdit-rightLegs;
	background-color: #caffbf;
	@include AvatarEdit-leftRight;
	border-radius: 0 0 0 50%;
}

@mixin AvatarEdit-headTorsoLegs {
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 60%;
	}
}

.AvatarEdit-head {
	grid-area: AvatarEdit-head;
	padding-top: 40px;
	z-index: 2;
	opacity: 1;
	transition: all 2s;
	@include AvatarEdit-headTorsoLegs;
}

.AvatarEdit-torso {
	grid-area: AvatarEdit-torso;
	z-index: 1;
	@include AvatarEdit-headTorsoLegs;
}

.AvatarEdit-legs {
	grid-area: AvatarEdit-legs;
	z-index: 0;
	@include AvatarEdit-headTorsoLegs;
}

.AvatarEdit-accept {
	grid-area: AvatarEdit-accept;
	//padding-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > div:hover {
		-webkit-box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
		-moz-box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 29px 31px rgba(255, 255, 255, 1);
	}

	& > div {
		padding-top: 10px;
		border-radius: 50% 50% 0 0;
		background: #fdffb6;
		height: 100%;
		min-width: 50%;
		border-right: solid 50px black;
		border-left: solid 5px black;
		display: flex;
		justify-content: center;
		align-items: center;
		a,
		p {
			color: black;
			text-decoration: none;
			text-align: center;
			font-size: 60px;
		}

		p {
			color: red;
		}
	}
}

.AvatarEdit-buttonLeft {
	border: none;
	border-left: solid 20px yellow;
	&:hover {
		border-left: solid 30px green;
	}
}

.AvatarEdit-buttonRight {
	border: none;
	border-right: solid 20px yellow;
	&:hover {
		border-right: solid 30px green;
	}
}
</style>
