<template>
	<div v-show="popcornShow" class="Popcorn-container">
		<img
			ref="popcorn"
			class="Popcorn-popcorn"
			:class="popcornClicked ? 'animate__bounceOut' : ''"
			src="/images/inventory/popcorn2.png"
			@click="popcornClick()"
		/>
	</div>
</template>

<script>
import getRandomInt from "~/assets/javascript/helpers.js";
import { mapGetters, mapActions } from "vuex";

export default {
	props: {},
	data() {
		return {
			popcornShow: true,
			popcornClicked: false,
		};
	},
	computed: {},
	mounted() {
		this.$refs.popcorn.addEventListener("animationend", () => {
			this.popcornShow = false;
		});
	},
	methods: {
		popcornClick() {
			this.popcornClicked = true;
			this.addPopcorn();
			this.$sounds.chicki.play();
		},
		...mapActions({
			addPopcorn: "inventory/addPopcorn",
		}),
	},
};
</script>

<style lang="scss">
.Popcorn-container {
	top: 0;
	position: absolute;
	width: 60px;
	display: flex;
	justify-content: center;
	z-index: 5;
	:hover {
		cursor: pointer;
	}
}
.Popcorn-popcorn {
	//wege safari, skaliert nid automatisch mit width heights ka wieso
	width: 60px;
	height: 60px;
}
</style>
