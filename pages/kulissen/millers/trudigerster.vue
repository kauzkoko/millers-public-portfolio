<template>
	<div>
		<div class="trudigerster-container">
			<div><p>Forever in our hearts, Trudi!</p></div>
			<img src="/images/lueckentext/trudigerster.jpg" />
			<div>
				<p @click="playSound()" v-if="!isPlaying">Play</p>
				<div v-else>
					<p @click="pauseSound()">Pause</p>
					<p @click="stopSound()">Stopp</p>
				</div>
			</div>
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
			@wegweiser-click="leave()"
		>
			<template v-slot:text>An die Bar</template>
		</WanderwegStange>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	layout: "empty",
	data() {
		return {
			isPlaying: false,
		};
	},
	created() {},
	mounted() {},
	computed: {
		...mapGetters({
			getMeX: "me/getMeX",
		}),
		computedValue: function () {
			return;
		},
	},
	methods: {
		playSound() {
			this.$sounds.lueckentext.play();

			this.isPlaying = true;
		},
		pauseSound() {
			this.$sounds.lueckentext.pause();

			this.isPlaying = false;
		},
		stopSound() {
			this.$sounds.lueckentext.stop();
			this.isPlaying = false;
		},
		leave() {
			this.$sounds.lueckentext.stop();
			this.$router.push({ path: "/kulissen/millers/bar" });
		},
	},
};
</script>

<style lang="scss">
.trudigerster-container {
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: url("/images/millers/texture/bird1.jpg");
	background-size: 200px;
	height: 100vh;
	width: 100vw;

	p {
		font-family: Universalis;
		border: none;
		outline: none;
		font-size: 30px;
		border-radius: 50%;
		padding: 30px;
		background-image: url("/images/textures/wctaefer.jpg");
		background-size: 300px;
		//filter: invert(1);
		color: black;
	}

	> div:nth-child(1) {
		clip-path: polygon(
			0 33%,
			21% 1%,
			26% 33%,
			38% 2%,
			46% 34%,
			56% 5%,
			65% 37%,
			76% 1%,
			80% 32%,
			92% 2%,
			100% 32%,
			100% 100%,
			0 100%
		);
		background: gold;
		border-radius: 0;

		p {
			margin-top: 20px;
			background: transparent;
		}
	}
}
</style>
