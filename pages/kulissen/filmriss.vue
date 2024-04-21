<template>
	<!-- filmriss -->
	<div class="filmriss-container">
		<div class="filmriss-main">
			<div class="filmriss-textupper">
				<p>Zu tief ins Glas geschaut!</p>
			</div>
			<div class="filmriss-img">
				<img src="/images/objects/filmriss.png" />
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
		this.$sounds.filmriss.play();
		setTimeout(() => this.$router.push({ path: this.blackoutDestinations[this.getRandomInt(1, 26)]}), 3000);
	},
	data() {
		return {
			blackoutDestinations: [
				'/kulissen/dickicht/$-1$-1$0',
				'/kulissen/dickicht/$-1$-2$0',
				'/kulissen/dickicht/$-1$0$0',
				'/kulissen/dickicht/$-1$1$0',
				'/kulissen/dickicht/$-1$2$0',
				'/kulissen/dickicht/$-2$-1$0',
				'/kulissen/dickicht/$-2$-2$0',
				'/kulissen/dickicht/$-2$0$0',
				'/kulissen/dickicht/$-2$1$0',
				'/kulissen/dickicht/$-2$2$0',
				'/kulissen/dickicht/$0$0$0',
				'/kulissen/dickicht/$0$1$0',
				'/kulissen/dickicht/$0$2$0',
				'/kulissen/dickicht/$0$-1$0',
				'/kulissen/dickicht/$0$-2$0',
				'/kulissen/dickicht/$1$-1$0',
				'/kulissen/dickicht/$1$-2$0',
				'/kulissen/dickicht/$1$0$0',
				'/kulissen/dickicht/$1$1$0',
				'/kulissen/dickicht/$1$2$0',
				'/kulissen/dickicht/$2$-1$0',
				'/kulissen/dickicht/$2$-2$0',
				'/kulissen/dickicht/$2$0$0',
				'/kulissen/dickicht/$2$1$0',
				'/kulissen/dickicht/$2$2$0',
				'/kulissen/dickicht/$3$0$0',
			],
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
//animations

@keyframes filmriss-path {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

//classes container + grid

.filmriss-container {
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
	filter: grayscale(1);
}

.filmriss-main {
	width: 100%;
	height: 100%;
	z-index: 0;
}

//classes main

.filmriss-textupper {
	position: absolute;
	width: 100%;
	top: 8%;
	p {
		font-family: UniversalisBold;
		font-size: 4vw;
		text-align: center;
		color: white;
	}
}

.filmriss-img {
	position: absolute;
	width: 50%;
	left: 50%;
	top: 30%;
	img {
		transform: translate(-50%, 0);
	}
}

.filmriss-textlower {
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
</style>
