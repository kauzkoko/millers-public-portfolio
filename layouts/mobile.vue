<template>
	<div class="mobileLayout-container">
		<Nuxt />
		<div
			class="mobileChat-vorhangl"
		></div>
		<div
			class="mobileChat-vorhangr"
		></div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	data() {
		return {
		};
	},
	watch: {},
	mounted() {},
	computed: {},
	methods: {},
};
</script>

<style lang="scss">
html {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.mobileLayout-container {
	width: 100vw;
	height: 100vh;
	background-color: bisque;
}

.mobileChat-vorhangl {
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 50%;
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

	animation: K000-vorhang 4s ease-in-out forwards;
	z-index: 10;
}

.mobileChat-vorhangr {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100vh;
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

	animation: K000-vorhang 4s ease-in-out forwards;
	z-index: 10;
}

@keyframes K000-vorhang {
	from {
		width: 50%;
	}
	to {
		width: 4%;
	}
}
</style>
