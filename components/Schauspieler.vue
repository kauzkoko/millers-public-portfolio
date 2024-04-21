<template>
	<div
		class="Schauspieler-container"
	>
		<img
			ref="bot"
			src="/images/bots/Schauspieler.png"
			@click="$emit('Schauspieler-click')"
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
	},
	methods: {
		...mapActions({}),
	},
};
</script>

<style lang="scss">
@keyframes schauspieler {
	0% {
		left: 60%;
		top: 50%;
	}
	25% {
		left: 70%;
		top: 48%;
	}
	50% {
		left: 80%;
		top: 55%;
	}
	75% {
		left: 73%;
		top: 53%;
	}
	100% {
		left: 60%;
		top: 50%;
	}
}

@keyframes schauspieler2 {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.Schauspieler-container {
	left: 60%;
	top: 50%;
	position: absolute;
	width: 50px;
	display: flex;
	justify-content: center;
	z-index: 10;
	transition: transform 5s linear;
	animation: schauspieler 3s infinite;
	transform: scale(0.8);
	img {
		height: 32vh;
		:hover {
			cursor: pointer;
		}
	}
}
</style>
