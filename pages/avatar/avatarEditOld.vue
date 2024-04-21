<template>
	<div class="AEdit-Container">
		<div class="AEdit-choosen">
			<input
				class="AEdit-name"
				v-model="avatarName"
				placeholder="Wie heisst du?"
			/>
			<p id="AEdit-toolong">Maximal 20 Zeichen!</p>
		</div>
		<div class="AEdit-chooseh">
			<div class="AEdit-buttonl">
				<button class="AEdit-buttl" v-on:click="nextHead()"></button>
			</div>
			<div
				class="AEdit-head"
				v-bind:style="{
					'background-image': 'url(' + getHeads[getMeHeadIndex].mainUrl + ')',
					transition: 'left 0.2s, top 0.2s',
				}"
			></div>
			<div class="AEdit-buttonr">
				<button class="AEdit-buttr" v-on:click="beforeHead()"></button>
			</div>
		</div>
		<div class="AEdit-chooses">
			<div class="AEdit-buttonl">
				<button class="AEdit-buttl" v-on:click="nextTorso()"></button>
			</div>
			<div
				class="AEdit-shirt"
				v-bind:style="{
					'background-image': 'url(' + getTorsos[getMeTorsoIndex].mainUrl + ')',
					transition: 'left 0.2s, top 0.2s',
				}"
			></div>
			<div class="AEdit-buttonr">
				<button class="AEdit-buttr" v-on:click="beforeTorso()"></button>
			</div>
		</div>
		<div class="AEdit-choosej">
			<div class="AEdit-buttonl">
				<button class="AEdit-buttl" v-on:click="nextLegs()"></button>
			</div>
			<div
				class="AEdit-jeans"
				:style="{
					backgroundImage: 'url(' + getLegs[getMeLegsIndex].mainUrl + ')',
					transition: 'left 0.2s, top 0.2s',
				}"
			></div>
			<div class="AEdit-buttonr">
				<button class="AEdit-buttr" v-on:click="beforeLegs()"></button>
			</div>
		</div>
		<div class="AEdit-accept">
			<NuxtLink class="AEdit-butta" id="AEdit-butta" :to="urlBack" no-prefetch
				>Auf ins Getümmel!</NuxtLink
			><br />
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	layout: "empty",
	data() {
		return {};
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
			set(value) {
				if (value.length >= 20) {
					document.getElementById("AEdit-toolong").style.display = "block";
					document.getElementById("AEdit-butta").style.display = "none";
				} else {
					this.$store.commit("me/SET_MENAME", value);
					document.getElementById("AEdit-toolong").style.display = "none";
					document.getElementById("AEdit-butta").style.display = "initial";
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
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		nextHead: function () {
			this.$store.dispatch("me/setMeHeadNext", this.getMeHeadIndex);
		},
		beforeHead: function () {
			this.$store.dispatch("me/setMeHeadBefore", this.getMeHeadIndex);
		},
		nextTorso: function () {
			this.$store.dispatch("me/setMeTorsoNext", this.getMeTorsoIndex);
		},
		beforeTorso: function () {
			this.$store.dispatch("me/setMeTorsoBefore", this.getMeTorsoIndex);
		},
		nextLegs: function () {
			this.$store.dispatch("me/setMeLegsNext", this.getMeLegsIndex);
		},
		beforeLegs: function () {
			this.$store.dispatch("me/setMeLegsBefore", this.getMeLegsIndex);
		},
	},
};
</script>

<style lang="scss">
.AEdit-Container {
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: bisque;
}

.AEdit-choosen {
	position: absolute;
	width: 100%;
	height: 10%;
	left: 0%;
	top: 0;
}

.AEdit-chooseh {
	position: absolute;
	width: 100%;
	height: 20%;
	left: 0%;
	top: 10%;
}

.AEdit-chooses {
	position: absolute;
	width: 100%;
	height: 20%;
	left: 0%;
	top: 40%;
}

.AEdit-choosej {
	position: absolute;
	width: 100%;
	height: 20%;
	left: 0%;
	top: 70%;
}

.AEdit-buttonl {
	position: absolute;
	width: 15%;
	height: 100%;
	left: 25%;
	top: 0;
}

.AEdit-buttonr {
	position: absolute;
	width: 15%;
	height: 100%;
	left: 60%;
	top: 0;
}

.AEdit-buttl {
	position: absolute;
	width: 60%;
	height: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: green;
	clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
	transition: all 0.1s ease-out;
	border: none;
}

.AEdit-buttl:hover {
	width: 70%;
	height: 60%;
	transition: all 0.1s ease-out;
}

.AEdit-buttr {
	position: absolute;
	width: 60%;
	height: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: green;
	clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
	transition: all 0.1s ease-out;
	border: none;
}

.AEdit-buttr:hover {
	width: 70%;
	height: 60%;
	transition: all 0.1s ease-out;
}

.AEdit-accept {
	position: absolute;
	width: 100%;
	height: 10%;
	left: 0%;
	top: 90%;
}

.AEdit-butta {
	position: absolute;
	width: 20%;
	height: 60%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	border-style: solid;
	border-color: black;
	text-align: center;
	color: black;
	background-color: white;
	font-size: 180%;
	text-decoration: none;
	outline: none;
	transition: all 0.1s ease-out;
}

.AEdit-butta:hover {
	width: 25%;
	height: 70%;
	font-size: 220%;
	transition: all 0.1s ease-out;
}

.AEdit-name {
	position: absolute;
	width: 40%;
	height: 60%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	border-style: solid;
	border-color: black;
	text-align: center;
	font-size: 200%;
	outline: none;
}

#AEdit-toolong {
	position: absolute;
	display: none;
	width: 40%;
	height: 60%;
	top: 120%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: red;
	text-align: center;
	font-size: 150%;
}

.AEdit-head {
	position: absolute;
	width: 20%;
	height: 100%;
	left: 40%;
	top: 0;
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
}

.AEdit-shirt {
	position: absolute;
	width: 20%;
	height: 100%;
	left: 40%;
	top: 0;
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
}

.AEdit-jeans {
	position: absolute;
	width: 20%;
	height: 100%;
	left: 40%;
	top: 0;
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
