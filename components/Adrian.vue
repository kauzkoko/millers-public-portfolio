<template>
	<div
		class="Adrian-container"
		:style="{
			transform: 'translate(' + left + 'vw, 22vh)',
		}"
		@click="$emit('Adrian-click')"
	>
		<img src="/images/bots/adrian_barkeeper.png" />
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			left: 35,
		};
	},
	computed: {},
	mounted() {
		let counter = 0;
		setTimeout(() => {
			this.left = 65;
		}, 1000);
		setInterval(() => {
			if (counter % 2) this.left = 35;
			else this.left = 65;
			counter++;
		}, 5000);
	},
	methods: {
		...mapActions({}),
	},
};
</script>

<style lang="scss">
.Adrian-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 2;
	transition: transform 5s linear;
	cursor: pointer;
	img {
		height: 32vh;
		width: 20vw;
	}
}
</style>
