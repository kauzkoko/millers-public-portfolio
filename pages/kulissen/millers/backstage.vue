<template>
	<!-- Backstage -->
	<div class="backstage-container">
		<div class="backstage-main">
			<SpielfeldSlot>
				<template v-slot:content>
					<Schauspieler 
						id="backstage-schauspieler-comp"
						v-bind:style="{
              				'display': getSchauspielerDisplay,
            			}"
						@Schauspieler-click="openSchauspieler()"
					/>
					<div class="backstage-vorhangl"></div>
					<div class="backstage-vorhangr"></div>
					<WanderwegStange
						class="backstage-wanderweg"
						style="
							left: 2%;
							top: 75%;
							z-index: 10;
							transform: scale(1.2) rotate(10deg);
						"
						@wegweiser-click="goBack()"
					>
						<template v-slot:text>Zurück</template>
					</WanderwegStange>
					<div class="SpielfeldAdditions-backstage-path"></div>
					<div class="backstage-backstage"></div>
					<div class="backstage-milky">
						<img src="/images/milky/face_positive.png" v-on:click="goInside()" @mouseover="milkyTalking()" />
					</div>
					<div
						class="animate__animated animate__bounce animate__infinite backstage-chair"
						v-on:click="goInside()"
					></div>
					<div id="backstage-schauspieler-question">
						<div id="backstage-schauspielerClose">
							<p @click="closSchauspieler()">Zurück</p>
						</div>
						<div id="backstage-schauspieler-sprech">
							<div id="backstage-schauspielerspruch">
								<p>
									<p >W.. Wi.. Wie soll ich nur auf die Bühne?!</p>
									<p >Ich kann das nicht....</p>
									<p >Scheisse mein Text!</p>
									<p >Ich kotz jeden Moment auf mein Trikot!</p>
								</p>
							</div>
							<img src="/images/millers/misc/adrian13.png" />
						</div>
						<div id="backstage-avatar-sprech">
							<div id="backstage-avatar-nodrink">
								<p>
									<p >Irgendwie muss dem doch zu helfen sein...</p>
								</p>
							</div>
							<div id="backstage-avatar-drink">
								<p>
									<p >Schnaps geben</p>
								</p>
								<img
									id="backstage-schnaps"
									src="/images/millers/object/schnaps.png"
									@click="giveSchnaps()"
								/>
							</div>
							<img id="backstage-avatarhead" :src="getHeads[getMeHeadIndex].mainUrl" />
						</div>
					</div>
				</template>
			</SpielfeldSlot>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import getRandomInt from "~/assets/javascript/helpers.js";
export default {
	data() {
		return {
		};
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},	
	mounted() {
		this.$store.dispatch("me/setMeRoomOfSlug", ["something", "4", "0", "111"]);
		setTimeout(() => {
			this.$sounds.zueriRed.sound.value._loop = true
			this.$sounds.zueriRed.play();
		}, 500);
	},
	computed: {
		...mapGetters({
			getMeHeadIndex: "me/getMeHeadIndex",
			getHeads: "me/getAvatarAssetsHeads",
			getSchnaps: "inventory/getSchnaps",
			getSchauspielerDisplay: "games/getSchauspielerDisplay",
		}),
		...mapState({}),
	},
	methods: {
		goInside: function () {
			this.$router.push({ path: "/kulissen/millers/schminken" });
		},
		goBack: function () {
			this.$router.push({ path: "/kulissen/millers/stage" });
		},
		openSchauspieler: function () {
			document.getElementById("backstage-schauspieler-question").style.display =
				"initial";
			if (this.getSchnaps > 0) {
				document.getElementById("backstage-avatar-drink").style.display = "initial";
			} else {
				document.getElementById("backstage-avatar-drink").style.display = "none";
			}
		},
		closSchauspieler: function () {
			document.getElementById("backstage-schauspieler-question").style.display =
				"none";
		},
		giveSchnaps: function () {
			this.$store.commit("inventory/SET_SCHNAPS", this.getSchnaps-1)
			this.$router.push({ path: "/kulissen/thanksforthedrink" });
			this.$store.commit("games/SET_SCHAUSPIELERDISPLAY", this.getSchauspielerDisplay = 'none')
		},
		milkyTalking() {
			this.$sounds.milkybad3.sound.value._rate = 1;
			this.$sounds.milkybad3.sound.value._volume = 2.5;

			this.$sounds.milkybad3.play({ interrupt: true })
		},
	},
	watch: {
		getSchnaps: function () {
			if (this.getSchnaps > 0) {
				document.getElementById("backstage-avatar-drink").style.display = "initial";
				document.getElementById("backstage-avatar-nodrink").style.display = "none";
			} else {
				document.getElementById("backstage-avatar-drink").style.display = "none";
				document.getElementById("backstage-avatar-nodrink").style.display = "initial";
			}
		},
	},
};
</script>

<style lang="scss">
//animations

@keyframes backstage-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes backstage-millers {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes backstage-vorhangl {
	from {
		width: 50%;
	}
	to {
		width: 23%;
	}
}

@keyframes backstage-vorhangr {
	from {
		width: 50%;
	}
	to {
		width: 20%;
	}
}

@keyframes backstage-wegweiser {
	from {
		top: 200%;
	}
	to {
		top: 75%;
	}
}

@keyframes backstage-milky {
	from {
		top: -100%;
	}
	to {
		top: 2%;
	}
}

//classes container + grid

.backstage-container {
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

.backstage-main {
	grid-area: main;
	width: 100%;
	height: 100%;

	z-index: 0;
}

.backstage-menu {
	grid-area: menu;
	width: 100%;
	height: 100%;

	z-index: 0;
}

//classes main

.backstage-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 77%;
	width: 23%;
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

	animation: backstage-vorhangl 6s ease-in-out forwards;

	z-index: 8;
}

.backstage-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 20%;
	height: 77%;
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

	animation: backstage-vorhangr 5.8s ease-in-out forwards;

	z-index: 8;
}

.backstage-wanderweg {
	animation-name: backstage-wegweiser;
	animation-duration: 6s;
}

.backstage-milky {
	position: absolute;
	left: 30%;
	top: 2%;
	width: 14%;
	height: auto;
	animation: backstage-milky 6s ease-in-out forwards;
	img {
		width: 100%;
		height: auto;
		opacity: 0.9;
	}
	img:hover {
		cursor: pointer;
		opacity: 1;
	}
	z-index: 3;
}

.SpielfeldAdditions-backstage-path {
	// pointer-events: none;

	position: absolute;
	width: 100%;
	height: 30%;
	left: 0;
	top: 75%;
	background-image: url("~static/images/textures/bug.jpg");
	background-size: 400px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
	filter: invert(1);
	cursor: url("/images/icons/walkin.png"), auto;

	animation-name: backstage-path;
	animation-duration: 6s;

	z-index: 2;
}

.backstage-backstage {
	position: absolute;
	width: 60%;
	height: 75%;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	background-image: url("~static/images/objects/backstage.jpg");
	background-size: cover;
	// background-repeat: round;

	animation-name: backstage-millers;
	animation-duration: 4s;

	z-index: 1;
}

.backstage-chair {
	position: absolute;
	width: 60%;
	height: 75%;
	left: 20%;
	top: 0;
	transform: translate(50%, 0);
	background-image: url("/images/objects/backstagechair.png");
	background-size: cover;
	clip-path: polygon(10% 50%, 50% 50%, 50% 100%, 10% 100%);
	cursor: pointer;

	z-index: 1;
}

#backstage-schauspieler-question {
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

#backstage-schauspielerClose {
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

#backstage-schauspieler-sprech {
	img {
		position: absolute;
		top: 20%;
		left: 15%;
		width: 20%;
		transform: rotate(-10deg) scaleX(-1);
		clip-path: polygon(
			0% 0%,
			100% 0,
			100% 61%,
			0 61%
		);
	}
}

#backstage-schauspielerspruch {
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
		font-size: 1.6vw;
	}
}

#backstage-avatar-sprech {
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
		p {
			font-size: 2vw;
			text-align: center;
		}
		img {
			position: relative;
			margin-top: 5%;
			margin-left: 45%;
			bottom: 0%;
			left: 0;
			width: 10%;
			&:hover {
				cursor: pointer;
				transform: scale(1.2) rotate(-20deg);
			}
		}	
	}
}

#backstage-avatar-drink {
	display: none;
}

#backstage-avatarhead {
	position: absolute;
	top: 60%;
	left: 70%;
	width: 20%;
	transform: rotate(20deg);
	pointer-events: none;
}

#backstage-schauspieler-comp:hover {
	cursor: pointer;
}
</style>
