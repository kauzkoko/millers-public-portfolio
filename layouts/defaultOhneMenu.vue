<template>
	<div>
		<div class="defaultOhneMenu-container">
			<Nuxt class="defaultOhneMenu-nuxt" />
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	watch: {
		$route() {
			//this.$store.dispatch("me/setMeRoomOfSlug", this.$route.path.split("$"));
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

.defaultOhneMenu-container {
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
}
</style>
