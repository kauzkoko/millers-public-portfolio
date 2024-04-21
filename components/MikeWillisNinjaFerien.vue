<template>
	<div
		class="MikeWillisNinja-container"
		:style="{
			transform: 'translate(' + left + 'vw, ' + top + 'vh)',
		}"
		@click="onClick()"
	>
		<div />
		<div />

		<img src="/images/bots/mikewillisninja.png" />
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			top: -100,
			left: 0,
		};
	},
	computed: {},
	mounted() {
		this.left = getRandomInt(0, 90);
		let randomStartTime = getRandomInt(2000, 20000);
		setTimeout(() => {
			this.top = 50;
			setTimeout(() => {
				this.top = -100;
			}, 1000);
		}, randomStartTime);
	},
	methods: {
		onClick() {
			this.$emit("MikeWillisNinja-click");
			this.$sounds.sheep.play();
		},
	},
};
</script>

<style lang="scss">
.MikeWillisNinja-container {
	top: -100;
	position: absolute;
	width: 10vw;
	display: flex;
	justify-content: center;
	z-index: 2;
	transition: transform 1s linear;
	cursor: pointer;
	img {
		width: 100%;
		height: 20vw;
		z-index: 1;
	}
	div {
		z-index: 0;
		margin-top: -90vh;
		margin-left: -60px;
		position: absolute;
		background: bisque;
		min-width: 3px;
		min-height: 100vh;
	}

	div:nth-child(2) {
		z-index: 0;
		margin-top: -90vh;
		margin-left: 30px;
		position: absolute;
		background: bisque;
		min-width: 3px;
		min-height: 100vh;
	}
}
</style>
