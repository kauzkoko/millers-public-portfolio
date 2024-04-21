<template>
	<div class="DirectionController-outer">
		<div class="DirectionController-container">
			<div id="front-nav-top" v-if="oben" v-on:click="goUp()">
				<img src="/images/objects/wanderwegschild.png" />
			</div>
			<div id="front-nav-left" v-if="links" v-on:click="goLeft()">
				<img src="/images/objects/wanderwegschild.png" />
			</div>
			<div id="front-nav-right" v-if="rechts" v-on:click="goRight()">
				<img src="/images/objects/wanderwegschild.png" />
			</div>
			<div id="front-nav-bottom" v-if="unten" v-on:click="goDown()">
				<img src="/images/objects/wanderwegschild.png" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		backgroundColor: {
			type: String,
		},
		noTop: {
			type: Boolean,
		},
		noRight: {
			type: Boolean,
		},
		noBottom: {
			type: Boolean,
		},
		noLeft: {
			type: Boolean,
		},
	},
	data() {
		return {
			splittedSlug: [],
			showLeft: "block",
			showRight: "block",
			showTop: "block",
			showBottom: "block",
		};
	},
	created() {},
	mounted() {
		this.splittedSlug = this.$route.path.split("$");
		this.$store.commit("me/SET_MEAVATARSHOW", true);
	},
	computed: {
		...mapGetters({
			getMeX: "me/getMeX",
			getMeY: "me/getMeY",
			getMeZ: "me/getMeZ",
		}),
		xCoor: function () {
			return parseInt(this.splittedSlug[1]);
		},
		yCoor: function () {
			return parseInt(this.splittedSlug[2]);
		},
		zCoor: function () {
			return parseInt(this.splittedSlug[3]);
		},
		oben: function () {
			return this.noTop ? false : true;
		},
		rechts: function () {
			return this.noRight ? false : true;
		},
		unten: function () {
			return this.noBottom ? false : true;
		},
		links: function () {
			return this.noLeft ? false : true;
		},
	},
	methods: {
		goUp() {
			let top = this.yCoor - 1;
			this.$store.commit("me/SET_MEAVATARSHOW", false);
			this.$store.commit("me/SET_MEY", window.innerHeight - 150 - 100);
			this.$router.push(
				"/kulissen/dickicht/$" + this.xCoor + "$" + top + "$" + this.zCoor
			);
		},
		goLeft() {
			let left = this.xCoor - 1;
			this.$store.commit("me/SET_MEAVATARSHOW", false);
			this.$store.commit("me/SET_MEX", window.innerWidth - 100);
			this.$router.push(
				"/kulissen/dickicht/$" + left + "$" + this.yCoor + "$" + this.zCoor
			);
		},
		goRight() {
			let right = this.xCoor + 1;
			this.$store.commit("me/SET_MEAVATARSHOW", false);
			this.$store.commit("me/SET_MEX", 100);
			this.$router.push(
				"/kulissen/dickicht/$" + right + "$" + this.yCoor + "$" + this.zCoor
			);
		},
		goDown() {
			let down = this.yCoor + 1;
			this.$store.commit("me/SET_MEAVATARSHOW", false);
			this.$store.commit("me/SET_MEY", 100);
			this.$router.push(
				"/kulissen/dickicht/$" + this.xCoor + "$" + down + "$" + this.zCoor
			);
		},
	},
};
</script>

<style lang="scss">
@mixin DirectionController-arrow-base {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	transform: translate(0, -50%);
	z-index: 100;
	width: 120px;
	height: 120px;
	pointer-events: auto;
	&:hover {
		cursor: url("/images/cursors/matterhorn64.png"), auto;
	}
}

#front-nav-bottom {
	@include DirectionController-arrow-base;
	left: 50%;
	top: 83%;
	transform: translate(-50%, -100%);

	img {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		width: 100%;
	}
}

#front-nav-top {
	@include DirectionController-arrow-base;
	left: 50%;
	top: 1%;
	transform: translate(-50%, 0);

	img {
		-webkit-transform: rotate(-90deg);
		transform: rotate(-90deg);
		width: 100%;
	}
}

#front-nav-left {
	@include DirectionController-arrow-base;
	left: 1%;
	top: 50%;
	img {
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
		width: 100%;
	}
}

#front-nav-right {
	@include DirectionController-arrow-base;
	right: 1%;
	top: 50%;
	img {
		width: 100%;
	}
}
</style>
