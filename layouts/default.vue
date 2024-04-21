<template>
	<div>
		<div class="defaultTemplate-container">
			<ChatWindow />
			<Nuxt class="defaultTemplate-nuxt" />
			<Menu class="defaultTemplate-menu" />
			<MenuBg style="z-index: 0" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	watch: {
		$route() {
			this.$store.dispatch("me/setMeRoomOfSlug", this.$route.path.split("$"));
			for (let sound in this.$sounds) {
				this.$sounds[sound].stop();
			}
		},
	},
	created() {
		this.$device.isMobileOrTablet
			? this.$router.push("/mobile/mobileStart")
			: false;
	},
	mounted() {},
	computed: {
		...mapGetters({
			getMe: "me/getMe",
		}),
	},
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

.defaultTemplate-container {
	background-color: black;
	overflow: hidden;
	display: grid;
	height: 100vh;
	width: 100vw;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 130px;
	grid-template-areas:
		"defaultTemplate-nuxt"
		"defaultTemplate-menu";
}

.defaultTemplate-nuxt {
	grid-area: defaultTemplate-nuxt;
	position: relative;
}

.defaultTemplate-menu {
	grid-area: defaultTemplate-menu;
	position: relative;
}
</style>
