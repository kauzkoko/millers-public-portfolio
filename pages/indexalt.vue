<template>
	<div class="index-container">
		<div class="index-wip">
			<img src="/images/wip/wip.png" />
		</div>
		<div class="index-bg animate__animated animate__fadeIn"></div>
		<div class="index-title">
			<p class="index-title-p">The Meaning Of Life</p>
		</div>
		<div class="index-start">
			<p class="index-start-p" v-on:click="goToStart()">Lass loslegen!</p>
		</div>
		<div class="index-impressum">
			<p class="index-impressum-p1">
				<NuxtLink to="/mitwirkende">Mitwirkende</NuxtLink>
			</p>
			<p class="index-impressum-p3"><NuxtLink to="/faq">FAQ</NuxtLink></p>
			<p class="index-impressum-p2">
				<NuxtLink to="/impressum">Impressum</NuxtLink>
			</p>
		</div>
		<div v-for="(image, i) in getHeads.length" v-show="false">
			 <img 
          		:src="getHeads[i].mainUrl"
        	></img>
		</div>
		<div v-for="(image, i) in getTorsos.length" v-show="false">
			 <img 
          		:src="getTorsos[i].mainUrl"
        	></img>
		</div>
		<div v-for="(image, i) in getLegs.length" v-show="false">
			 <img 
          		:src="getLegs[i].mainUrl"
        	></img>
		</div>
		<div v-show="false">
			<img src="/images/tamara/tamara.png" />
			<img src="/images/objects/lounge1.png" />
			<img src="/images/new stuff/wctafel.png" />
			<img src="/images/objects/separe.png" />
			<img src="/images/objects/separe_open.png" />
			<img src="/images/objects/lounge1.png" />
			<img src="/images/objects/notausgang.png" />
			<img src="/images/millers/object/millersstage.jpg" />
			<img src="/images/objects/barfg.png" />
			<img src="/images/millers/object/rosstisch.png" />
			<img src="/images/objects/vorhangicon.png" />
			<img src="/images/millers/texture/bird1.jpg" />
			<img src="/images/textures/affenwand.jpg" />
			<img src="/images/textures/barvorhang.jpg" />
			<img src="/images/textures/baum.jpg" />
			<img src="/images/textures/bug.jpg" />
			<img src="/images/textures/dirt.jpg" />
			<img src="/images/textures/gatsby_red.jpg" />
			<img src="/images/textures/gatsby.jpg" />
			<img src="/images/textures/gatsby2.jpg" />
			<img src="/images/textures/grass.jpg" />
			<img src="/images/textures/looney.jpg" />
			<img src="/images/textures/maskenaff.jpg" />
			<img src="/images/textures/perser.jpg" />
			<img src="/images/textures/snow.jpg" />
			<img src="/images/textures/stone1.jpg" />
			<img src="/images/textures/teppichsmall.jpg" />
			<img src="/images/textures/textur.jpg" />
			<img src="/images/textures/textur2.jpg" />
			<img src="/images/textures/wctaefer.jpg" />
			<img src="/images/objects/wolke1.png" />
			<img src="/images/objects/wolke2.png" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	layout: "empty",
	data() {
		return {
		};
	},
	mounted() {
	},
	computed: {
		...mapGetters({
			getHeads: "me/getAvatarAssetsHeads",
			getTorsos: "me/getAvatarAssetsTorsos",
			getLegs: "me/getAvatarAssetsLegs",
			getAvatarAssets: "me/getAvatarAssets",
		}),
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
		goToStart: function () {
			this.$router.push({ path: "tutorial" });
		},
	},
};
</script>

<style lang="scss">
@keyframes index-wiggle {
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(10deg);
	}
	25% {
		transform: rotate(-10deg);
	}
	50% {
		transform: rotate(20deg);
	}
	75% {
		transform: rotate(-5deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
@keyframes index-wiggle2 {
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(-10deg);
	}
	25% {
		transform: rotate(10deg);
	}
	50% {
		transform: rotate(-20deg);
	}
	75% {
		transform: rotate(5deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
@keyframes index-title {
	0% {
		top: -50%;
	}
	100% {
		top: 10%;
	}
}
@keyframes index-bg {
	0% {
		top: -100%;
	}
	100% {
		top: 0;
	}
}
@keyframes index-wip {
	0% {
		top: 100%;
	}
	100% {
		top: 0;
	}
}
@keyframes index-start {
	0% {
		transform: scale(0) translate(-500%, -100%);
		left: 100%;
		top: -20%;
	}
	100% {
		transform: scale(1) translate(-50%, 0);
	}
}
@keyframes index-impressum {
	0% {
		top: 120%;
	}
	100% {
		top: 85%;
	}
}

@keyframes index-bg {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.index-container {
	display: grid;
	height: 110vh;
	grid-template-areas:
		"header"
		"navigation"
		"main";
	grid-template-rows: 30vh 10vh 1fr;
	background-color: bisque;
}

.index-bg {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-image: url("/images/start/intro-bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	animation-name: index-bg;
	animation-duration: 2s;
	animation-delay: 2s;
	iteration-count: 1;
}

.index-title {
	position: absolute;
	width: 100%;
	height: 40%;
	left: 50%;
	top: 10%;
	transform: translate(-50%, 0);
	animation-name: index-title;
	animation-duration: 2s;
	iteration-count: 1;
	cursor: default;
	text-align: center;
	z-index: 1;
}
.index-title-p {
	font-family: Park;
	cursor: default;
	float: center;
	color: black;
	white-space: nowrap;
	line-height: 100%;
	font-size: 15vh;
	text-align: center;
	margin: auto;
	transition: all 1s ease-out;
	transform: rotate(0deg);
}

.index-start {
	position: absolute;
	width: 20%;
	height: 40%;
	left: 50%;
	top: 40%;
	transform: translate(-50%, 0);
	animation-name: index-start;
	animation-duration: 2s;
	iteration-count: 1;
	cursor: default;
	z-index: 1;
}

.index-wip {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	pointer-events: none;
	animation-name: index-wip;
	animation-duration: 4s;
	iteration-count: 1;
	z-index: 1;
	img {
		width: 100%;
	}
}

.index-start-p {
	position: relative;
	font-family: Pixel;
	white-space: pre-line;
	cursor: pointer;
	color: black;
	line-height: 150%;
	font-size: 2.3vw;
	text-decoration: underline;
	text-align: center;
	transition: all 1s ease-out;
	transform: rotate(0deg);
	&:hover {
		animation-name: index-wiggle;
		animation-duration: 1000ms;
		iteration-count: infinite;
		animation-timing-function: ease-in-out;
		transition: all 1s ease-out;
	}
}

.index-impressum {
	position: absolute;
	display: grid;
	grid-template-areas: "left" "middle" "right";
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	width: 65%;
	height: 10%;
	left: 50%;
	top: 85%;
	transform: translate(-50%, 0);
	animation-name: index-impressum;
	animation-duration: 3s;
	iteration-count: 1;
	z-index: 1;

	p {
		font-size: 1.4em;
	}
	a {
		color: black;
	}
}
.index-impressum-p1 {
	font-family: Pixel;
	display: inline-block;
	cursor: pointer;
	text-align: center;
	text-decoration: underline;
	transition: all 1s;
	&:hover {
		transform: scale(1.2);
		transition: all 0.2s;
	}
}

.index-impressum-p2 {
	font-family: Pixel;
	display: inline-block;
	cursor: pointer;
	text-align: center;
	text-decoration: underline;
	transition: all 1s;
	&:hover {
		transform: scale(1.2);
		transition: all 0.2s;
	}
}

.index-impressum-p3 {
	font-family: Pixel;
	display: inline-block;
	cursor: pointer;
	text-align: center;
	text-decoration: underline;
	transition: all 1s;
	&:hover {
		transform: scale(1.2);
		transition: all 0.2s;
	}
}

.index-avatar {
	position: absolute;
	width: 5%;
	height: 15%;
}

.index-head {
	position: absolute;
	width: 100%;
	height: 30%;
	z-index: 0;
}

.index-torso {
	position: absolute;
	top: 26%;
	width: 100%;
	height: 50%;
	z-index: 1;
}

.index-leg {
	position: absolute;
	width: 100%;
	height: 30%;
	top: 70%;
	z-index: 0;
}

.index-avatars {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	opacity: 0.5;
}
</style>
