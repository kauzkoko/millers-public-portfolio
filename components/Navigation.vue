<template>
	<div class="Navigation-container">
		<NuxtLink to="/" no-prefetch>Start</NuxtLink>
		<NuxtLink to="/avatar/avatarEdit">Avatar Edit</NuxtLink>
		<NuxtLink to="/kulissen/$0$0$0">Nullpunkt</NuxtLink>
		<NuxtLink to="/luca/allfeatures" no-prefetch>luca All Features</NuxtLink>
	</div>
</template>

<script>
let flyAwayAnime;
export default {
	data() {
		return {
			slug: this.$route.path.split("/")[this.$route.path.split("/").length - 1],
		};
	},
	mounted() {
		flyAwayAnime = this.$anime({
			targets: "#bird",
			translateX: "100vw",
			translateY: "-100px",
			backgroundColor: "red",
			fontSize: "30px",
			duration: 3000,
			easing: "easeInSine",
		});
	},
	computed: {
		splittedSlug: function () {
			return this.slug.split("$");
		},
		xCoor: function () {
			return parseInt(this.splittedSlug[1]);
		},
		yCoor: function () {
			return parseInt(this.splittedSlug[2]);
		},
		zCoor: function () {
			return parseInt(this.splittedSlug[3]);
		},
		leftLink: function () {
			let left = this.xCoor - 1;
			return "/kulissen/$" + left + "$" + this.yCoor + "$" + this.zCoor;
		},
	},
	methods: {
		singAndFly() {
			this.$sounds.bird.play();
			this.animeEl();
		},
		animeEl() {
			flyAwayAnime = this.$anime({
				targets: "#bird",
				translateX: "100vw",
				translateY: "-100px",
				backgroundColor: "red",
				fontSize: "30px",
				duration: 3000,
				easing: "easeInSine",
			});
		},
		flyBack() {
			flyAwayAnime.reverse();
		},
		flyStart() {
			flyAwayAnime.play();
		},
		flyRestart() {
			flyAwayAnime.reverse();
			flyAwayAnime.restart();
		},
	},
};
</script>

<style lang="scss">
.Navigation-container {
	background: rgb(255, 229, 0);
	background: linear-gradient(
		172deg,
		rgba(255, 229, 0, 1) 31%,
		rgba(228, 2, 39, 1) 50%,
		rgba(15, 59, 134, 1) 61%
	);
	a {
		color: black;
		font-size: 30px;
	}
}
#bird {
	width: 60px;
	&:hover {
		-webkit-box-shadow: 0px 0px 81px 27px rgba(0, 0, 0, 0.59);
		-moz-box-shadow: 0px 0px 81px 27px rgba(0, 0, 0, 0.59);
		box-shadow: 0px 0px 81px 27px rgba(0, 0, 0, 0.59);
	}
}
</style>
