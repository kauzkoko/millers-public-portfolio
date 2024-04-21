<template>
	<div class="zukki-outer">
		<div v-show="first"><img src="/images/zukkihund/1.jpg" /></div>
		<div v-show="second">
			<img src="/images/zukkihund/2.jpg" />
		</div>
		<div v-show="third">
			<img src="/images/zukkihund/3.jpg" />
			<div v-show="sprech3" class="zukki-sprech">
				<p>Hey Special! Entzapfemer de Grappa! Wer mag länger stah?</p>
			</div>
			<div class="zukki-frage animate__animated animate__fadeIn animate__delay-4s">
				<div @click="sauf1()"><p>Saufen!</p></div>
				<div @click="goToChurch()">
					<p>Chill mal du Hund, ich bin beim blauen Kreuz!</p>
				</div>
			</div>
		</div>
		<div v-show="fourth">
			<img src="/images/zukkihund/4.jpg" />
			<div
				class="zukki-sprech animate__animated animate__fadeIn animate__delay-2s"
			>
				<p>Heiland! Nomol eine?</p>
			</div>
			<div class="zukki-frage animate__animated animate__fadeIn animate__delay-5s">
				<div @click="sauf2()"><p>Mit Gott!</p></div>
				<div @click="goToChurch()">
					<p>Der war mir zu heavy, danke trotzdem.</p>
				</div>
			</div>
		</div>
		<div v-show="fifth">
			<img src="/images/zukkihund/5.jpg" />
			<div
				class="zukki-sprech animate__animated animate__fadeIn animate__delay-2s"
			>
				<p>So buono das Zügs! Another one?</p>
			</div>
			<div class="zukki-frage animate__animated animate__fadeIn animate__delay-5s">
				<div @click="sauf3()"><p>Auf die Vorsehung!</p></div>
				<div @click="kotz1()">
					<p>sCHluSs beii mir xDD :D</p>
				</div>
			</div>
		</div>
		<div v-show="sixth">
			<img src="/images/zukkihund/6.jpg" />
			<div
				class="zukki-sprech animate__animated animate__fadeIn animate__delay-2s"
			>
				<p>Oh wenn jetzt de Uhu rohrt, spatzt de Specht! Heb ane!</p>
			</div>
			<div class="zukki-frage animate__animated animate__fadeIn animate__delay-5s">
				<div @click="sauf4()">
					<p>Obenaben damit.</p>
				</div>
				<div @click="kotz2()">
					<p>Oh, da rumort's!</p>
				</div>
			</div>
		</div>
		<div v-show="seventh">
			<img src="/images/zukkihund/7.jpg" />
			<audio src="/"
			<div
				class="zukki-sprech animate__animated animate__fadeIn animate__delay-2s"
			>
				<p>Don't eat the yellow snow.</p>
			</div>
			<div
				class="zukki-frage animate__animated animate__fadeIn animate__delay-5s"
			>
				<div @click="sauf5()"><p>Namal süggele!!!!</p></div>
				<div @click="kotz3()">
					<p>Auf's Klo.</p>
				</div>
			</div>
		</div>
		<div v-show="eight">
			<img src="/images/zukkihund/kotzen.jpg" />
			<audio src="/"
			<div
				class="zukki-sprech animate__animated animate__fadeIn animate__delay-5s"
			>
				<p>Down by law.</p>
			</div>
			<div
				class="zukki-frage animate__animated animate__fadeIn animate__delay-5s"
			>
				<div @click="sauf6()"><p>Tropfen wegsabbern.</p></div>
				<div @click="kotz4()">
					<p>Auch Kotzen gehen.</p>
				</div>
			</div>
		</div>
		<div v-if="saufen" class="zukki-reactions">
			<div class="zukki-saufen">
				<video :style="{ width: eight ? '60vw' : '100vw' }" :src="zugUrl" @ended="endedPlaying()" autoplay />
			</div>
		</div>
		<div v-if="kotzen" class="zukki-reactions">
			<div class="zukki-saufen" >
				<video :src="zugUrl" @ended="endedKotzen()" :muted="eight" autoplay />
			</div>
		</div>
		<div class="zukki-vorhangl"></div>
		<div class="zukki-vorhangr"></div>
		<!-- <WanderwegStange
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
		</WanderwegStange> -->
	</div>
</template>
<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters } from "vuex";

export default {
	layout: "empty",

	data() {
		return {
			first: true,
			second: false,
			third: false,
			fourth: false,
			fifth: false,
			sixth: false,
			seventh: false,
			eight: false,
			zug: 1,
			saufen: false,
			kotzen: false,
			sprech3: false,
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
		this.vorhangAuf();
		setTimeout(() => {
			this.second = true;
			this.first = false;
			this.$sounds.spoton.play();
			setTimeout(() => {
				this.third = true;
				this.second = false;
				this.$sounds.spoton.play();
				setTimeout(() => {
					this.sprech3 = true;
					this.$sounds.zukki2.sound.value._volume = 2;
					this.$sounds.zukki2.play();
				}, 2000);
				//2000
			}, 2000);
			//2000
		}, 5000);
		//5000

	},

	watch: {},
	computed: {
		zugUrl: function () {
			return "/videos/zukki/" + this.zug + ".mp4";
		},
	},
	methods: {
		endedPlaying() {
			this.saufen = false;
			if (this.third) {
				this.third = false;
				this.fourth = true;
				setTimeout(() => {
					this.$sounds.long1.sound.value._volume = 2;
					this.$sounds.long1.play()
				}, 2000);
			} else if (this.fourth) {
				this.fourth = false;
				this.fifth = true;
				setTimeout(() => {
					this.$sounds.long2.sound.value._volume = 4;
					this.$sounds.long2.play()
				}, 2000);
			} else if (this.fifth) {
				this.fifth = false;
				this.sixth = true;
				setTimeout(() => {
					this.$sounds.long3.sound.value._volume = 2;
					this.$sounds.long3.play()
				}, 2000);
			} else if (this.sixth) {
				this.sixth = false;
				this.seventh = true;
				setTimeout(() => {
					this.$sounds.long4.sound.value._volume = 2;
					this.$sounds.long4.play()
				}, 2000);
			} else if (this.seventh) {
				this.seventh = false;
				this.eight = true;
				this.$sounds.zukkikotzt.sound.value._volume = 1.5;
				this.$sounds.zukkikotzt.play()
			} else if (this.eight) {
				this.$router.push("/kulissen/millers/bar");
			}
		},
		endedKotzen() {
			this.$router.push("/kulissen/millers/wcinside");
		},
		goToChurch() {
			this.$router.push("/kulissen/dickicht/$-1$-1$0");
			this.$store.commit("zukkihund/SET_CHURCH", true);
		},
		kotz1() {
			this.zug = "kotz1";
			this.kotzen = true;
		},
		kotz2() {
			this.zug = "kotz2";
			this.kotzen = true;
		},
		kotz3() {
			this.zug = "kotz2";
			this.kotzen = true;
		},
		kotz4() {
			this.zug = "kiesen";
			this.kotzen = true;
		},
		sauf1() {
			this.zug = "nimm1";
			this.saufen = true;
		},
		sauf2() {
			this.zug = "nimm2";
			this.saufen = true;
		},
		sauf3() {
			this.zug = "wuu";
			this.saufen = true;
		},
		sauf4() {
			this.zug = "nimm4";
			this.saufen = true;
		},
		sauf5() {
			this.zug = "loki";
			this.saufen = true;
		},
		sauf6() {
			this.zug = "catlick";
			this.saufen = true;
		},
		vorhangAuf() {
			this.$sounds.vorhang.play();
			this.$anime({
				targets: ".zukki-vorhangr, .zukki-vorhangl",
				width: "0%",
				duration: 4000,
				easing: "linear",
			});
		},
	},
	destroyed() {
		this.$sounds.zueri.stop();
	},
};
</script>
<style lang="scss">
.zukki-outer {
	font-family: Universalis;
	width: 100vw;
	height: 100vh;
	background-image: url("~static/images/textures/affenwand.jpg");
	display: flex;
	justify-content: center;
	align-items: center;
	//padding: 5% 0% 10% 0;
	img {
	width: 100%;
	z-index: 10;
	}
}



.zukki-frage {
	position: fixed;
	left: 50%;
	top: 50%;
	width: 70vw;
	transform: translate(-50%, -50%);
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	div:nth-child(1) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 50vh;
		width: 30vw;
		background: red;
		clip-path: polygon(
			20% 0%,
			0% 20%,
			30% 50%,
			0% 80%,
			20% 100%,
			50% 70%,
			80% 100%,
			100% 80%,
			70% 50%,
			100% 20%,
			80% 0%,
			50% 30%
		);
		cursor: pointer;
		p {
			white-space: nowrap;
			font-size: 3vw;
			transform: rotate(-45deg);
			cursor: pointer;
		}
	}
	div:nth-child(2) {
		position: relative;
		height: 50vh;
		width: 30vw;
		padding-top: 10%;
		background: blue;
		clip-path: polygon(
			10% 25%,
			35% 25%,
			35% 0%,
			65% 0%,
			65% 25%,
			90% 25%,
			90% 50%,
			65% 50%,
			65% 100%,
			35% 100%,
			35% 50%,
			10% 50%
		);
		cursor: pointer;
		p {
			font-size: 1.5vw;
			position: absolute;
			top: 30%;
			left: 50%;
			transform: translate(-50%, 0);
			cursor: pointer;
		}
	}
}

.zukki-sprech {
	position: absolute;
	top: 5%;
	left: 5%;
	background-image: url("/images/textures/snow.jpg");
	clip-path: polygon(
		0% 0%,
		100% 0%,
		100% 100%,
		100% 80%,
		50% 80%,
		60% 100%,
		40% 80%,
		0% 80%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	text-align: center;
	p {
		padding: 10px;
		padding-bottom: 30px;
	}
}

.zukki-reactions {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 2;
	background: black;

	.zukki-saufen {
		img {
			width: 80vw;
		}
		video {
			width: 100vw;
		}
	}
}

@mixin mixinZukki {
	overflow: visible;
	height: 100%;
	width: 100%;
	color: black;
	font-size: 30px;
	font-family: Universalis;
	margin-bottom: 20px;
	line-height: 60px;
}

.zukki-start {
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
		font-size: 80px;
		font-family: Stage;
		color: black;
		text-align: center;
		z-index: 4;
		margin-bottom: 2%;
	}
}


@mixin zukki-vorhang-mixin {
	position: fixed;
	top: 0;
		height: 100vh;
	width: 52vw;
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

.zukki-vorhangl {
		@include zukki-vorhang-mixin;

	left: 0;
}

.zukki-vorhangr {
		@include zukki-vorhang-mixin;

	right: 0;
}
</style>
