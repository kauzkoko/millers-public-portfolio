<template>
	<iframe
		v-bind:src="youtubeLinks[youtubeLink]"
		frameborder="0"
		allow="autoplay; fullscreen"
		controls="false"
	></iframe>
</template>

<script>
export default {
	layout: "contentCentered",

	data() {
		return {
			youtubeLinks: [
				"https://www.youtube.com/embed/GdDSzLCz0WE?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/Bo2Rwf_CCW4?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/TAjSoVCF_NE?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/J65GfcpYOnc?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/YEMw8DZTzyg?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/b76U81yijsw?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/9VYDjAE4I8g?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/IyqfavtAS_o?autoplay=1&mute=1&controls=0",
				"https://www.youtube.com/embed/xKJEUWKo4e8?autoplay=1&mute=1&controls=0",
			],
			youtubeLink: this.getRandomInt(0, 8),
		};
	},
	methods: {
		getRandomInt(min, max) {
			let temp = Math.floor(Math.random() * Math.floor(max - min));
			return temp + Math.floor(min);
		},
	},
};
</script>

<style lang="scss">
iframe {
	width: 100%;
	height: 100%;
}
</style>
