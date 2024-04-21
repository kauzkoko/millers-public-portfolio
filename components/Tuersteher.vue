<template>
	<div
		class="Tuersteher-container"
		:style="{
			transform: 'translate(' + left + 'vw, 35vh)',
		}"
	>
		<img
			ref="bot"
			src="/images/bots/tuersteher.png"
			@click="$emit('tuersteher-click')"
		/>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			left: 70,
		};
	},
	computed: {},
	mounted() {
		let counter = 0;
		setTimeout(() => {
			this.left = 85;
			setInterval(() => {
				if (counter % 2) this.left = 85;
				else this.left = 70;
				counter++;
			}, 5000);
		}, 1000);
	},
	methods: {
		...mapActions({}),
	},
};
</script>

<style lang="scss">
.Tuersteher-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 2;
	transition: transform 5s linear;
	img {
		height: 32vh;
		:hover {
			cursor: pointer;
		}
	}
}
</style>
