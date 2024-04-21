<template>
	<!-- thxdrink -->
	<div class="thxdrink-container">
		<div class="thxdrink-main">
			<div class="thxdrink-textupper">
				<p>Endlich, ich kann auf die Bühne. Komm schau dir die Show an!</p>
			</div>
			<div class="thxdrink-img">
				<img src="/images/millers/misc/adrian15.png" />
			</div>
			<div class="thxdrink-textlower">
				<p>Aber hast du noch mehr von dem Zeugs?!</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "default",
	mounted() {
		for (let sound in this.$sounds) {
			this.$sounds[sound].stop();
		}
		this.$sounds.batman.play();
		setTimeout(() => this.$router.push({ path: "/kulissen/millers/stage" }), 7000);
	},
	data() {
		return {
		};
	},
	methods: {
	},
};
</script>

<style lang="scss">
//animations

@keyframes thxdrink-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

//classes container + grid

.thxdrink-container {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-image: url("/images/textures/looney.jpg");
	background-size: 100% 100%;
}

.thxdrink-main {
	width: 100%;
	height: 100%;
	z-index: 0;
}

//classes main

.thxdrink-textupper {
	position: absolute;
	width: 80%;
	left: 10%;
	top: 3%;
	p {
		font-family: UniversalisBold;
		font-size: 4vw;
		text-align: center;
		color: white;
	}
}

.thxdrink-img {
	position: absolute;
	width: 50%;
	left: 50%;
	top: 20%;
	img {
		transform: translate(-50%, 0);
		clip-path: polygon(
			0% 0%,
			100% 0,
			100% 67%,
			0 67%
		);
	}
}

.thxdrink-textlower {
	position: absolute;
	width: 100%;
	top: 70%;
	p {
		font-family: UniversalisBold;
		font-size: 4vw;
		text-align: center;
		color: white;
	}
}

@media screen and (min-width: 1920px) {
  	.thxdrink-img {
		top: 30%;
	}
}
</style>
