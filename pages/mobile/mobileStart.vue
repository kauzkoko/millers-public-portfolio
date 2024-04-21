<template>
	<div class="mobileStart-container">
		<div class="mobileStart-bg"></div>
		<div class="mobileStart-title">
			<p>The Meaning Of Life</p>
		</div>
		<div class="mobileStart-text">
			<div>
				<p>
					The Meaning Of Life in seiner ganzen Pracht findest du momentan nur auf dem
					Desktop. Als kleiner Vorgeschmack, darfst du per Wanderweg aber in den
					Millers-Chat reingüxxlen.
				</p>
			</div>
		</div>
		<WanderwegStange
			style="left: 30%; top: 75%; z-index: 9; transform: scale(1.2) rotate(10deg)"
			@wegweiser-click="$router.push('/mobile/mobileChat')"
		>
			<template v-slot:text>Zum Chat</template>
		</WanderwegStange>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	layout: "mobile",

	data() {
		return {};
	},
	created() {},
	mounted() {},
	computed: {},
	methods: {},
};
</script>

<style lang="scss">
.mobileStart-container {
	position: absolute;
	display: grid;
	grid-template-areas:
		"title"
		"text"
		"start";
	grid-template-columns: 100vw;
	grid-template-rows: 35vh 40vh 10vh;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

.mobileStart-bg {
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-image: url("/images/start/intro-bg.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.6;
}

.mobileStart-title {
	grid-area: title;
	position: relative;
	width: 90%;
	height: 100%;
	left: 5%;
	top: 0;
	z-index: 1;
	p {
		position: relative;
		top: 10%;
		font-family: Park;
		text-align: center;
		float: center;
		color: black;
		display: block;
		line-height: 100%;
		font-size: 10vh;
	}

	// animation-name: index-title;
	// animation-duration: 2s;
	// iteration-count: 1;
}

.mobileStart-text {
	background: bisque;
	grid-area: text;
	position: relative;
	width: 100%;
	height: 100%;
	top: 0;
	z-index: 1;
	background-image: url("/images/textures/wctaefer.jpg");
	background-size: 50px;
	div {
		max-width: 80%;
		margin-left: 10%;
		p {
			text-align: center;
			padding-top: 5%;
			font-family: Universalis;
			font-size: 22px;
		}
	}

	// animation-name: index-title;
	// animation-duration: 2s;
	// iteration-count: 1;
}

.mobileStart-start {
	grid-area: start;
	position: relative;
	width: 90%;
	height: 100%;
	left: 5%;
	top: 0;
	z-index: 1;
	a {
		position: relative;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		font-family: Park;
		text-align: center;
		float: center;
		color: black;
		display: block;
		line-height: 100%;
		font-size: 6vh;
		text-decoration: underline;
	}

	// animation-name: index-title;
	// animation-duration: 2s;
	// iteration-count: 1;
}
</style>
