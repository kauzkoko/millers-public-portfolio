<template>
	<div class="grid">
		<vue-friendly-iframe src="/kulissen/$0$-1$0"></vue-friendly-iframe>
		<vue-friendly-iframe src="/kulissen/$1$0$0"></vue-friendly-iframe>
		<vue-friendly-iframe src="/kulissen/$0$0$0"></vue-friendly-iframe>
		<vue-friendly-iframe src="/kulissen/$1$-1$0"></vue-friendly-iframe>
	</div>
</template>
<script>
import Vue from "vue";
import VueFriendlyIframe from "vue-friendly-iframe";

Vue.use(VueFriendlyIframe);

export default {
	layout: "empty",
	data() {
		return {};
	},
	created() {},
	mounted() {},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style lang="scss">
.grid {
	display: grid;
	height: 100vh;
	width: 100vw;
	background: yellow;
	grid-template-columns: calc(100vw * 0.5) calc(100vw * 0.5);
	grid-template-rows: calc(100vh * 0.5) calc(100vh * 0.5);
}

iframe {
	transform: scale(0.5);
	transform-origin: 0 0;
	width: 100vw;
	height: 100vh;
	border: none;
}
</style>
